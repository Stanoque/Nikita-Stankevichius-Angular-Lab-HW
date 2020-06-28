import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonHeaderComponent } from './pokemon/pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon/pokemon-body/pokemon-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
