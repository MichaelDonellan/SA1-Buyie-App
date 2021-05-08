import {Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  
 
providedIn: 'root'

})

export class ServicesPage implements OnInit {

  constructor(private httpClient:HttpClient) { }


GetLocData():Observable<any>{

  return this.httpClient.get('http://ip-api.com/json/{query}?fields=status,message,city,query')
}


  ngOnInit() {
  }

}
