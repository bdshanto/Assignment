import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public currentData: BehaviorSubject<Employee>;
  public dataSource: BehaviorSubject<Employee>;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private readonly apiUrl: string = 'https://dotnet-assignment.herokuapp.com/api/employee';

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
    return this._http.post<Employee>(this.apiUrl, employee, this.httpOptions);
  }

  update(employee: Employee): any {
    return this._http.put(this.apiUrl + '/' + employee.id, employee, this.httpOptions);
  }

  remove(id: number): any {
    return this._http.delete(this.apiUrl + '/' + id, this.httpOptions);
  }

  getAll(): any {
    return this._http.get(this.apiUrl, this.httpOptions);
  }

  getById(id: number): any {
    return this._http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  errorHandler(error): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    }
    else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
