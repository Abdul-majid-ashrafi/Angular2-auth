import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

// getJob : any;
data : any
  constructor(private mainService: MainServiceService) { 

      let allUsers = mainService.allUsers;
      allUsers.subscribe(item => {
          this.data = item
          console.log("hello",this.data)
      })

  }

  ngOnInit() {
  }

}
