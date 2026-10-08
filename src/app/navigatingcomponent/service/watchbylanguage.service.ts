import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchbylanguage } from '../models/watchbylanguage';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
  private baseurl="";


  constructor(private http:HttpClient) { }
  onsubmit():Observable<Watchbylanguage[]>{
    return this.http.get<Watchbylanguage[]>(this.baseurl);
  }
}
