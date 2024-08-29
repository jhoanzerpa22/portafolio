import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
//import { motivationalQuotes } from '../../../common/globalvariables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  phraseEn: string[] = ["10+ Years of Experience"]/*motivationalQuotes.en*/;
  phraseEs: string[] = ["10+ Años de Experiencia"]/*motivationalQuotes.es*/;
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
