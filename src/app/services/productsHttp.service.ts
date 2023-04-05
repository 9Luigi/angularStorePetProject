import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product.abstract';
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HttpProductsService {
    constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(tap((products: IProduct[]) => this.products = products));
    }
    createProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(tap((product: IProduct) => { this.products.push(product) }));
    }
    products: IProduct[] = [];
}