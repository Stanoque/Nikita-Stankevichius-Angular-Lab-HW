import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon-body/pokemon-body.component';
import { PokemonDetailedCardComponent } from './pokemon-detailed-card/pokemon-detailed-card.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';


@NgModule({
  declarations: [PokemonPageComponent, PokemonHeaderComponent, PokemonBodyComponent, PokemonDetailedCardComponent, PokemonEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [PokemonPageComponent, PokemonDetailedCardComponent, PokemonEditComponent],
})
export class PokemonModule { }
