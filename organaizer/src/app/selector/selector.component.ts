import { Component } from '@angular/core';
import {DateService} from '../shared/date.service';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor( private dataSeService: DateService) { }

  go(dir: number){
    this.dataSeService.changeMounth(dir)
  }

}
