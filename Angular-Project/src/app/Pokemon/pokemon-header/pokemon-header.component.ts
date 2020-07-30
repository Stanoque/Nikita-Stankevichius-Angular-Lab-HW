import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToggleViewService } from '../toggle-view.service';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css']
})

export class PokemonHeaderComponent implements OnInit {

  @Output() onSearch = new EventEmitter<String>();

  toggleView(): void {
    this.toggleService.toggleView();
  }

  search(value: string): void {
    this.onSearch.emit(value);
  }

  constructor(private toggleService: ToggleViewService) { }

  ngOnInit(): void {
  }

}
