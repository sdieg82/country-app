import { Component, Input } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent,CommonModule],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  constructor(
    private serviceRegion:CountryService
  ){}
  
  @Input()
  public countries:Country[]=[] 
  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania']
  public selectedRegion?:Region;

  searchRegion(term:Region):void {
    this.selectedRegion=term
    
    this.serviceRegion.searchRegion(term)
    .subscribe(
      region=>{this.countries=region}
      
    )
    
  }
}
