import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatDate(date) {
    const formattedDate = new Date(date);
    console.log(formattedDate);
    console.log(date);
    return formattedDate.toISOString().substring(0, 10);
    //return this.datepipe.transform(formattedDate, 'dd-mm-yyyy');
  }

  randomNumber() {
    var timestamp = new Date().valueOf();
    return timestamp;
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  calculateDueDate(days) {

    const currentDate = new Date();
    return moment().add(days, 'days').toISOString().substring(0, 10);

  }


}
