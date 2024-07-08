import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  template:`
  <main>
  <header class= 'brand-mame'>
    <img
    src='http://localhost:64048/favicon.ico'
    alt='logo'
    routerLink='/'
    />
    </header>
        <section class="content" >
      <router-outlet></router-outlet>
          </section> 
    </main>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {}
