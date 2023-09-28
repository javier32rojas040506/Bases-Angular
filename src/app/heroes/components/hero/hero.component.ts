import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Super Man';
  public age: number = 38;

  get getName(): string { return `${this.name} - ${this.age}`; }

  capitalizeName(): string { return this.name.toUpperCase(); }

  changeHeroName(): void {
    this.name = 'Spider Man';
  }
  changeHeroAge(): void {
    this.age = 19;
  }
  resetForm(): void {
    this.name = 'Super Man';
    this.age  = 38;
  }

}
