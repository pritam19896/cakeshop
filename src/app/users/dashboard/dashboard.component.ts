import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

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
