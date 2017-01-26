import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
    userArray : any
  constructor(private mainService: MainServiceService) { 

     this.userArray = []
     let allUsers = mainService.allUsers;
     allUsers.subscribe(item => {
        for (var index = 0; index < item.length; index++) {
            var element = item[index];
            if(element.AccountType === "Student")
            this.userArray.push(element)            
        }
      })
  }

  ngOnInit() {
  }

}
