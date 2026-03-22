import { Component, inject, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail/cocktail';
import { Data } from '../data';
import { LetterBar } from '../letter-bar/letter-bar';
import { Search } from '../search/search';

@Component({
  selector: 'app-home',
  imports: [Cocktail, LetterBar, Search],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  dataService = inject(Data)

  lastCocktail: string = '(aucun)'
  cocktails = <any>[]

  constructor() { }

  ngOnInit(): void {
    this.dataService.getCocktails().subscribe(
      data => this.cocktails = data
    )
  }

  onEvent = (cockailName: any) => {
      this.lastCocktail = cockailName
  }

  onFilter = (patern: any) => {
    this.dataService.getCocktailsContains(patern).subscribe(
      data => this.cocktails = data
    )
  }
}
