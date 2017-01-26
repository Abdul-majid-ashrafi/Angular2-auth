import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-get-all-companeis',
  templateUrl: './get-all-companeis.component.html',
  styleUrls: ['./get-all-companeis.component.css']
})
export class GetAllCompaneisComponent implements OnInit {
 companiesArray : any
 keys: any
  constructor(private mainService: MainServiceService) { 
    this.keys = localStorage.getItem('key')

     this.companiesArray = []
     let allUsers = mainService.allUsers;
     allUsers.subscribe(item => {
        for (var index = 0; index < item.length; index++) {
            var element = item[index];
            if(element.AccountType === "Compony")
            this.companiesArray.push(element)            
        }
      })
  }

  ngOnInit() {
  }

}
