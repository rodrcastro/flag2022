import { Component, OnInit } from '@angular/core';
import { Client } from 'src/interfaces/clients';
import { CLIENTS } from 'src/mocks/clients-mock';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Clients';
  clients = CLIENTS;
  clientEditing: Client | null = null;

  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem('clients');
    if(data) {
      this.clients = JSON.parse(data);
    }
  }
  
  onEdit(client: Client): void {
    this.clientEditing = client;
    
  }

  onBlur(): void {
    this.clientEditing = null;

    this.updateStorage();
  }

  onDelete(client: Client): void {
    client.isActive = false;
    
    this.updateStorage();
  }
  onRestore(client: Client): void {
    client.isActive = true;
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem("clients", JSON.stringify(this.clients));
  }

}
