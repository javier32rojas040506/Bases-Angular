import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public charactersList: Character[] = [{
    name: "Vegueta",
    power: 5000
  }];
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(idToDelete?: string){
    if (!idToDelete) return;
    this.onDelete.emit(idToDelete);
  };

}
