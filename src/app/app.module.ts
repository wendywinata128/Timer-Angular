import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-pages/home/home.component';
import { HomeModule } from './routing/home/home.module';
import { ButtonComponent } from './home-pages/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerModule } from './routing/timer/timer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, HomeModule, TimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
