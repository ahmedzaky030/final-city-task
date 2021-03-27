import { Component, Input, OnInit } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() selectedCity: City;
  
  constructor() { }

  ngOnInit(): void {
    // this.selectedCity = {
    //   CityName: "Shanghai",
    //   CityImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PudongSkyline-pjt_%28cropped%29.jpg/125px-PudongSkyline-pjt_%28cropped%29.jpg",
    //   Nation: "China",
    //   NationFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    //   Population: 24183300,
    //   Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    // }
  }

  nuke(){
    console.log('nuke');
  }

  grow(){
    console.log('grow');
  }


}
