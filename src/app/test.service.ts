import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  testService(){
    console.log("test");
    const URL = "https://akb-restaurant-be.borndevs.xyz/api/reservasi/all";
    this.http.get<any>(URL).subscribe(test => {
      // console.log(typeof test);
    },(test)=>{
      console.log(test.error);
    })
  }


}
