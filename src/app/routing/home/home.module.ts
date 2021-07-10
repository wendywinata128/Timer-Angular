import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home-pages/home/home.component';
import { ButtonComponent } from 'src/app/home-pages/button/button.component';
import { TestService } from 'src/app/test.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HomeComponent, ButtonComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [TestService],
  exports: [RouterModule, ButtonComponent],
})
export class HomeModule {}
