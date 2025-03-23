import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { CocktailComponent } from '../cocktail/cocktail.component';

@Component({
  selector: 'app-cocktail-list',
  imports: [CocktailComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails: any[] = []
  
  route = inject(ActivatedRoute)
  router = inject(Router)
  dataService = inject(DataService)

  ngOnInit(): void {
      this.route.paramMap.subscribe(
          (params) => this.dataService.getCocktailsFirstLetter(params.get('letter') ?? '').subscribe(
              data => this.cocktails = data
          )
      )
  }
}
