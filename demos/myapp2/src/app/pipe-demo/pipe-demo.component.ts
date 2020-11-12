import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  companyName:string = "tools & solutions"

  dateEstablished: Date = new Date("12/06/1987");

  constructor() { }

  ngOnInit(): void {
  }

}
