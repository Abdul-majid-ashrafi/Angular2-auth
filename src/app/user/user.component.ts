import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    myForm: FormGroup;

  constructor(private mainService: MainServiceService,  private fb : FormBuilder) { 
    //   console.log(mainService) // delete

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
    // console.log('you submitted=======value: ', value);
    this.mainService.addUserData(value);
    // this.router.navigate(['/home']);

  }


}
