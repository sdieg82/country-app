import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from "../contact-page/contact-page.component";
import { AboutPageComponent } from "../about-page/about-page.component";
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactPageComponent,
    AboutPageComponent,
    HomePageComponent
],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
