import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup = null;
  model: Employee = null;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: EmployeeService,
  ) { this.model = new Employee(); }

  ngOnInit(): void {
    this._service.currentData.subscribe(c => {
        if (c != null || c !== undefined) {
          this.model = c;
          this.createForm();
        }
      }
    );

  }

  createForm(data: Employee = null): void {
    if (data == null) { data = this.model; }
    this.model = data == null ? new Employee() : data;
    this.employeeForm = this._formBuilder.group({
      id: data.id,
      name: [data.name, Validators.required],
      email: data.email,
      address: data.address,
      phone: data.phone,
    });
  }

  onSubmit(form: FormGroup): void {

    this.model = form.value;
    this._service.add(this.model).subscribe(c => {
      console.log('Save successfully');
    });
  }
}
