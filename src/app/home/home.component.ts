import { Component, inject, OnInit } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { DataService } from '../data.service';
import { LetterBarComponent } from '../letter-bar/letter-bar.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  imports: [CocktailComponent, LetterBarComponent, SearchComponent],
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

  onEvent = (cockailName: any) => {
      this.lastCocktail = cockailName
  }

  onFilter = (patern: any) => {
    this.dataService.getCocktailsContains(patern).subscribe(
      data => this.cocktails = data
    )
  }
}
