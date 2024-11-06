import { Component, Output } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { EventEmitter } from 'node:stream';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CommonModule,
    CountryTableComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
    
  public countries:Country[]=[]

  constructor (
    private countryService:CountryService
  ){}
  
  searchByCapital(term:string):void{
      this.countryService.searchCapital(term)
      .subscribe(
          countries=>{
            this.countries=countries
          }
      )
    }
}
