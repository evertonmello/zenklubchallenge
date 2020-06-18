import { Component, OnInit,
  ViewChild,
  ElementRef } from '@angular/core';

import { AppService } from './../app.service'

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @ViewChild('timesCtn',{static: false}) timesCtn: ElementRef;
  @ViewChild('hdrTimeCtn',{static: false}) hdrTimeCtn: ElementRef;

  showMore = false;
  dates = [];
  scheduleIndex = 0;
  constructor(private appService:AppService) {}

  ngOnInit(){
    this.getTimes();
  }


  getTimes(){
    this.appService.getTimes().subscribe((times:Array<any>)=>{
      this.dates = times;
    },(error)=>{
      alert('Ops, ocorreu um erro' + error.message)
    })
  }

  next(){
    this.scheduleIndex++
    this.timesCtn.nativeElement.style.transform = "translate(-" + this.scheduleIndex * 240 +"px)"
    this.hdrTimeCtn.nativeElement.style.transform = "translate(-" + this.scheduleIndex * 240 +"px)"
  }

  prev(){
    this.scheduleIndex--
    this.timesCtn.nativeElement.style.transform = "translate(-" + this.scheduleIndex * 240 +"px)"
    this.hdrTimeCtn.nativeElement.style.transform = "translate(-" + this.scheduleIndex * 240 +"px)"
  }
  dsblPrev(){
    if(this.scheduleIndex == 0){
      return true;
    }
  }
  dsblNext(){
    if(this.scheduleIndex == Math.floor(this.dates.length/4)){
      return true;
    }
  }

  changeTimes(){
    this.showMore = !this.showMore;
  }
  

  dayOfWeek(strDate){
    let date = new Date(strDate);
    return date.toString().slice(0,3)
  }

  getMonthAndDate(strDate){
    let date = new Date(strDate)
    let dayStr = date.toString().slice(8,10)
    let monthStr = date.toString().slice(4,7)
    return monthStr + " " + dayStr;
  }
}
