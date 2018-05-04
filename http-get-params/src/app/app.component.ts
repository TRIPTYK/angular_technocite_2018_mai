import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" [(ngModel)]="_search" placeholder="city"/>
  <button (click)="doSearchConcatenatedUrl()">Search 1</button>
  <button (click)="doSearchHttpParams1()">Search 2</button>
  <button (click)="doSearchHttpParams2()">Search 3</button>

  <p>JSON {{_result | json }}</p>
  `,
  styles: []
})

export class AppComponent {
  _search = 'Atlanta';
  _result = {};

  _key = "OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH";

  constructor(private _http: HttpClient){}

  doSearchConcatenatedUrl() {
    const concatenatedUrl: string = 'https://trailapi-trailapi.p.mashape.com?q[city_cont]=' + encodeURIComponent(this._search);

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Mashape-Key': this._key
    });

    this._http.get(concatenatedUrl, {headers: httpHeaders}).subscribe(
      res => { this._result = res; }
    );
  }

  doSearchHttpParams1(){
    const url = 'https://trailapi-trailapi.p.mashape.com';

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Mashape-Key': this._key
    });
    const params: HttpParams = new HttpParams({
      fromString: 'q[city_cont]=' + this._search
    });

    this._http.get(url, {headers: httpHeaders, params: params}).subscribe(
      res => {this._result = res;}
    );
  });

  doSearchHttpParams2() {
    const url = 'https://trailapi-trailapi.p.mashape.com';

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Mashape-Key': this._key
    });
    const params: HttpParams = new HttpParams().set('q[city_cont]', this._search);

    this._http.get(url, { headers: httpHeaders, params: params }).subscribe(
      res => { this._result = res}
    );
  });


}

