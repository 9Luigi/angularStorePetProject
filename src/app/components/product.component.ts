import { Input, Component } from "@angular/core";
import { IProduct } from "../models/product.abstract";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: IProduct;
    description: boolean = false;
    descriptionString: string = "Show";
    toggleDescription() {
        this.description = !this.description;
        this.description ? this.descriptionString = 'Hide' : this.descriptionString = 'Show';
    }
}