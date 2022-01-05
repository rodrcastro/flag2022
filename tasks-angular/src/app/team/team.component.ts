import { Component, OnInit } from '@angular/core';
import { Member } from 'src/interfaces/members';
import { MEMBERS } from 'src/mocks/members-mock';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members = MEMBERS;
  rate = 0;

  constructor() { }

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

  onInputBlur(member: Member): void {
    this.rate = member.rate;
    localStorage.setItem('members', JSON.stringify(this.members));
  }

}
