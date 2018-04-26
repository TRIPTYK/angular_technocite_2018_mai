import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('vueJS', 'http://vuejs.io', 15),
      new Article('Angular', 'http://angular.io'),
      new Article('Ember', 'http://ember.com')
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Le titre est ${title.value} et le lien est ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    return false;
  }

  sortedArticles(): Article[] {
    // return this.articles.sort(function(a: Article, b: Article) {
    //   return (b.votes - a.votes);
    // });

    return this.articles.sort((a: Article, b:Article)=>(b.votes - a.votes));
  }
}
