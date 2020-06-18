import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { ReviewComponent } from './prof-info/review/review.component';
import { AppService } from './app.service';
import { ProfInfoComponent } from './prof-info/prof-info.component';
import { ScheduleComponent } from './schedule/schedule.component'

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProfInfoComponent,
    ScheduleComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
