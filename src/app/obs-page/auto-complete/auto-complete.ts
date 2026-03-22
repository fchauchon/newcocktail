import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';
import { Cocktail } from '../../cocktail.interface';
import { Data } from '../../data';

@Component({
  selector: 'app-auto-complete',
  imports: [ReactiveFormsModule],
  templateUrl: './auto-complete.html',
  styleUrls: ['./auto-complete.css']
})
export class AutoComplete implements OnInit {

    suggestions: Cocktail[] = []

    formGroup: FormGroup
    searchControl: FormControl<string>

    constructor(private dataService: Data) {
        this.searchControl = new FormControl('', { nonNullable: true })
        this.formGroup = new FormGroup({
            search: this.searchControl
        })
    }

    ngOnInit(): void {
      this.searchControl.valueChanges.pipe(
          filter( chaine => chaine.length >= 2),
          debounceTime(1000),
          switchMap( chaine => this.dataService.getCocktailsBeginWith(chaine))
      ).subscribe(
          (cocktails: Cocktail[]) => this.suggestions = cocktails
    )
    }

}
