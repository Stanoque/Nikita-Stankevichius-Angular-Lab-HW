import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../pokemon';
import { ToggleViewService } from '../toggle-view.service';

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
  type: string = 'card';

  capture(pokemon: Pokemon): void {
    this.onCapture.emit(pokemon);
  }

  damage(pokemon: Pokemon): void {
    this.onDamage.emit(pokemon);
  }

  constructor(
    private route: ActivatedRoute,
    public toggleService: ToggleViewService,
  ) {}
  

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.id = params['id'];
  });
  this.pokemon = this.pokemons[this.id-1];
  this.toggleService.hideHeader();
}

}
