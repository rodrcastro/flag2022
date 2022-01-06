import { Component, OnInit } from '@angular/core';
import { Toast } from 'src/interfaces/toast';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }

  close(toast: Toast): void {
    const index = this.toastService.toasts.findIndex((item) => item.id === toast.id);
    this.toastService.toasts.splice(index, 1);
  } 


}
