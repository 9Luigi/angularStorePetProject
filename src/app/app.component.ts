import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { HttpProductsService } from './services/productsHttp.service'
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpProductsService, private errorService: ErrorService) { }
  condition: string = '';
  title = 'My store';
  loading: boolean = false;
  products$: Observable<IProduct[]>
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.httpService.getProducts().pipe(
      delay(1),
      retry(2),
      catchError(this.errorHandler.bind(this)),
      tap(() => { this.loading = false })
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => {
      error.message;
    })
  }
}
