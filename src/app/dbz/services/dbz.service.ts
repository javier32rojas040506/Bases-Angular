import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
        providedIn: 'root'
    })
export class DbzService {
    public charactersList: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 7000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        }
    ];

    createCharacter(newCharacter: Character): void{
        const newCharacterToPush: Character = { id: uuid(), ...newCharacter};
        this.charactersList.push(newCharacterToPush);
    }

    deleteCharacter(id: string){
      this.charactersList = this.charactersList.filter( character => character.id != id);
    }

}
