import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Super Man", "Spider Man", "Ant Man", "Iron Man", "Batman", "Flash Man"];
  public lastHeroDeleted?: string;
  
  deleteLastHero(): void {
    this.lastHeroDeleted = this.heroNames.pop();
  }
}
