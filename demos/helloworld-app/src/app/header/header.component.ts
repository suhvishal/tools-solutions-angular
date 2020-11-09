import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//fields / data members 
  public companyName: string = 'Tools & Solutions'
  public imageUrl: string = '/assets/logo1.jpg'

  constructor() {

    setTimeout(() => {
        //this.companyName = ' T & S'
        this.imageUrl = '/assets/logo2.jpeg';
    }, 7000);

   }

  ngOnInit(): void {
  }

  handleClick(){
    console.log('You clicked the button')
  }

}
