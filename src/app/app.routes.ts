import { /*PreloadAllModules, */RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { WorkModule } from './pages/work/work.module';
import { LearningModule } from './pages/learning/learning.module';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { WorkComponent } from './pages/work/work/work.component';
import { LearningComponent } from './pages/learning/learning/learning.component';

const routes: Routes = [
  /*{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(home => home.HomeModule) },
  { path: 'perfil', loadChildren: () => import('./pages/profile/profile.module').then(profile => profile.ProfileModule) },
  { path: 'proyectosPersonales', loadChildren: () => import('./pages/projects/projects.module').then(projects => projects.ProjectsModule) },
  { path: 'trabajos', loadChildren: () => import('./pages/work/work.module').then(work => work.WorkModule) },
  { path: 'cursos', loadChildren: () => import('./pages/learning/learning.module').then(learning => learning.LearningModule) },*/
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent},
  { path: 'proyectosPersonales', component: ProjectsComponent },
  { path: 'trabajos', component: WorkComponent},
  { path: 'cursos', component: LearningComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '' }];


export const AppRouting = RouterModule.forRoot(
  routes/*,
  {
    preloadingStrategy: PreloadAllModules
  }*/
);