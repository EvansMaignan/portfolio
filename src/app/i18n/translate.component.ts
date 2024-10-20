import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [
    CommonModule,
    NgIf
  ],
  template: `
    <ng-container *ngIf="translatedText">{{ translatedText }}</ng-container>
  `
})
export class TranslateComponent implements OnInit {
  @Input() key: string = '';
  translatedText: string = '';

  constructor(private translateService: TranslateService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTranslation();

    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslation();
    });
  }

  private updateTranslation() {
    this.translateService.get(this.key).subscribe((translation: string) => {
      this.translatedText = translation;
      this.cdr.markForCheck();
    });
  }
}
