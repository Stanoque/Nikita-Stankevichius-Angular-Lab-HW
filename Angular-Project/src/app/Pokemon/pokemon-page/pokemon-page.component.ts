import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../POKEMONS';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  capitalizeFirst(string: string): string {

    let workString = string.split('');

    workString[0] = workString[0].toUpperCase();

    return workString.join('');
  
  }

  constructor() { }

  pokemons = [...POKEMONS];


  onCapture(pokemon: Pokemon){
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    currentPokemon.captured = !currentPokemon.captured;
    console.log('Pokemon ' + this.capitalizeFirst(currentPokemon.name) + ' was' + (currentPokemon.captured ? ' captured' : ' released') + '.');
  }

  ngOnInit(): void {
  }

}
