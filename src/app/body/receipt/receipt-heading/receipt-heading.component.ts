import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-heading',
  templateUrl: './receipt-heading.component.html',
  styleUrls: ['./receipt-heading.component.css']
})
export class ReceiptHeadingComponent implements OnInit {
  currentTime: string;
  currentHour: number;
  currentMinute: string;
  amOrPm: string = 'AM';
  dateObj: Date;

  constructor() { }

  ngOnInit(): void {
    this.dateObj = new Date();

    this.currentTime = this.getNonMilitaryTime(this.dateObj.getHours(), this.dateObj.getMinutes());
  }

  getNonMilitaryTime(hours, minutes) {
    if (hours > 12) {
      this.currentHour = hours - 12;
      this.amOrPm = 'PM';
    } else {
      this.currentHour = hours;
    }

    if (minutes < 10) {
      this.currentMinute = '0' + minutes;
    } else {
      this.currentMinute = minutes;
    }

    return this.currentHour + ':' + this.currentMinute + ' ' + this.amOrPm;
  }
}
