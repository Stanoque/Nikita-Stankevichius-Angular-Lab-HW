import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detailed-card',
  templateUrl: './pokemon-detailed-card.component.html',
  styleUrls: ['./pokemon-detailed-card.component.css']
})
export class PokemonDetailedCardComponent implements OnInit {

  @Input() pokemons:Pokemon[];
  @Output() onCapture = new EventEmitter<Pokemon>();
  @Output() onDamage = new EventEmitter<Pokemon>();
  
  id: number;
  pokemon: Pokemon;

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
    private route: ActivatedRoute,
  ) {}
  

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.id = params['id'];
  });
  this.pokemon = this.pokemons[this.id-1];
}

}
