import { TestBed } from '@angular/core/testing';

import { POKEMONSService } from './pokemons.service';
import { Pokemon } from './pokemon';

describe('POKEMONSService', () => {
  let service: POKEMONSService;

  beforeEach(() => {
    service = new POKEMONSService;
  });

  it('Service should return array of pokemons', () => {
    expect(service.getAll().length).toEqual(12);
  });

  it('Service should return a pokemon by id', () => {
    expect(service.getById(1)).toBeDefined();
  });

  it('Service should return a filtered array after filter', () => {
    spyOn(service, 'filter').and.callThrough();

    service.filter('saur');
    expect(service.getAll().length).toEqual(3);

    service.filter('');
    expect(service.getAll().length).toEqual(12);

    service.filter('123');
    expect(service.getAll().length).toEqual(0);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
