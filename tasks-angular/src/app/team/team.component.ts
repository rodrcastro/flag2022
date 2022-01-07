import { Component, OnInit } from '@angular/core';
import { Member } from 'src/interfaces/members';
import { MEMBERS } from 'src/mocks/members-mock';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members = MEMBERS;
  newMemberName = '';
  newMemberEmail = '';
  newMemberRole = '';
  rate = 0;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('members');
    if(data) {
      this.members = JSON.parse(data);
    } else {
      this.getMembersFromAPI();
    }
  }

  getMembersFromAPI(): void {
    const roles = ['Project Manager', 'Frontend Developer', 'Backend Developer', 'UI Designer', 'UX Designer', 'Tech Lead', 'QA'];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            for (let item of data) {
                const random = Math.floor(Math.random() * roles.length);
                item.role = roles[random];
                item.rate = 0;
            }
            this.members = data;
            // Adicionar ao Local storage e stringify da data
            localStorage.setItem('members', JSON.stringify(data));
        });
  }

  onInputChange(member: Member): void {
    this.onUpdate();

    setTimeout(() => this.toastService.add(`Rate de ${member.name} atualizado para ${member.rate}€`, 'success'), 500); 
  }

  onAdd(): void {
    this.members.push({id: new Date().getTime(), name: this.newMemberName, email: this.newMemberEmail, rate: 0, role: this.newMemberRole})

    this.toastService.add(`Usuário ${this.newMemberName} criado com sucesso`, 'success');

    this.onUpdate();

    this.newMemberName = '';
    this.newMemberEmail = '';
    this.newMemberRole = '';
  }

  onUpdate(): void {
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  slugify(str: string): string {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

// TODO: Criar pipe desse método slugify

}
