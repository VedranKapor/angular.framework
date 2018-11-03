import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import { AddNewCaseComponent } from './AddNewCase/addnewcase.component';
import { ManageCasesComponent } from './ManageCases/managecases.component';

const routes: Routes = [
  { path: 'addnewcase', component: AddNewCaseComponent, data: {pageTitle: 'Add New Case'} },
  { path: 'managecases', component: ManageCasesComponent, data: {pageTitle: 'Manage Cases'}}
];

export const routing = RouterModule.forChild(routes);
