import { Component, Input, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent,CommonModule],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  constructor(
    private serviceRegion:CountryService
  ){}
  
  
  @Input()
  public countries:Country[]=[] 
  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania']
  public selectedRegion?:Region;
  public initialValue:string=''

  searchRegion(term:Region):void {
    this.selectedRegion=term
    
    this.serviceRegion.searchRegion(term)
    .subscribe(
      region=>{this.countries=region}
      
    )
    
  }

  ngOnInit(): void {
    this.countries=this.serviceRegion.cacheStore.byRegion.countries
    this.selectedRegion=this.serviceRegion.cacheStore.byRegion.region
   
  }
}
