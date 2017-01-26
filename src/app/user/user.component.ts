import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    myForm: FormGroup;

  constructor(private mainService: MainServiceService,  private fb : FormBuilder, public router: Router) { 

       this.myForm = fb.group({
            'Name': [''],
            'FatherName': [''],
            'Education': [''],
            'Address': [''],
            'Age': [''],
            'DOB': [''],
            'Phone': [''],
        });
  }

  ngOnInit() {
  }


submited(value: any): void {
    this.mainService.addUserData(value);
    this.router.navigate(['/home']);

  }


}
