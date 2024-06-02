import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EducationComponent} from "./education/education.component";
import {SkillsComponent} from "./skills/skills.component";
import {WorkExperienceComponent} from "./work-experience/work-experience.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'work-experience', component: WorkExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '**', redirectTo: 'home'}
];

export class AppRouting { }

