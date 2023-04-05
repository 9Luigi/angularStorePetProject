import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { HttpProductsService } from 'src/app/services/productsHttp.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  newProduct: Product = new Product();

  submit() {
    console.log(this.newProduct)
    this.newProduct.price = 13.5;
    this.newProduct.description = 'lorem ipsum set';
    this.newProduct.image = 'https://i.pravatar.cc';
    this.newProduct.category = 'electronic';
    this.modalService.close();
    this.productService.createProduct(this.newProduct).subscribe(() => {
    });
  }

  constructor(private productService: HttpProductsService, private modalService: ModalService) { }
}
