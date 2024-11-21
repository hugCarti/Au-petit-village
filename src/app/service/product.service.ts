import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
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
  ];

  constructor() {}

  // Retourne la liste complète des produits
  getProducts() {
    return this.products;
  }

  // Retourne un produit par son id
  getProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    console.log('Finding product by ID:', id, 'Result:', product); // Log pour vérifier
    return product;
  }
}