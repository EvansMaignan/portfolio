import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { TranslateComponent } from "../i18n/translate.component";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    TranslateComponent
],
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

}
