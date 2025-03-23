import { Component, inject, OnInit } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [CocktailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  dataService = inject(DataService)

  lastCocktail: string = '(aucun)'
  cocktails = <any>[]

  constructor() { }

  ngOnInit(): void {
    this.dataService.getCocktails().subscribe(
      data => this.cocktails = data
    )
  }

  onEvent = (event: any) => {
      this.lastCocktail = event
  }
}
