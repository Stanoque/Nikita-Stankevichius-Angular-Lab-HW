import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailedCardComponent } from '../pokemon/pokemon-detailed-card/pokemon-detailed-card.component';
import { PokemonBodyComponent } from '../pokemon/pokemon-body/pokemon-body.component';

const routes: Routes = [
  { path: '', component: PokemonBodyComponent },
  { path: 'details', component: PokemonDetailedCardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }