import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService:WeatherServiceService){

  }

  cityName:string='Delhi';
  weatherData?:WeatherData;  //undefined in the beginning

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';  //clear the box
  }

  onSubmit(){
      this.getWeatherData(this.cityName);
      this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
    });
  }

}
