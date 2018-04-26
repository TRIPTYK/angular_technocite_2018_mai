import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row"; //ajouter une class css sur toutes les instances de ce composant
  // title: string;
  // link: string;
  // votes: number;
  // article: Article;
  @Input() article: Article;

  constructor() {
    // this.title = "Angular";
    // this.link = "http://angular.io";
    // this.votes = 10;
    // this.article = new Article('Angular', 'http://angular.io', 10);
  }

  upVote(): boolean {
    this.article.upVote();
    return false;
  }

  downVote(): boolean {
    this.article.downVote();
    return false;
  }


  ngOnInit() {
  }

}
