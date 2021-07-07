import { TestBed } from '@angular/core/testing';

import { POKEMONSService } from './pokemons.service';

describe('POKEMONSService', () => {
  let service: POKEMONSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POKEMONSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
