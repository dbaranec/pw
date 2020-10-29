import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {AppComponent} from './app.component';
import {NasaComponent} from './components/nasa/nasa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AppComponent',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'nasa',
    component: NasaComponent,
    outlet: 'outlet-main'
  },
  {
    path: 'about',
    component: AboutComponent,
    outlet: 'outlet-main'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
