import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaWidgetComponent } from './corona-widget/corona-widget.component';

const routes: Routes = [
  { path: '', redirectTo: '/coronawidget', pathMatch: 'full' },
  { path: 'coronawidget', component: CoronaWidgetComponent },
  { path: '**', component: CoronaWidgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
