import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { motivationalQuotes } from '../../../common/globalVariables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  phraseEn: string[] = motivationalQuotes.en;
  phraseEs: string[] = motivationalQuotes.es;
  lang: string = "es";

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
}
