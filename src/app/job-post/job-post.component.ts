import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  myForm: FormGroup;

  constructor(private mainService: MainServiceService,  private fb : FormBuilder, public router: Router) { 

       this.myForm = fb.group({
            'Title': [''],
            'Description': [''],
            'Salary': ['']
        });
  }

  ngOnInit() {
  }


submited(value: any): void {
    this.mainService.jobPost(value);
    // this.router.navigate(['/home']);

  }

}
