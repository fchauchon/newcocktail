import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../cocktail/cocktail';
import { Data } from '../data';

@Component({
  selector: 'app-with-or-without',
  imports: [Cocktail],
  templateUrl: './with-or-without.html',
  styleUrl: './with-or-without.css'
})
export class WithOrWithout {
  router = inject(Router)
  dataService = inject(Data)
  cocktails: Array<any> = []

  ngOnInit(): void {
    if (this.router.url === '/with') {
        this.dataService.getCocktailsWith().subscribe(
            data => this.cocktails = data
        )
    } else {
        this.dataService.getCocktailsWithout().subscribe(
            data => this.cocktails = data
        )
    }
}
}
