import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IHousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
  <section class="listing" [routerLink]="['/details/',
     housingLocation.id]">
    <img [src]="housingLocation.photo" 
    style="height: 200px; width:200px" 
    alt="Exterior photo of {{ housingLocation.name }}" />
    <h2>{{housingLocation.name}}</h2>
<p>{{ housingLocation.city }} {{ housingLocation.state }}</p>
</section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
@Input() housingLocation!: IHousingLocation; 
}
