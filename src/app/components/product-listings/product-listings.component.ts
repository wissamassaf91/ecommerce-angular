import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/commons/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-listings.component.css']
})
export class ProductListingsComponent implements OnInit {

  products:Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productService.getProductList().subscribe(
      data=>{this.products = data;}
    );
  }

}
