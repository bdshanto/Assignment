import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { commonImports } from '../../app-config/appModuleConfig';
import { empDeclarations, empProviders } from '../config/employee_module_config';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [empDeclarations],
  imports: [commonImports, EmployeeRoutingModule, HttpClientModule],

  providers: [empProviders]
})
export class EmployeeModule {}
