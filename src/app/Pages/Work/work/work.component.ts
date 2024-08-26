import { Component } from '@angular/core';
import { Work } from '../../../models/work.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WorkService } from '../services/work.service'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workList: Work[] = [];
  language: string = "es";

  constructor(
    private workService: WorkService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
    });
    this.getWork();
  }

  ngOnInit(): void {
    //this.spinnerService.show();
    this.language = this.translate.currentLang;
  }

  private getWork() {
    this.workList = [{
      title: 'Invtec “Inversiones Tecnológicas” C.A',
      description: 'Analista Programador',
      descriptionEn: 'Programmer analyst',
      image: './assets/image/bussiness/invtec.png',
      url: '',
      startDate: 'Ene-2014',
      startDateEn: 'Ene-2014',
      endDate: 'Mar-2014',
      endDateEn: 'Mar-2014',
      order: 0
    },{
      title: 'Tenesoft “Consultoria Estrategica” C.A',
      description: 'Desarrollador Mobile',
      descriptionEn: 'Mobile Developer',
      image: './assets/image/bussiness/tenesoft.png',
      url: 'https://www.tenesoft.com/',
      startDate: 'Mar-2014',
      startDateEn: 'Mar-2014',
      endDate: 'May-2014',
      endDateEn: 'May-2014',
      order: 1
    },{
      title: 'Softfarm C.A',
      description: 'Desarrollador Web',
      descriptionEn: 'Web Developer',
      image: './assets/image/bussiness/softfarm.jpeg',
      url: 'http://www.softfarm.com.ve/',
      startDate: 'May-2014',
      startDateEn: 'May-2014',
      endDate: 'Mar-2016',
      endDateEn: 'Mar-2016',
      order: 2
    },{
      title: 'Hispanos Soluciones C.A',
      description: 'Desarrollador FullStack',
      descriptionEn: 'FullStack Developer',
      image: './assets/image/bussiness/hispano.png',
      url: 'https://hispanossoluciones.com/',
      startDate: 'Mar-2016',
      startDateEn: 'Mar-2016',
      endDate: 'Mar-2019',
      endDateEn: 'Mar-2019',
      order: 3
    },{
      title: 'Elev Spa',
      description: 'Desarrollador FullStack',
      descriptionEn: 'FullStack Developer',
      image: './assets/image/bussiness/elev.png',
      url: '',
      startDate: 'Mar-2019',
      startDateEn: 'Mar-2019',
      endDate: 'Oct-2021',
      endDateEn: 'Oct-2021',
      order: 4
    },{
      title: 'TresIdea C.A',
      description: 'Desarrollador FullStack',
      descriptionEn: 'FullStack Developer',
      image: './assets/image/bussiness/tresidea.jpeg',
      url: 'https://www.tresidea.cl/',
      startDate: 'Oct-2021',
      startDateEn: 'Oct-2021',
      endDate: 'Actual',
      endDateEn: 'Present',
      order: 5
    }] as Work[];
    this.spinnerService.hide();
    /*this.workService.cargarTrabajos().subscribe((data: any) => {
      this.workList = data as Work[];
      this.workList.sort((first, second) => second.order - first.order);
      this.spinnerService.hide();
    });*/
  }
}
