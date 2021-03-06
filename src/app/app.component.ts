import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'zenklubchallenge';
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
