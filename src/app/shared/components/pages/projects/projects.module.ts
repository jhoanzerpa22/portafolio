import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routers';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsLanguagesModule } from '../../tools-languages/tools-languages.module';
import { RedirectButtonComponent } from './components/redirect-button/redirect-button.component';

@NgModule({
  declarations: [ProjectsComponent, RedirectButtonComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslateModule,
    ToolsLanguagesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule { }
