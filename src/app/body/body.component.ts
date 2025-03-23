import { Component, inject, Inject, OnInit } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { IntroComponent } from '../intro/intro.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  imports: [IntroComponent, CocktailComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  dataService = inject(DataService)

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
