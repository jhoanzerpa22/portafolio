import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//import { language } from './common/globalvariables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    const lenguajeNavegador = window.navigator.language;
    this.translate.addLangs([/*language.es.toString(), language.en.toString()*/'es','en']);
    this.translate.setDefaultLang('es');
    if (lenguajeNavegador.toString().indexOf("en") !== -1) {
      this.translate.use(/*language.en.toString()*/'en');
    } else {
      this.translate.use(/*language.es.toString()*/'es');
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
