import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '4-8-2022';

  constructor(private articlesService: ArticlesService){

  }
  ngOnInit(): void {
   this.articlesService.getPaginated(1, 2);
  }
  items = [
    {title: 'Home', icon: 'home', link: '/home'},
    {title:'Help', icon: 'info-outline', link: '/shop'},
  ]
}
