import { Component } from '@angular/core';


@Component({
    selector: 'containers-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/containers']" routerLinkActive="active">Home</a>
        </nav>
        <router-outlet></router-outlet>
      `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = 'Containers management';
}