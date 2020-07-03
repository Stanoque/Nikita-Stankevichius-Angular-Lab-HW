import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon-body/pokemon-body.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';



@NgModule({
  declarations: [PokemonHeaderComponent, PokemonBodyComponent, PokemonItemComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
