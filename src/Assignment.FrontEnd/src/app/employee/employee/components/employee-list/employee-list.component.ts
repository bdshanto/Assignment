/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'action'];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _service: EmployeeService,
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe((rData: Employee[]) => {
      if (rData.length > 0) {
        this.dataSource = new MatTableDataSource(rData);
        this.dataSource.paginator = this.paginator;

      }
    });
  }

  Edit(id: number): void {
    this._service.getById(id).subscribe(c => {
      if (c != null) {
        this._service.setData(c);
      }
    });

  }

  Delete(id): void {
    this._service.remove(id).subscribe(c => {
      this._service.getAll().subscribe();
    });
  }
}
