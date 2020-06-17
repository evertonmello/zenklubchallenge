import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service'

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  showMore = false;
  dates;
  constructor(private appService:AppService) {}

  ngOnInit(){
    this.getTimes();
  }


  getTimes(){
    this.appService.getTimes().subscribe((times)=>{
      this.dates = times
    },(error)=>{
      alert('Ops, ocorreu um erro' + error.message)
    })
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
