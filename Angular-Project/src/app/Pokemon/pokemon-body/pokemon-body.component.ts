import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { POKEMONS } from '../POKEMONS';
import { Pokemon } from '../pokemon';
import { ToggleViewService } from '../toggle-view.service';


@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.css']
})



export class PokemonBodyComponent implements OnInit { 
  
  @Input() pokemons:Pokemon[];
  @Output() onCapture = new EventEmitter<Pokemon>();
  @Output() onDamage = new EventEmitter<Pokemon>();
  

  capture(pokemon: Pokemon): void {
    this.onCapture.emit(pokemon);
  }

  damage(pokemon: Pokemon): void {
    this.onDamage.emit(pokemon);
  }

  constructor(public toggleService: ToggleViewService) { }

    ngOnInit(): void {

  }

}
