import { Component, OnInit, Output } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { EventEmitter } from 'node:stream';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CommonModule,
    CountryTableComponent,
    LoadingSpinnerComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
    
  public countries:Country[]=[]
  public isLoading:boolean=false
  constructor (
    private countryService:CountryService
  ){}
  ngOnInit(): void {
    this.countries=this.countryService.cacheStore.byCapital.countries;
  }
  
  searchByCapital(term:string):void{
      this.isLoading=true
      this.countryService.searchCapital(term)
      .subscribe(
          countries=>{
            this.countries=countries
            this.isLoading=false
          }
      )
    }
}
