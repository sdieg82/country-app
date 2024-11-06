import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/Country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private countryService:CountryService,
    private router:Router
  ){}

  public country?:Country

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countryService.searchById(id))
    )
    .subscribe(country=>{
        if(!country) return  this.router.navigateByUrl('');
     
        return this.country=country
       
      }
    )
  }
}
