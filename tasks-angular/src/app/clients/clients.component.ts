import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Clients works!';
  clients = [
    {
      id: 1,
      name: 'Others',
      isActive: true
    },
    {
      id: 2,
      name: 'Farfetch',
      isActive: true
    },
    {
      id: 3,
      name: 'Worten',
      isActive: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
