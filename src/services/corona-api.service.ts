import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {
  public url= 'https://corona-stats.online?format=json'

  constructor(
    private http: HttpClient
  ) { }


  // getCountriesData() {
  //   return this.http.get(this.url);
  // }

  getAllWorldData() {
    let allWorldUrl = 'https://corona.lmao.ninja/all';
    return this.http.get(allWorldUrl);
  }

  getAllCountriesData() {
    let allCountUrl = 'https://corona.lmao.ninja/countries';
    return this.http.get(allCountUrl);
  }








}
