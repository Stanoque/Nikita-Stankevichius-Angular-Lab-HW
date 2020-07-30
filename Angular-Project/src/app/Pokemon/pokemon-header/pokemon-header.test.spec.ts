import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHeaderComponent } from './pokemon-header.component';
import { ToggleViewService } from '../toggle-view.service';
import { POKEMONSService } from '../pokemons.service';
import { Pokemon } from '../pokemon';

describe('PokemonHeaderComponent', () => {
  let component: PokemonHeaderComponent;
  let fixture: ComponentFixture<PokemonHeaderComponent>;
  let toggleService: ToggleViewService;
  let pokemon: Pokemon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonHeaderComponent ]
    })
    .compileComponents();

    toggleService = new ToggleViewService;
    component = new PokemonHeaderComponent(toggleService);

  }));

  describe('PokemonHeaderComponent (minimal)', () => {
    it('should create', () => {
      TestBed.configureTestingModule({
        declarations: [ PokemonHeaderComponent ]
      });
      const fixture = TestBed.createComponent(PokemonHeaderComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });
  });

  it('Should toggle pokemons view on click', () => {
    spyOn(toggleService, 'toggleView');
    component.toggleView();
    expect(toggleService.toggleView).toHaveBeenCalled();
  });

  it('Should emit search on click', () => {
    spyOn(component.onSearch, 'emit');
    component.search('');
    expect(component.onSearch.emit).toHaveBeenCalledWith('');
  });

});
