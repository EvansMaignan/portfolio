import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { TranslateComponent } from "../i18n/translate.component";
import { TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    TranslateComponent,
    MatTooltipModule
],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tooltipGithub: string = '';
  tooltipLinkedIn: string = '';
  cvLink: string = '';

  constructor(private translate: TranslateService) {
    this.updateTooltips();
    this.translate.onLangChange.subscribe(() => {
      this.updateTooltips();
      this.updateCVLink();
    });
  }

  private updateTooltips() {
    this.translate.get(['HOME.GITHUB', 'HOME.LINKEDIN']).subscribe(translations => {
      this.tooltipGithub = translations['HOME.GITHUB'];
      this.tooltipLinkedIn = translations['HOME.LINKEDIN'];
    });
  }

  private updateCVLink() {
    const currentLang = this.translate.currentLang || 'en';
    this.cvLink = `assets/CV-${currentLang}.pdf`;
  }
}
