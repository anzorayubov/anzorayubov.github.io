import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DateService {
  public data: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())
  changeMounth(dir:number){

    const value = this.data.value.add(dir, 'month')
    this.data.next(value)
  }
}
