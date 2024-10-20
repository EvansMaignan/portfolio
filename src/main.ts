import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app-routing.component";
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "./app/i18n/translate-loader";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http"; // Importation de HttpClientModule
import { provideHttpClient } from "@angular/common/http"; // Fournisseur pour HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    provideAnimations(),
    provideHttpClient()
  ]
}).catch((err) =>
  console.error(err)
);
