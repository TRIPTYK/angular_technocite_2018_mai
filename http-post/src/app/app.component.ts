import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();

  constructor(private _http: HttpClient) {}

  onAdd() {
    const requestBody = {
      title: this._title || 'None',
      body: this._body || 'None'
    };

    this._http.post('http://jsonplaceholder.typicode.com/posts', requestBody).subscribe( res => { this._added.push(res); } );
  }
}
