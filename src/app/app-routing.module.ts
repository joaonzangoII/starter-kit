import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'list-example',
    loadChildren: () => import('./list-example/list-example.module').then((m) => m.ListExampleModule),
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'crud/tutorials/:tutorialId/show',
    component: DetailsComponent,
  },
  {
    path: 'crud/tutorials/create',
    component: CreateComponent,
  },
  {
    path: 'crud/tutorials/:tutorialId/edit',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
