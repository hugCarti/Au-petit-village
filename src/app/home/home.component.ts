import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe, FilterByNamePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list = [
    {
        photo : "assets/air-jordan-fence-green.jpg",
        name: "Air-Jordan Frence Green",
        description: "l'avenir de la marque",
        price: 209.99
    },
    {
        photo : "assets/air-max-95.jpg",
        name: "Air-Max 95",
        description: "Chaussure de streetwear emblématique. Modèle plus embicieux. Mélange de matières. Le classique de la air-max par excelence.",
        price: 164.99
    },
    {
      photo : "assets/air-max-sndr-blue-ice-and-obsidian.jpg",
      name: "Air-Max SNDR",
      description: "Blue Ice and Obsidian. Cette édition s'inspire des raves du début des années 2000.",
      price: 159.99
    },
    {
        photo : "assets/sndr-obscura.jpg",
        name: "SNDR Obscura",
        description: "l'avenir de la marque",
        price: 479.99
    },
  ]

  search() {
    const searchQuery = this.searchQuery.trim();
    if (searchQuery) {
      this.searchService.search(searchQuery).subscribe(results => {
        this.results = results;
      });
    }
  }
}

