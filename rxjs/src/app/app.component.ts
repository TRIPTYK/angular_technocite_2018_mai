import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {
  constructor(){
const array: Array<string> = ['data1', 'data2'];

const observable: Rx.Observable<string> = Rx.Observable.from(array);

const subscription: Rx.Subscription = observable.subscribe(
  function(x) {
    console.log('Next: ' + x);
  },
  function(err) {
    console.log('Erreur: ' + err);
  },
  function() {
    console.log('Finished !');
  }
);

  }
}
