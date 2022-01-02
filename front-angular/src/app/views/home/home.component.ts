import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() msg: string | undefined
  legenda: string = "Estou no Angular"

  constructor() { }
  
  ngOnInit(): void {
  }

  resetLegenda(): void {
    this.legenda = 'Estou no Angular (Alterado)'
  }
}
