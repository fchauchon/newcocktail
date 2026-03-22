import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  imports: [],
  templateUrl: './cocktail.html',
  styleUrl: './cocktail.css'
})
export class Cocktail implements OnInit {
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
