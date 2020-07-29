import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonClass } from '../pokemon.formClass';
import { Pokemon } from '../pokemon';
import { ToggleViewService } from '../toggle-view.service'; 
import { Observable } from 'rxjs';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})

export class PokemonEditComponent{

  @Input() pokemons:Pokemon[];

  id: number;
  pokemon: Pokemon;
  submitted: boolean = false;
  modalSaveShown: boolean = false;
  modalCancelShown: boolean = false;
  model = new PokemonClass(-1, 'Pokemon', 0, false, new Date());
  type: string = 'card';


  constructor(
    private route: ActivatedRoute,
    public toggleService: ToggleViewService,
    public dialogService: DialogService,
  ) {};

  getPath(pokemon: Pokemon): string {
    const currentPokemon = this.pokemons[this.pokemons.indexOf(pokemon)];
    return '../../../assets/pokemons/' + currentPokemon.id + '.png';
  }

  
  canDeactivate(): Observable<boolean> | boolean {

    if(!this.submitted){
      return this.dialogService.confirm('Are you sure?');
    } 
    return true;
   
  }	

  toggleSaveModal() {
    this.modalSaveShown = !this.modalSaveShown;
  }

  toggleCancelModal() {
    this.modalCancelShown = !this.modalCancelShown;
  }

  onSubmit() { 
    this.submitted = true;
    this.pokemon.name = this.model.name;
    this.pokemon.date = this.model.date;
    this.pokemon.damage = this.model.damage;
   }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.pokemon = this.pokemons[this.id-1];
    this.model.name = this.pokemon.name;
    this.model.id = this.pokemon.id;
    this.model.date = this.pokemon.date;
    this.model.captured = this.pokemon.captured;
    this.toggleService.hideHeader();
  }
}
