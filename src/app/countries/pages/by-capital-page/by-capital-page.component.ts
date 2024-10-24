import { Component, Output } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
    searchByCapital(term:string):void{
      console.log('Desde By Capital')
      console.log({term})
    }
}
