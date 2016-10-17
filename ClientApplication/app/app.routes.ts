import { Routes, RouterModule }  from '@angular/router';
import { ContainersComponent } from './components/containers.component';
import { ContainerDetailComponent } from './components/container-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/containers',
        pathMatch: 'full'
    },
    {
        path: 'containers',
        component: ContainersComponent,
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: ContainerDetailComponent,
        pathMatch: 'full'
    },
];

export const RoutesModule = RouterModule.forRoot(routes);