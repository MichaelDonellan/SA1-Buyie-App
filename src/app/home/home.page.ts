import { Component, OnInit } from '@angular/core';
import {ServicesPage} from '../services/services.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 LocatData : any[];
  constructor(private locdata:ServicesPage) {}

ngOnInit(){
   this.locdata.GetLocData().subscribe(
   (data)=>{
this.LocatData = data.city;
console.log(this.LocatData);


    }
 );
}


}
