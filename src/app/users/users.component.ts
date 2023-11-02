import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  cakeDetails = [
    {
      path:'../../../assets/mainimg/velvat.jpeg',
      picHeader: 'Red Velvet Cakes',
      price: 300,
      count: 0
    },
    {
      path:'../../../assets/mainimg/chocochip.jpeg',
      picHeader: 'Chocochip Cake Cakes',
      price: 320,
      count: 0
    },
    {
      path:'../../../assets/mainimg/creamecake.jpeg',
      picHeader: 'Cream Cake',
      price: 350,
      count: 0
    }, 
    {
      path:'../../../assets/mainimg/fruitcake.jpeg',
      picHeader: 'Fruit Cakes',
      price: 250,
      count: 0
    },
    {
      path:'../../../assets/mainimg/strawberrycake.jpeg',
      picHeader: 'Strawberry Cake',
      price: 200,
      count: 0
    }
    ];
    userName:string | any= null;
    email:string | any= null;
    mobile:string | any= null;

    ngOnInit() {
      this.userName = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
      this.mobile = localStorage.getItem('mobile');
    }

    add(index: any){
      console.log(index);
      if(this.cakeDetails[index].count < 10){
      this.cakeDetails[index].count++;
      }else{
        alert('max 10 cake can be ordered')
      }
    }

    remove(index: any){
      console.log(index);
      if(this.cakeDetails[index].count > 0){
        this.cakeDetails[index].count--;
      }else{
        alert('reached min limit');
      }
    }
}
