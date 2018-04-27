import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {map } from 'rxjs/operators/map';
import {scan } from 'rxjs/operators/scan'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter$: Observable<number> = new Subject<number>()
  
  .map((value: number): string => `Sum of click :${value}`)
  title = 'app';
/*   handleButtonClick(value:number){
    console.log(value)
  } */
  constructor() {
    this.counter$.subscribe(console.log.bind(console))
  }

}
