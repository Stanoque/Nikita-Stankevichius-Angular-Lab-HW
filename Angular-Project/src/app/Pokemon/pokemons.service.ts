import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './POKEMONS';

@Injectable({
  providedIn: 'root'
})

export class POKEMONSService {

  pokemons = [...POKEMONS];

  filter(query: string): Pokemon[] {

    const pokemonsToReturn = this.pokemons.filter(pokemon=>{
      if(pokemon.name.match(query)){
        return pokemon;
      }
    })

    return pokemonsToReturn;
  }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon {
    return this.pokemons[id-1];
  }

  constructor() { }
}
