import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  @Input()
  public countries:Country[]=[]
  constructor(
   private  countryService:CountryService
  ){}

  searchCountry(term:string):void{
    this.countryService.searchCountry(term)
    .subscribe(
      capital =>{
          this.countries=capital
      }
    )
  }
  
}
