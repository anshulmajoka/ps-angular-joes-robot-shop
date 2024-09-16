import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
    // this event will be received by the parent component, in this case catalog-component
    // "buy" should match with the parent attribute
  }
}
