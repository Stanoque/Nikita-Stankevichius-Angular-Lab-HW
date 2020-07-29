import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailedCardComponent } from '../pokemon/pokemon-detailed-card/pokemon-detailed-card.component';
import { PokemonBodyComponent } from '../pokemon/pokemon-body/pokemon-body.component';
import { PokemonEditComponent } from '../pokemon/pokemon-edit/pokemon-edit.component';
import { CanDeactivateGuard } from '../cancel-confirmation.service';

const routes: Routes = [
  { path: '', component: PokemonBodyComponent },
  { path: 'details', component: PokemonDetailedCardComponent },
  { path: 'edit', 
    component: PokemonEditComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [ 
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }