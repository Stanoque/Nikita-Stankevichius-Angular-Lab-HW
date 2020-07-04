import { Component, OnInit } from '@angular/core';
import { ToggleViewService } from '../toggle-view.service';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css']
})

export class PokemonHeaderComponent implements OnInit {

  toggleView(): void {
    this.toggleService.toggleView();
  }


  constructor(private toggleService: ToggleViewService) { }

  ngOnInit(): void {
  }

}
