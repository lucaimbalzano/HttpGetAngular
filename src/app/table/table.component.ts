import { Users } from './../services/crud-service.model';
import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../services/crud-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users : Users;

  constructor(private _crudService : CrudServiceService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this._crudService.getAll()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}
