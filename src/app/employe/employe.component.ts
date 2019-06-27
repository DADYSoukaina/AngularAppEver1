import { Component, OnInit } from '@angular/core';
import { Employe } from './employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employe : Employe [];

  constructor() { }

  ngOnInit() {

    this.employe = [];
    this.employe.push(new Employe(1,"Souka",false));
    this.employe.push(new Employe(2,"Chaimae",true));
    this.employe.push(new Employe(3,"Hind",true));
    this.employe.push(new Employe(4,"Sarah",false));

    console.log("Size: " + this.employe.length);


  }

}
