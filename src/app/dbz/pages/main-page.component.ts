import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService: DbzService ){}

    get charactersList(): Character[]{
      return [...this.dbzService.charactersList]
    }

    deleteCharacter(idToDelete : string) : void {
      this.dbzService.deleteCharacter(idToDelete)
    }

    createCharacter(charaterToCreate : Character) : void{
      this.dbzService.createCharacter(charaterToCreate);
    }
}
