import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
 
  
  private debouncer: Subject<string>=new Subject<string>()
  private debouncerSubscription?:Subscription
  
  @Input()
  public placeholder:string=''
  
  @Output()
  public onValue= new EventEmitter<string>()
  
  @Output()
  public onDebounce= new EventEmitter<string>()
  
  
  ngOnInit(): void {
    this.debouncerSubscription= this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(
      value=>{this.onDebounce.emit(value)}
    )
  }

  ngOnDestroy(): void {
   this.debouncer.unsubscribe()
  }


  emitValue(value:string):void{
    this.onValue.emit(value)
  }

  onKeyPress(term:string):void{
    this.debouncer.next(term)
  }
}
