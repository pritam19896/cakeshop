      import { Component, HostListener } from '@angular/core';

      @Component({
      selector: 'app-dashboard',
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.scss']
      })
      export class DashboardComponent {

        public innerWidth: any;
ngOnInit() {
    this.innerWidth = window.innerWidth;
}

@HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
  if(window.innerWidth <= 770){
    this.innerWidth = true;
  }
}

      images = [
      {
        path:'../../../assets/mainimg/custom.jpeg',
        picHeader: 'Custom Cakes'
      },
      {
        path:'../../../assets/mainimg/farewell.jpeg',
        picHeader: 'Farewell Cakes'
      },
      {
        path:'../../../assets/mainimg/pastries.jpeg',
        picHeader: 'Mouth Watering Pastries'
      }, 
      {
        path:'../../../assets/mainimg/birthday.jpeg',
        picHeader: 'Birthday Cakes'
      },
      ];

      }
