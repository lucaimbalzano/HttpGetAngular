import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../services/crud-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private crudService : CrudServiceService) { }

  product : any;
  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.crudService.getAll()
      .subscribe(
        data=> {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
