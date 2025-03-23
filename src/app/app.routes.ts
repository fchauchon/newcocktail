import { Routes } from '@angular/router';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'cocktails/:letter', component: CocktailListComponent },
    { path: 'with', component: WithOrWithoutComponent },
    { path: 'without', component: WithOrWithoutComponent },
    { path: 'about', component: AboutComponent },
];
