import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        HttpModule,
        RoutesModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    //exports: [AppComponent], remove, noone imports it
    bootstrap: [AppComponent]
})
export class AppModule { }