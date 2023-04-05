import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isVisible$.next(true);
    console.log(this.isVisible$)
  }
  close() {
    this.isVisible$.next(false);
    console.log(this.isVisible$)
  }
  constructor() {
  }
}
