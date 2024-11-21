import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CurrencyPipe, RouterModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID depuis l'URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID from URL:', productId); // Ajoutez ce log pour vérifier l'ID
  
    if (productId) {
      this.product = this.productService.getProductById(productId);
      console.log('Retrieved product:', this.product); // Log pour vérifier le produit
    }
  }
}