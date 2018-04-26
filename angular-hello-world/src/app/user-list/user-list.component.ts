import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // un array composé de strings
  // nom: string;

  constructor() {
    this.names = ['Anissa', 'Gilles', 'Geoffrey', 'Guillaume'];
    // this.nom = "toto";
  }

  ngOnInit() {
  }

}
