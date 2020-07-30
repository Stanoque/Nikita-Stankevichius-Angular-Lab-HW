import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './POKEMONS';

@Injectable({
  providedIn: 'root'
})

export class POKEMONSService {

  pokemons = [[...POKEMONS], [...POKEMONS]];

  filter(query: string): void {

    this.pokemons[1] = this.pokemons[0].filter(pokemon=>{
      if(pokemon.name.match(query)){
        return pokemon;
      }
    })

  }

  getAll(): Pokemon[] {
    return this.pokemons[1];
  }

  getById(id: number): Pokemon {
    return this.pokemons[0][id-1];
  }

  constructor() { }
}
