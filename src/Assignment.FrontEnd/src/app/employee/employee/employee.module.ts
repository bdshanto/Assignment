import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { commonImports } from '../../app-config/appModuleConfig';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { empDeclarations, employeeExports, empProviders } from './config/employee_module_config';

@NgModule({
  declarations: [empDeclarations],
  imports: [commonImports, ],
  exports: [employeeExports],
  providers: [empProviders]
})
export class EmployeeModule {}
