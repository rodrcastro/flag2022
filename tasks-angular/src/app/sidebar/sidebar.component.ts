import { Component, OnInit } from '@angular/core';
import { SIDEBAR1, SIDEBARANALYZE, SIDEBARMANAGE } from 'src/mocks/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar1 = SIDEBAR1;
  sidebarAnalyze = SIDEBARANALYZE;
  sidebarManage = SIDEBARMANAGE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
