import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon-body/pokemon-body.component';
import { HighDamageDirective } from './high-damage.directive';


@NgModule({
  declarations: [PokemonPageComponent, PokemonHeaderComponent, PokemonBodyComponent, HighDamageDirective],
  imports: [
    CommonModule
  ],
  exports: [PokemonPageComponent],
})
export class PokemonModule { }
