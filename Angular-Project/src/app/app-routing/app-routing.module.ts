import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailedCardComponent } from '../pokemon/pokemon-detailed-card/pokemon-detailed-card.component';
import { PokemonPageComponent } from '../pokemon/pokemon-page/pokemon-page.component';

const routes: Routes = [
  { path: '', component: PokemonPageComponent },
  { path: 'details', component: PokemonDetailedCardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }