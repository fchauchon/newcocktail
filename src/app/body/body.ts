import { Component, inject, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail/cocktail';
import { Data } from '../data';
import { Intro } from '../intro/intro';

@Component({
  selector: 'app-body',
  imports: [Intro, Cocktail],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body implements OnInit{

  dataService = inject(Data)

  lastCocktail: string = '(aucun)'
  cocktailsWith = <any>[]
  cocktailsWithout = <any>[]

  constructor() { }

  ngOnInit(): void {
    this.dataService.getCocktailsWith().subscribe(
      data => this.cocktailsWith = data
    )
    this.dataService.getCocktailsWithout().subscribe(
      data => this.cocktailsWithout = data
    )
  }

  onEvent = (event: any) => {
      this.lastCocktail = event
  }
}
