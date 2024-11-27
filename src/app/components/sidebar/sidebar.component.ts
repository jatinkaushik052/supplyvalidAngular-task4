import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  togglePosition: boolean=false;
  issidebarVisiable: boolean= true;
  iconOn: string='d-none'
  iconOff: string='d-block'

  sidebarOn(){
    this.togglePosition=false
    this.issidebarVisiable= true;
    this.iconOff ='d-block';
    this.iconOn='d-none';
  }
  sidebarOff(){
    this.togglePosition=true
    this.issidebarVisiable= false;
    this.iconOff ='d-none';
    this.iconOn='d-block';
  }
  

}
