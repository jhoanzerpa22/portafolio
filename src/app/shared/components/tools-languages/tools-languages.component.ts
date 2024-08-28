import { /*AfterViewInit, */Component, Input, OnInit } from '@angular/core';
import { ToolsLanguages } from '../../../models/toolsLanguages.model';
import { ToolsLanguagesService } from '../../components/tools-languages/services/tools-languages.service';
//import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-tools-languages',
  templateUrl: './tools-languages.component.html',
  styleUrls: ['./tools-languages.component.css']
})
export class ToolsLanguagesComponent implements OnInit/*, AfterViewInit*/ {

  listaHerramientas: ToolsLanguages[] = []

  @Input() tipoListaDefault: number = 0;
  @Input() tipoLista: number = 0;

  constructor(public serviceTool: ToolsLanguagesService) { }
  /// Estado = 0 (Solo Trabajo)
  /// Estado = 1 (Solo Proyectos Personales)
  /// Estado = 2 (Aplica para las 2)
  ngOnInit(): void {
    this.listaHerramientas = this.serviceTool.listaHerramientas.filter(
      h =>
        h.estado == this.tipoListaDefault
        ||
        h.estado == this.tipoLista
    );
    // this.carrucel();
  }

  /**
   * visualización carusel para los logos
   */
 /* ngAfterViewInit() {
    bulmaCarousel.attach('#carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      loop: true,
      pagination: false,
      infinite: true
    });
  }*/
}
