import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleViewService {

  cardsView = true;

  toggleView(): void {
    this.cardsView = !this.cardsView;
  }

  getView(): boolean {
    return this.cardsView;
  }

  constructor() { }
}
