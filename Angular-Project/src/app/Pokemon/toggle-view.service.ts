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

  hideHeader(): void {
    this.headerShown = false;
  }

  showHeader(): void {
    this.headerShown = true;
  }

  getView(): boolean {
    return this.cardsView;
  }

  constructor() { }
}
