import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'forecast/:zipCode',
    component: ForecastComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
