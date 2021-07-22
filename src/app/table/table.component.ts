import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../services/crud-service.service';
import { user } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { address } from '../address';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private crudService : CrudServiceService, private formBuilder : FormBuilder) { }

  users : user = { 
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }
    }
  }
  usersAdded:user[];

  formValue ! : FormGroup;

  ngOnInit(): void {
    this.retrieveData();
   
  //   this.formValue = this.formBuilder.group({
  //     name  : ['', Validators.required],
  //     username : [''],
  //     email : [''],
  //     address : this.formBuilder.group({
  //       street : [''],
  //       suite : [''],
  //       city: [''],
  //       zipcode: [''],
  //       geo: this.formBuilder.group({
  //         lat: [''],
  //         lng: ['']
  //       })
  //      })
  //  })
  }

  retrieveData(): void {
    this.crudService.getAll()
      .subscribe(
        data=> {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }




  createUser(): void{
    //if you are using fomValue and formBuilder add also formControlName and formGroupName and formGroup
    // this.users.name = this.formValue.value.name;
    // this.users.username = this.formValue.value.username;
    // this.users.email = this.formValue.value.email;
    // this.users.address.street = this.formValue.value.formBuilder.address.street;
    // this.users.address.suite = this.formValue.value.suite;
    // this.users.address.city = this.formValue.value.city;
    // this.users.address.zipcode = this.formValue.value.zipcode;

    this.crudService.createUser(this.users)
      .subscribe(
        res=>{
          console.log(res);
        },
        error => {
          console.log(error);
        }
      )  
  }

}
