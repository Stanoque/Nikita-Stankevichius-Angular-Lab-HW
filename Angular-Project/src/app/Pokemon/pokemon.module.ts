import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon-body/pokemon-body.component';


@NgModule({
  declarations: [PokemonPageComponent, PokemonHeaderComponent, PokemonBodyComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonPageComponent],
})
export class PokemonModule { }
