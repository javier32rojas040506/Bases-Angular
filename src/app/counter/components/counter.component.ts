import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <hr>
    <div>
        <h2>{{title}}</h2>
        <p>{{amount}}</p>
        <button (click)="increaseBy(1)">+</button>
        <button (click)="increaseBy(-1)">-</button>
        <button (click)="reset()">Reset</button>
    </div>`

})

export class CounterComponent {
  public title: string = 'Counter';
  public amount: number = 0;
  public resetValue: number = 10;

  increaseBy(amountToIncrease: number): void {
    this.amount += amountToIncrease;
  }
  reset(): void {
    this.amount = this.resetValue;
  }
}