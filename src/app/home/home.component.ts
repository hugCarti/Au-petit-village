import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe, FormsModule, SortByPricePipe, FilterByNamePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  list = [
    {
      id: 1,
      photo: 'assets/pop-asterix.jpg',
      name: "Figurine Pop d'Astérix",
      description: 'figurine pop représentant Astérix, le héros du village Gaulois',
      price: 209.99,
    },
    {
      id: 2,
      photo: 'assets/pop-obelix.webp',
      name: "Figurine Pop d'Obélix",
      description: "figurine pop représentant Obélix, l'homme au ménir, la force du village Gaulois",
      price: 164.99,
    },
    {
      id: 3,
      photo: 'assets/pop-idefix.webp',
      name: "Figurine Pop d'Idefix",
      description: 'figurine représentant Idéfix, le fidèle chien d\'Obelix',
      price: 159.99,
    },
    {
      id: 4,
      photo: 'assets/pop-asterix-obelix.webp',
      name: "Figurine Pop d'Astérix et Obélix",
      description: 'figurine pop représentant Astérix et Obélix, les deux héros du village Gaulois',
      price: 479.99,
    },
  ]

  sortOrder:string = 'asc';
  filterOrder:string = '';

}

