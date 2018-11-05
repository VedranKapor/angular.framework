import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-addnewcase',
  templateUrl: './addnewcase.component.html',
})
export class AddNewCaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
