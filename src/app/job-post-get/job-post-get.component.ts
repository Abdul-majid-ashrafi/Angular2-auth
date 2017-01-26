import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-job-post-get',
  templateUrl: './job-post-get.component.html',
  styleUrls: ['./job-post-get.component.css']
})
export class JobPostGetComponent implements OnInit {
    allJobs : any;
    jobData:any;
    keys: any;
  constructor(private mainService: MainServiceService,private af : AngularFire) { 
    this.keys = localStorage.getItem('key')
          this.jobData = mainService.jobData;
          this.jobData.subscribe(item => {
          this.allJobs = item
          console.log(this.keys)
      })

  }
  ngOnInit() {
  }

remove(key:any){
    this.jobData.remove(key)
}
}
