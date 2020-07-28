import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ToggleViewService } from '../toggle-view.service';
import { POKEMONSService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.css']
})



export class PokemonBodyComponent implements OnInit { 
  
  @Output() onCapture = new EventEmitter<Pokemon>();
  @Output() onDamage = new EventEmitter<Pokemon>();
  
  pokemons = this.pokemonsService.getAll();
  type: string = 'list';

  capture(pokemon: Pokemon): void {
    this.onCapture.emit(pokemon);
  }

  damage(pokemon: Pokemon): void {
    this.onDamage.emit(pokemon);
  }

  getPath(pokemon: Pokemon): string {
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    return '../../../assets/pokemons/' + currentPokemon.id + '.png';
  }

  constructor(
    public toggleService: ToggleViewService,
    public pokemonsService: POKEMONSService
    
    ) { }

    ngOnInit(): void {

  }

}
