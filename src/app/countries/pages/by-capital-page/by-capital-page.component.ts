import { Component, Output } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
    @Output()
    searchByCapital(term:string):void{
      console.log('Desde ByCapitalPage')
      console.log({term})
    }
}
