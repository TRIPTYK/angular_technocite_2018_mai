import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _click: number = 0;
  _dblClick: number = 0;

  constructor(){

    let clickStream = Rx.Observable.fromEvent(document, 'click');
    clickStream.subscribe( () => { this._click++; });

    //let dblclickStream = Rx.Observable.fromEvent(document, 'dblclick');
    //dblclickStream.subscribe( () => { this._dblClick++; this._click -= 2; });

    // Autre solution pour dblclick
    clickStream
      .buffer(clickStream.debounceTime(250))
      .map(list => list.length)
      .filter(x => x === 2)
      .subscribe( () => {
        this._dblClick++;
        this._click -= 2;
      });

  }
}
