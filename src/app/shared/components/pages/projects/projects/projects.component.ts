import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from '../../../../../models/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [];
  language: string = "es";
  textButton: string = 'Ver más - Código - Demostración - Ver más - '
  private textButtonLanguage = ['Ver más - Código - Demostración - Ver más - ', 'See more - Code - Demo - See more - ']

  constructor(private projectService: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.getProjects();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
      this.textButton = event.lang == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1]
    });
  }

  ngOnInit(): void {
    //this.spinnerService.show();
    this.language = this.translate.currentLang;
    this.textButton = this.language == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1]
  }

  getProjects() {
    this.projectList = [{
      title: 'Antofa Innova',
      titleEn: 'Antofa Innova',
      tool: '',
      description: 'Proyecto de antofagasta',
      descriptionEn: 'Proyecto de antofagasta',
      image: '',
      image2: '',
      url: ''
    }] as Project[];
    /*this.projectService.cargarProyectos().subscribe((data: any) => {
      this.projectList = data as Project[];
      this.spinnerService.hide();
    });*/
  }
}
