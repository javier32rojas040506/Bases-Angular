import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {
    console.log("CHILDREN: ", this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
