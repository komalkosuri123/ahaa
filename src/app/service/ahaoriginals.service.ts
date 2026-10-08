import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {
  private baseurl="assets/ahaoriginals.json";
   constructor(private http:HttpClient){}
   onsubmit():Observable<AhaoriginalsService[]>{
    return this.http.get<AhaoriginalsService[]>(this.baseurl);
   }
  

}
