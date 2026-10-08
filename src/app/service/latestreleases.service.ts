import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestreleases } from '../models/latestreleases';

@Injectable({
  providedIn: 'root'
})
export class LatestreleasesService {

private baseurl1="http://localhost:8081/api/v1/latestreleasesdata";
 constructor(private http:HttpClient){}
 onsubmit():Observable<Latestreleases[]>{
  return this.http.get<Latestreleases[]>(this.baseurl1);
 }

}