import { TestBed } from '@angular/core/testing';

import { ToggleViewService } from './toggle-view.service';

describe('ToggleViewService', () => {
  let service: ToggleViewService;

  beforeEach(() => {
    service = new ToggleViewService;
  });

  it('Should have cards view by default' , () => {
    expect(service.cardsView).toBeTruthy();
  });

  it('hideHeader should set headerShown to false', () => {
    spyOn(service, 'hideHeader').and.callThrough();
    service.hideHeader();

    expect(service.headerShown).toBeFalsy();
  });

  it('showHeader should set headerShown to true', () => {
    spyOn(service, 'showHeader').and.callThrough();
    service.showHeader();

    expect(service.headerShown).toBeTruthy();
  });

  it('getView should return cardsView', () => {
    expect(service.getView()).toEqual(service.cardsView);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
