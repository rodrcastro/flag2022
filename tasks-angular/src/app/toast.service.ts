import { Injectable } from '@angular/core';
import { Toast } from 'src/interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  index = 0;

  toasts: Toast[] = [];

  constructor() { }

  add(message: string, type: string = '') {
    this.toasts.push({id: this.index, message, type});
    this.index++;
  }
}
