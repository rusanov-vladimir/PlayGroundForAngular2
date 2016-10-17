import { Routes, RouterModule }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
        //terminal: true
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent,
        pathMatch: 'full'
    },
];

export const RoutesModule = RouterModule.forRoot(routes);