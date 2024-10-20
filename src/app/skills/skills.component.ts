import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TranslateComponent } from "../i18n/translate.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    TranslateComponent
],
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

}
