import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../services/crud-service.service';
import { user } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private crudService : CrudServiceService) { }

  users : user;
  ngOnInit(): void {
    this.retrieveData();
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

}
