import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from '../employee-routing.module';
import { EmployeeService } from '../employee.service';

export const employeeExport = [
  CommonModule,
  EmployeeRoutingModule
];
export const empProviders = [EmployeeService];
