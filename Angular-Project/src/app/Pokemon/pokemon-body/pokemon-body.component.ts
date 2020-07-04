import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../POKEMONS';
import { Pokemon } from '../pokemon';
import { ToggleViewService } from '../toggle-view.service';

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.css']
})
export class PokemonBodyComponent implements OnInit {

  pokemons = [...POKEMONS];
  

  onCapture(pokemon: Pokemon): void {
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    currentPokemon.captured = !currentPokemon.captured;
  }

  onDamage(pokemon: Pokemon): void {
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    currentPokemon.damage += 10;
  }

  getPath(pokemon: Pokemon): string {
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    return '../../../assets/pokemons/' + currentPokemon.id + '.png';
  }

  constructor(public toggleService: ToggleViewService) { }

  ngOnInit(): void {

  }

}
