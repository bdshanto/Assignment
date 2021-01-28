import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empDeclarations } from '../config/employee_module_config';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly apiUrl: string = 'http://localhost:44389/api/employee/';

  constructor(
    private _http: HttpClient
  ) { }

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
