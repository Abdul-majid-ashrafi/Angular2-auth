import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-job-post-get',
  templateUrl: './job-post-get.component.html',
  styleUrls: ['./job-post-get.component.css']
})
export class JobPostGetComponent implements OnInit {
getJob : any;
data : any
  constructor(private mainService: MainServiceService) { 

      this.getJob = mainService.jobData;
      this.getJob.subscribe(item => {
          this.data = item
      })

  }

  ngOnInit() {
  }

}
