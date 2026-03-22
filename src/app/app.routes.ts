import { Routes } from '@angular/router';
import { About } from './about/about';
import { CocktailList } from './cocktail-list/cocktail-list';
import { Home } from './home/home';
import { ObsPage } from './obs-page/obs-page';
import { WithOrWithout } from './with-or-without/with-or-without';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: Home },
    { path: 'cocktails/:letter', component: CocktailList },
    { path: 'with', component: WithOrWithout },
    { path: 'without', component: WithOrWithout },
    { path: 'obs', component: ObsPage },
    { path: 'about', component: About },
];
