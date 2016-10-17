import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './app.routes';
import { HttpModule } from '@angular/http';
import {HeroesClient} from "./autogenerated"
import { ContainerService } from './services/container.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './components/app.component';
import { ContainersComponent } from './components/containers.component';
import { ContainerDetailComponent } from './components/container-detail.component';


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        HttpModule,
        RoutesModule
    ],
    providers: [
        ContainerService,
        HeroesClient,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    declarations: [
        AppComponent,
        ContainersComponent,
        ContainerDetailComponent
    ],
    //exports: [AppComponent], remove, noone imports it
    bootstrap: [AppComponent]
})
export class AppModule { }