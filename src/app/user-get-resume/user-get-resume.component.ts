import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-user-get-resume',
  templateUrl: './user-get-resume.component.html',
  styleUrls: ['./user-get-resume.component.css']
})
export class UserGetResumeComponent implements OnInit {
userResume:any;
data: any
  constructor(private mainService: MainServiceService) { 

this.userResume = mainService.userResume;
  }

  ngOnInit() {
  }

}
