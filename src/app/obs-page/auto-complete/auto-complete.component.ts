import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';
import { DataService } from '../../data.service';
import { Cocktail } from '../../cocktail.interface';

@Component({
  selector: 'app-auto-complete',
  imports: [ReactiveFormsModule],
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

    suggestions: Cocktail[] = []

    formGroup: UntypedFormGroup
    searchControl: FormControl<string>

    constructor(private dataService: DataService) {
        this.searchControl = new FormControl('', { nonNullable: true })
        this.formGroup = new UntypedFormGroup({
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
