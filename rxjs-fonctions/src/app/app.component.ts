import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  `,
  styles: []
})
export class AppComponent {
  constructor(){
    // From : traitement d'un array
/*     const array: Array<string> = ['data1', 'data2'];
    const observable: Rx.Observable<string> = Rx.Observable.from(array);
 */
    //Of
    //const observable: Rx.Observable<number> = Rx.Observable.of(500);

    // Range
    //const observable: Rx.Observable<number> = Rx.Observable.range(0, 100);

    // interval (prend un param en millisecondes)
    //const observable: Rx.Observable<number> = Rx.Observable.interval(2000);

    //repeat
    //const observable: Rx.Observable<number> = Rx.Observable.range(1, 3).repeat(4);

    //timer
    //const observable: Rx.Observable<number> = Rx.Observable.timer(2000, 500);

    //buffer
/*     const observable: Rx.Observable<any> = Rx.Observable.timer(0,500)
                                                        .buffer(Rx.Observable.timer(0, 5000));
 */

    //map
    //const observable: Rx.Observable<string> = Rx.Observable.range(0, 100).map( (val) => '|' + val + '|');

    //Scan
/*     const observable: Rx.Observable<number> = Rx.Observable.range(1,5)
                                                            .scan(
                                                              (val) => {
                                                                val++;
                                                                return val*val;
                                                              }
                                                            );
 */

 // Distinct
    //const observable: Rx.Observable<string> = Rx.Observable.interval(500).map( (val) => 'unchanged').distinct();

/*      const array: Array<string> = ['data1', 'data2', 'data1', 'data2', 'data4'];
    const observable: Rx.Observable<string> = Rx.Observable.from(array).filter( (val) => val === 'data1');
 */
    //filter
/*     const observable: Rx.Observable<number> = Rx.Observable.range(0, 100)
                                                            .filter( (val) => val % 7 === 0);
 */

 //take
 //const observable: Rx.Observable<number> = //Rx.Observable.range(0, 100).take(5);

 //Rx.Observable.fromEvent(document, 'keyup');


 // Exercice : Application qui va compter le nombre de clicks et double clicks et afficher ces comptes

    const subscription: Rx.Subscription = observable.subscribe(
      val => {console.log(`Next: ${val}`)},
      err => {console.log(`error: ${err}`)},
      () => { console.log('Completed')}
    );

  }

}
