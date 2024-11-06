import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input()
  public countries:Country[]=[]
  
  

}
