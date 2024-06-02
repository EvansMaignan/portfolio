import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule
  ],
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

}
