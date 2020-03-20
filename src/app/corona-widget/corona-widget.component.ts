import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoronaApiService } from '../../services/corona-api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-corona-widget',
  templateUrl: './corona-widget.component.html',
  styleUrls: ['./corona-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoronaWidgetComponent implements OnInit {

  public countryData: any;
  public worldDataConfirmed: any;
  public worldDataRecovered: any;
  public worldDataDeaths: any;

  public worldAllCountData: any;
  public allCountryData: any;


  constructor(private coronaApiService: CoronaApiService) { }

  ngOnInit() {
    
  //   this.coronaApiService.getCountriesData().subscribe(data => {
  //     this.countryData = data;
  //     console.log("this.countryDataVVV", this.countryData);
  //    // const worldData = this.countryData.filter(function (entry) { return entry.country === "World"; });
  //    // console.log("results", worldData);
  //  });

  // Get All World Count Data
   this.coronaApiService.getAllWorldData().subscribe(data => {
    this.worldAllCountData = data;
      console.log("this.worldAllCountData", this.worldAllCountData);
      this.worldDataConfirmed =  this.worldAllCountData.cases;
      this.worldDataRecovered =  this.worldAllCountData.recovered;
      this.worldDataDeaths =  this.worldAllCountData.deaths;
  });

  // Get All Country Count Data
    this.coronaApiService.getAllCountriesData().subscribe(data => {
      this.allCountryData = data;
      console.log(" this.allCountryData", this.allCountryData);
    });
   
    
  }




}
