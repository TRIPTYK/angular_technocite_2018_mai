import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _searchText: string;
  _searchSubject: Rx.Subject<string>;
  _logs: Array<string> = [];

  constructor(){
    this._searchSubject = new Rx.Subject<string>();

    this._searchSubject.debounceTime(1000)
                        .distinctUntilChanged()
                        .subscribe(
                          searchText => this._logs.push(searchText)
                        );
  }

  public onChange(searchText: string){
    this._searchSubject.next(searchText);
  }

}
