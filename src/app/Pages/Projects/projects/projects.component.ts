import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from '../../../models/project';
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
      title: 'ConectIA',
      titleEn: 'ConectIA',
      tool: '',
      description: 'Sistema administrativo online desarrollado en Angular y NodeJs creado para el seguimiento y control de evaluaciones y auditorias en empresas, cumpliendo las leyes de la biblioteca General de Chile y la sincrozación diaria con las normativas mas actualizadas del País',
      descriptionEn: 'Sistema administrativo online desarrollado en Angular y NodeJs creado para el seguimiento y control de evaluaciones y auditorias en empresas, cumpliendo las leyes de la biblioteca General de Chile y la sincrozación diaria con las normativas mas actualizadas del País',
      image: './assets/image/projects/conectia.png',
      image2: './assets/image/projects/conectia.png',
      url: 'https://conect-ia-1bbab.web.app/'
    },{
      title: 'Elev',
      titleEn: 'Elev',
      tool: '',
      description: 'Sistema administrativo online desarrollado en Angular y Laravel usando microservicios desarrollados en GoLang orientado a la gestión  y asesoría especializada en Contabilidad y Remuneraciones para Colegios Particulares Subvencionados prestando todo el apoyo profesional para Controlar las Finanzas y el Recurso Humano de las instituciones educacionales.',
      descriptionEn: 'Sistema administrativo online desarrollado en Angular y Laravel usando microservicios desarrollados en GoLang orientado a la gestión  y asesoría especializada en Contabilidad y Remuneraciones para Colegios Particulares Subvencionados prestando todo el apoyo profesional para Controlar las Finanzas y el Recurso Humano de las instituciones educacionales.',
      image: './assets/image/projects/elev.png',
      image2: './assets/image/projects/elev.png',
      url: 'https://app.elev.cl/login'
    },{
      title: 'Mbipi',
      titleEn: 'Mbipi',
      tool: '',
      description: 'Aplicación web orientada a la gestión de proyectos utilizando metodologias design, usando herramientas audiovisuales y dinamicas en tiempo real con socket y angular y gestor de bases de datos Nodejs',
      descriptionEn: 'Aplicación web orientada a la gestión de proyectos utilizando metodologias design, usando herramientas audiovisuales y dinamicas en tiempo real con socket y angular y gestor de bases de datos Nodejs',
      image: './assets/image/projects/mbipi.png',
      image2: './assets/image/projects/mbipi.png',
      url: 'https://mbipi-61d04.web.app/'
    },{
      title: 'Antofa Innova',
      titleEn: 'Antofa Innova',
      tool: '',
      description: 'Este proyecto es una plataforma creada con el propósito de conectar de manera acelerada a emprendedores con el mercado del ecosistema regional, es una red colaborativa conformada por diversas instituciones que tienen un objetivo común: impulsar y apoyar el crecimiento del emprendimiento de la comunidad de Antofagasta en Chile. Estado desarrollado con panel administrativo que gestiona la información del portal usando tecnólogias como Angular y NodeJs',
      descriptionEn: 'Este proyecto es una plataforma creada con el propósito de conectar de manera acelerada a emprendedores con el mercado del ecosistema regional, es una red colaborativa conformada por diversas instituciones que tienen un objetivo común: impulsar y apoyar el crecimiento del emprendimiento de la comunidad de Antofagasta en Chile. Estado desarrollado con panel administrativo que gestiona la información del portal usando tecnólogias como Angular y NodeJs',
      image: './assets/image/projects/antofa.png',
      image2: './assets/image/projects/antofa.png',
      url: 'https://www.plataformantofainnova.cl/portal/'
    },{
      title: 'GolfManager',
      titleEn: 'GolfManager',
      tool: '',
      description: 'Este proyecto esta desarrollado en VueJs y Laravel, es una plataforma desarrollada para la gestión de Reservas de campos de Golf y Hoteles con pasarela de pago Stripe.',
      descriptionEn: 'Este proyecto esta desarrollado en VueJs y Laravel, es una plataforma desarrollada para la gestión de Reservas de campos de Golf y Hoteles con pasarela de pago Stripe.',
      image: './assets/image/projects/golfmanager.png',
      image2: './assets/image/projects/golfmanager.png',
      url: 'https://portal.golfmanager.app/consumer/portal'
    },{
      title: 'Sipmis',
      titleEn: 'Sipmis',
      tool: '',
      description: 'Sipmis es un sistema administrativo online para la gestión de medicos y pacientes, permitiendo agendar citas y administrar las consultas con los pacientes y sus tratamientos. Desarrollado en CodeIgniter',
      descriptionEn: 'Sipmis es un sistema administrativo online para la gestión de medicos y pacientes, permitiendo agendar citas y administrar las consultas con los pacientes y sus tratamientos.Desarrollado en CodeIgniter',
      image: './assets/image/projects/sipmis.png',
      image2: './assets/image/projects/sipmis.png',
      url: 'https://www.sipmis.co/login'
    },
  ] as Project[];
    /*this.projectService.cargarProyectos().subscribe((data: any) => {
      this.projectList = data as Project[];
      this.spinnerService.hide();
    });*/
  }
}
