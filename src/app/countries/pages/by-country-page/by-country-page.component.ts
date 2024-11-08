import { Component, Input, OnInit } from '@angular/core';
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
export class ByCountryPageComponent implements OnInit{

  @Input()
  public countries:Country[]=[]
  public initialValue:string=''
  constructor(
   private  countryService:CountryService
  ){}
  ngOnInit(): void {
    this.countries=this.countryService.cacheStore.byCountries.countries
    this.initialValue=this.countryService.cacheStore.byCountries.term
  }

  searchCountry(term:string):void{
    this.countryService.searchCountry(term)
    .subscribe(
      capital =>{
          this.countries=capital
      }
    )
  }
  
}
