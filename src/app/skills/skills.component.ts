import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule
  ],
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

}
