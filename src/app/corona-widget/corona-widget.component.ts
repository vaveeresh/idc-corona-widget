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

  constructor(private coronaApiService: CoronaApiService) { }

  ngOnInit() {
    
    this.coronaApiService.getCountriesData().subscribe(data => {
      this.countryData = data;
      console.log("this.countryDataVVV", this.countryData);

      const worldData = this.countryData.filter(function (entry) { return entry.country === "World"; });
      console.log("results", worldData);

      this.worldDataConfirmed = worldData[0].confirmed;
      this.worldDataRecovered = worldData[0].recovered;
      this.worldDataDeaths = worldData[0].deaths;

   });
   

       
    
  }

}
