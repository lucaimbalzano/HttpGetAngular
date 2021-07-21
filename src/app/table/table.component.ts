import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../services/crud-service.service';
import { user } from '../user';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private crudService : CrudServiceService, private formBuilder : FormBuilder) { }

  users : user;
  usersAdded:user[];

  formValue ! : FormGroup;

  ngOnInit(): void {
    this.retrieveData();
    this.formValue = this.formBuilder.group({
      name  : [''],
      surname : [''],
      email : [''],
      street : [''],
      city: [''],
      zipcode: ['']
       })
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
    this.crudService.createUser()
      
  }

}
