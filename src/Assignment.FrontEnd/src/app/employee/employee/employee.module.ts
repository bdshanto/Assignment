import { NgModule } from '@angular/core';
import { commonImports } from '../../app-config/appModuleConfig';
import { empDeclarations, employeeExports, empProviders } from './config/employee_module_config';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [empDeclarations],
  imports: [commonImports, EmployeeRoutingModule],
  exports: [employeeExports],
  providers: [empProviders]
})
export class EmployeeModule {}
