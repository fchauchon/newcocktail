import { Routes } from '@angular/router';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'with', component: WithOrWithoutComponent },
    { path: 'without', component: WithOrWithoutComponent },
    { path: 'about', component: AboutComponent },
];
