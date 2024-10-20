import { Component, ViewChild } from '@angular/core';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule, MatDrawer} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateComponent } from './i18n/translate.component';

@Component({
  standalone: true,

  imports: [
    RouterModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateComponent
  ],

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isDrawerOpen = false;

  tooltipOpenMenu: string = '';
  tooltipCloseMenu: string = '';

  currentLang: string;

  constructor(private translate: TranslateService) {
    const browserLang = navigator.language.split('-')[0];
    this.currentLang = browserLang.match(/en|fr/) ? browserLang : 'en';
    translate.use(this.currentLang);

    this.translate.get(['MENU.CLOSE_MENU', 'MENU.OPEN_MENU']).subscribe(translations => {
      this.tooltipOpenMenu = translations['MENU.OPEN_MENU'];
      this.tooltipCloseMenu = translations['MENU.CLOSE_MENU'];
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.translate.get(['MENU.CLOSE_MENU', 'MENU.OPEN_MENU']).subscribe(translations => {
      this.tooltipOpenMenu = translations['MENU.OPEN_MENU'];
      this.tooltipCloseMenu = translations['MENU.CLOSE_MENU'];
    });
  }
}
