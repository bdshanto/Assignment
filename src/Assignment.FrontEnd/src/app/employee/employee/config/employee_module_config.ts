import { commonImports } from '../../../app-config/appModuleConfig';
import { EmployeeService } from '../employee.service';

export const employeeExports = [commonImports];

export const empProviders = [EmployeeService];
