import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { ToastComponent } from './toast/toast.component';
import { ClientComponent } from './client/client.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SidebarComponent,
    ContactComponent,
    TeamComponent,
    ToastComponent,
    ClientComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
