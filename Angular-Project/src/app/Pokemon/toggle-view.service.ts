import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleViewService {

  cardsView = true;
  headerShown = true;

  toggleView(): void {
    this.cardsView = !this.cardsView;
  }

  toggleHeader(): void {
    this.headerShown = !this.headerShown;
  }

  getView(): boolean {
    return this.cardsView;
  }

  constructor() { }
}
