import { Component, Input } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  constructor(
    private serviceRegion:CountryService
  ){}
  
  @Input()
  public countries:Country[]=[] 

  searchRegion(term:string):void {
    this.serviceRegion.searchRegion(term)
    .subscribe(
      region=>{this.countries=region}
    )

  }





}
