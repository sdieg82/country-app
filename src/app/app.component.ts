import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { SideBarComponent } from "./shared/pages/side-bar/side-bar.component";
import { CountriesRoutingModule } from './countries/countries-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomePageComponent, 
    AboutPageComponent, 
    SideBarComponent,
    CountriesRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'country-app';
}
