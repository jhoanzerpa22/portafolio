import { Component, Input } from '@angular/core';
import { InfiniteCarouselType } from '../../../models/infiniteCarouselType';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.scss'
})
export class InfiniteCarouselComponent {
  @Input() carouselList: InfiniteCarouselType[] = [];
}
