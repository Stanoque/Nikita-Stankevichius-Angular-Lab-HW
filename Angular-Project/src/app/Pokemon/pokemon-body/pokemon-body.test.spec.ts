import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBodyComponent } from './pokemon-body.component';
import { ToggleViewService } from '../toggle-view.service';
import { POKEMONSService } from '../pokemons.service';
import { Pokemon } from '../pokemon';
 
describe('PokemonBodyComponent', () => {
  let component: PokemonBodyComponent;
  let toggleService: ToggleViewService;
  let pokemonService: POKEMONSService;
  let fixture: ComponentFixture<PokemonBodyComponent>;
  let pokemon: Pokemon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonBodyComponent ]
    })
    .compileComponents();

    toggleService = new ToggleViewService;
    pokemonService = new POKEMONSService;
    component = new PokemonBodyComponent(toggleService, pokemonService);
    pokemon = {
      id: 0,
      name: 'Pokemon',
      damage: 0,
      captured: false,
      description: 'None',
      date: new Date()
    }
  }));

  describe('PokemonBodyComponent (minimal)', () => {
    it('should create', () => {
      TestBed.configureTestingModule({
        declarations: [ PokemonBodyComponent ]
      });
      const fixture = TestBed.createComponent(PokemonBodyComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });
  });

  it('Should emit capture on click', () => {
    spyOn(component.onCapture, 'emit');
    component.capture(pokemon);
    expect(component.onCapture.emit).toHaveBeenCalledWith(pokemon);
  });

  it('Should emit damage on click', () => {
    spyOn(component.onDamage, 'emit');
    component.damage(pokemon);
    expect(component.onDamage.emit).toHaveBeenCalledWith(pokemon);
  });


});
