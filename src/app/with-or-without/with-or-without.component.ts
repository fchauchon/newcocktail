import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-or-without',
  imports: [],
  templateUrl: './with-or-without.component.html',
  styleUrl: './with-or-without.component.css'
})
export class WithOrWithoutComponent {
  router = inject(Router)
  dataService = inject(DataService)
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
