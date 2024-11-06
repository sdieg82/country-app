import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input()
  public countries:Country[]=[]
  
  

}
