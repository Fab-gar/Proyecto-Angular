import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent ],
  template: ` 
  <section>
    <form>
    <input class="input" type="search"  placeholder="filter by city" #filter/>
   <button  class="button" type="button" (click)="filterResult(filter.value)">Submit</button>
  </form>
</section>
<section class="result" >
  @if(!housingLocationList.length){
    <span>Loading...</span>
  }
  @for(house of filteredLocationList; track house.id ){

    <app-housing-location [housingLocation]='house' />
     
  }
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
housingLocationList: IHousingLocation [] = [];
filteredLocationList:IHousingLocation [] = [];
constructor() {
this.housingService.
getAllHusingLocation()
.then((housingLocationList: IHousingLocation[]) => {
  this.housingLocationList = housingLocationList;
  this.filteredLocationList = housingLocationList;
});

}filterResult(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
  }
  this.filteredLocationList = this.housingLocationList.filter((house)=> 
  house?.city.toLowerCase().includes(text.toLowerCase()))
}
}
