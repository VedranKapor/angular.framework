import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'

import {routing} from './casestudies.routing';
import { AddNewCaseComponent } from './AddNewCase/addnewcase.component';
import { ManageCasesComponent } from './ManageCases/managecases.component';

@NgModule({
  imports: [
    SmartadminModule,
    routing,
  ],
  declarations: [
    AddNewCaseComponent,
    ManageCasesComponent
  ],
  providers: [],
})
export class CaseStudiesModule {

}
