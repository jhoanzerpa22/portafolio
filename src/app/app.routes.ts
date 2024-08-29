import {ModuleWithProviders} from '@angular/core';
import { /*PreloadAllModules, */RouterModule, Routes } from '@angular/router';
/*import { HomeModule } from './pages/home/home.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { WorkModule } from './pages/work/work.module';
import { LearningModule } from './pages/learning/learning.module';*/

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    //providers?: Provider[];
  }
}
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./shared/components/pages/home/home.module').then(home => home.HomeModule) },
  { path: 'perfil', loadChildren: () => import('./shared/components/pages/profile/profile.module').then(profile => profile.ProfileModule) },
  { path: 'proyectosPersonales', loadChildren: () => import('./shared/components/pages/projects/projects.module').then(projects => projects.ProjectsModule) },
  { path: 'trabajos', loadChildren: () => import('./shared/components/pages/work/work.module').then(work => work.WorkModule) },
  /*{ path: 'cursos', loadChildren: () => import('./shared/components/pages/learning/learning.module').then(learning => learning.LearningModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(home => home.HomeModule) },
  { path: 'perfil', loadChildren: () => import('./pages/profile/profile.module').then(profile => profile.ProfileModule) },
  { path: 'proyectosPersonales', loadChildren: () => import('./pages/projects/projects.module').then(projects => projects.ProjectsModule) },
  { path: 'trabajos', loadChildren: () => import('./pages/work/work.module').then(work => work.WorkModule) },
  { path: 'cursos', loadChildren: () => import('./pages/learning/learning.module').then(learning => learning.LearningModule) },*/
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '' }];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(
  routes/*,
  {
    preloadingStrategy: PreloadAllModules
  }*/
);