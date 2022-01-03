import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailField = '';
  emailPattern = /\S+@\S+\.\S+/;
  isEmailValid = this.emailPattern.test(this.emailField);
  
  

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(): void {
    console.log(this.emailField);
    console.log(this.isEmailValid);
    
  }

}
