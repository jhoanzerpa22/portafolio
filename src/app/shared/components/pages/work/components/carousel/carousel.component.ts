import { Component, Input, OnChanges } from '@angular/core';
import { Work } from '../../../../../../models/work.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnChanges {
  @Input() language: string = 'es';
  @Input() workList: Work[] = [];

  textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  ngOnChanges() {
    this.textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  }

}
