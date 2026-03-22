import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../cocktail/cocktail';
import { Data } from '../data';

@Component({
  selector: 'app-cocktail-list',
  imports: [Cocktail],
  templateUrl: './cocktail-list.html',
  styleUrl: './cocktail-list.css'
})
export class CocktailList {
  cocktails: any[] = []
  
  route = inject(ActivatedRoute)
  router = inject(Router)
  dataService = inject(Data)

  ngOnInit(): void {
      this.route.paramMap.subscribe(
          (params) => this.dataService.getCocktailsFirstLetter(params.get('letter') ?? '').subscribe(
              data => this.cocktails = data
          )
      )
  }
}
