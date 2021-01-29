import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { empDeclarations } from '../config/employee_module_config';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly apiUrl: string = 'http://localhost:44389/api/employee/';

  public currentData: BehaviorSubject<Employee>;
  public dataSource: BehaviorSubject<Employee>;

  constructor(
    private _http: HttpClient
  ) {
    this.currentData = new BehaviorSubject<Employee>(null);
    this.dataSource = new BehaviorSubject<Employee>(null);
  }

  setData(entity: Employee): any {
    this.currentData.next(entity);
  }

  add(employee: Employee): any {
    return this._http.post(this.apiUrl, employee);
  }

  update(employee: Employee): any {
    return this._http.put(this.apiUrl + '/' + employee.id, employee);
  }

  getAll(): any {
    return this._http.get(this.apiUrl);
  }

}
