import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { HttpProductsService } from './services/productsHttp.service'
import { Observable, catchError, delay, filter, first, take, tap, throwError } from 'rxjs';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpProductsService) { }

  title = 'angularStorePetProject';
  loading: boolean = false;
  products$: Observable<IProduct[]>

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.httpService.getProducts().pipe(delay(2000), catchError(this.errorHandler));
    this.loading = false;
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => {
      error.message;
    })
  }

}
