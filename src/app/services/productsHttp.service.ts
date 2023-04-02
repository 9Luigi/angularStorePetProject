import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HttpProductsService {
    constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
    }
}