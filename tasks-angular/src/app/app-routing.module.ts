import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
