import { commonImports } from '../../../app-config/appModuleConfig';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { EmployeeService } from '../employee.service';


export const employeeExports = [commonImports];

export const empProviders = [EmployeeService];
export const empDeclarations = [EmployeeComponent, EmployeeListComponent];
