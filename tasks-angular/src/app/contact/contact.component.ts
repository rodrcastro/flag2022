import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  emailField = '';
  subjectField = '';
  messageField = '';
  
  constructor(private toastService: ToastService) { }

  ngOnInit(): void {

  }
  onSubmit(contactForm: NgForm): void {
    fetch('https://run.mocky.io/v3/316b41ae-ca10-42bb-8da2-3f7e66fb8bb8')
      .then(response => response.json())
      .then(data => {
        if (data.result === 'OK') {
          this.toastService.add('Email enviado com sucesso', 'success');
          contactForm.reset();
        }
      })
    
  }
}
