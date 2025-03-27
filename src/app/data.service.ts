import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Cocktail } from './cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly cocktails: Array<any> = []

  constructor() {
    this.cocktails.push( { id: 1, name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: '/mojito.jpg', alcohol: true } )
    this.cocktails.push( { id: 2, name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: '/margarita.jpg', alcohol: true } )
    this.cocktails.push( { id: 3, name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: '/sex-on-the-beach.jpg', alcohol: true } )
    this.cocktails.push( { id: 4, name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: '/cuba-libre.jpg', alcohol: true } )
    this.cocktails.push( { id: 5, name: 'Apello', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: '/apello.jpg', alcohol: false } )
    this.cocktails.push( { id: 6, name: 'Halloween Punch', description: 'Pour en mettre plein les yeux le soir le plus effrayant de l\'année, préparez un punch d\'Halloween facile… couleur rouge sang et rempli de globes oculaires !', img: '/halloween-punch.jpg', alcohol: false } )
  }

  getCocktails(): Observable<any[]> {
      return of(this.cocktails)
  }

  getCocktailsWith(): Observable<any[]> {
      return of(this.cocktails.filter( el => el.alcohol ))
  }

  getCocktailsWithout(): Observable<any[]> {
      return of(this.cocktails.filter( el => ! el.alcohol ))
  }

  getCocktailsFirstLetter(letter: string): Observable<any[]> {
    console.log(letter)
    return of(this.cocktails.filter( el => el.name.toLocaleLowerCase()[0] === letter.toLocaleLowerCase() ))
  }

  getCocktailsContains(search: string): Observable<any[]> {
    return of(this.cocktails.filter( el => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
  }

  getCocktailsBeginWith(begin: string): Observable<Cocktail[]> {
    return this.getCocktails().pipe(
        map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(begin.toLocaleLowerCase()) === 0 ) )
    )
  }
}
