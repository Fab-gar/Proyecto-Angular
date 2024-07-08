import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup,
        ReactiveFormsModule, Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { IHousingLocation } from '../housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  @if(!housingLocation){
    <p>Loading...</p>
  }@else {

    <article>
    <section >
      <h2 >{{housingLocation.name}}</h2>    
    <p >
  {{ housingLocation.city }} {{ housingLocation.state }}
    </p>
</section>
<section >
<h2 class="title">About this location</h2>
<ul>
  <li> Units Available: 
    {{ housingLocation.availableUnits }}</li>
  <li> Does this location have wifi:
    {{ housingLocation.wifi ? 'Yes' : 'No'}}</li>
  <li> Does this location have laundry:
    {{ housingLocation.
  laundry  ?'Yes' : 'No'}}</li>

</ul>
</section>
<section class="form">
  <h2 class="title">Apply now to live here!</h2>

  <Form [formGroup]="applyform" (submit)="handleSubmit()">

  <label class="sub-title" for="first-name">First Name</label>
<input type="text" id="fist-name" formControlName="firstName">
  <span class="alert" [hidden]= "firstName.valid || firstName.untouched">First name required</span>

  <label class="sub-title" for="last-name">Last Name</label>
<input type="text" id="last-name" formControlName="lastName">
  <span class="alert" [hidden]= "lastName.valid || lastName.untouched">Last name required</span>

  <label class="sub-title"  for="email">Email</label>
<input type="text" id="email" formControlName="email">
  <span class="alert" [hidden]= "email.valid || email.untouched">
    @if(email.errors?.['required']){Email is required} @else{Must be a valid email}
  </span>
  <button class="boton" type="submit" [disabled]="applyform.invalid">Enviar</button>

</Form>
</section>
    </article>
  }
  

  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
housingLocation: IHousingLocation | undefined;
applyform = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]),
});
constructor(){
const housingLocationId = Number(this.route.snapshot.params['id']);
this.housingService
.getHousingLocationById(housingLocationId)
.then((housingLocation) => {
this.housingLocation = housingLocation;
});
  }
  get firstName() {
    return this.applyform.get('firstName')as FormControl;
  }
  get lastName() {
    return this.applyform.get('lastName')as FormControl;
  }
  get email() {
    return this.applyform.get('email')as FormControl;
  }
 
  handleSubmit() {
    if (this.applyform.invalid) return;
    this.housingService.submitApplication(
      this.applyform.value.firstName ??'',
      this.applyform.value.lastName ??'',
      this.applyform.value.email ??''
    )
  }
}
