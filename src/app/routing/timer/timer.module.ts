import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from 'src/app/timer-pages/timer/timer.component';
import { ButtonComponent } from 'src/app/home-pages/button/button.component';
import { HomeModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'timer',
    component: TimerComponent,
  },
];

@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HomeModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class TimerModule {}
