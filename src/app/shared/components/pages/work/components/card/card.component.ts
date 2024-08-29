import { Component, Input, OnChanges } from '@angular/core';
import { Work } from '../../../../../../models/work.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  @Input() language: string = 'es';
  @Input() workList: Work[] = [];
  textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  ngOnChanges() {
    this.textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  }
}
