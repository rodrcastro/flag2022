import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/interfaces/clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() info!: Client;
  @Input() search!: string;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.isEditing = true;
    
  }

  onBlur(): void {
    this.isEditing = false;

    //this.updateStorage();
  }

  onDelete(): void {
    this.info.isActive = false;

    //this.toastService.add(`Cliente ${client.name} arquivado`, 'warning');
    
    //this.updateStorage();
  }
  onRestore(): void {
    this.info.isActive = true;

    //this.toastService.add(`Cliente ${client.name} restaurado`, 'success');

    //this.updateStorage();
  }
}
