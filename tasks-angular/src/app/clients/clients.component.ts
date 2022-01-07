import { Component, OnInit } from '@angular/core';
import { Client } from 'src/interfaces/clients';
import { CLIENTS } from 'src/mocks/clients-mock';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Clients';
  clients = CLIENTS;
  //clientEditing: Client | null = null;
  newClientName = '';
  query = '';
  currentStatus = 'active';

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('clients');
    if(data) {
      this.clients = JSON.parse(data);
    }
  }

  onAdd(): void {
    
    const newClient: Client = {
      id: new Date().getTime(),
      name: this.newClientName,
      isActive: true
    }

    this.clients.push(newClient);

    this.toastService.add(`Cliente ${this.newClientName} criado com sucesso`, 'success');

    this.updateStorage();
    this.newClientName='';
    
  }

  onUpdate(info: Client): void {
    const index = this.clients.findIndex(item => item.id === info.id);
    this.clients.splice(index, 1, info);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem("clients", JSON.stringify(this.clients));
  }

}
