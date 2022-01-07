import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/interfaces/clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() info!: Client;
  @Input() search!: string;
  @Output() updateClientEvent = new EventEmitter<Client>();

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onBlur(): void {
    this.isEditing = false;
  }

  onChange(): void {
    this.updateClientEvent.emit(this.info);
  }

  onDelete(): void {
    this.info.isActive = false;

    this.updateClientEvent.emit(this.info);
  }

  onRestore(): void {
    this.info.isActive = true;
    this.updateClientEvent.emit(this.info);
  }
}
