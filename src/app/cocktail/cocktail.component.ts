import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  imports: [],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent implements OnInit {
  @Input() cocktail: any
  @Output() eventOut = new EventEmitter<string>()
  isHidden: boolean = false;

  ingredients: Array<string> = new Array<string>()
  
  constructor() { }

  ngOnInit(): void { } 

  onClick() {
      this.eventOut.emit(this.cocktail.name)
  }

  ngOnDestroy(): void { }
}
