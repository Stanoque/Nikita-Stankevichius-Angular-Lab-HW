import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONSService } from '../pokemons.service';
import { ToggleViewService } from '../toggle-view.service';

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

  constructor(
    public toggleService: ToggleViewService,
    public pokemonsService: POKEMONSService
    ) { }

  pokemons = this.pokemonsService.getAll();
  detailedCardRendered: boolean;

  onActivate(childComponent) {
    childComponent.pokemons = this.pokemons;

    if(childComponent.onCapture) {
      childComponent.onCapture.subscribe((pokemon) => {
        this.onCapture(pokemon);
      })
    }

    if(childComponent.onDamage) {
        childComponent.onDamage.subscribe((pokemon) => {
        this.onDamage(pokemon);
      })
    }

  
    this.detailedCardRendered = childComponent['type'] !== 'list';

  }

  onCapture(pokemon: Pokemon){
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    currentPokemon.captured = !currentPokemon.captured;
    console.log('Pokemon ' + this.capitalizeFirst(currentPokemon.name) + ' was' + (currentPokemon.captured ? ' captured' : ' released') + '.');
  }

  onDamage(pokemon: Pokemon){
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    currentPokemon.damage += 10;
  }

  onSearch(value: string) {
    this.pokemonsService.filter(value);
  }

  ngOnInit(): void {
    
  }

}
