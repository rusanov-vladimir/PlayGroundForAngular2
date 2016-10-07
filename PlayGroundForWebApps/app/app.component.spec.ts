/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { TestBed, async }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './app.routes';
import { HttpModule } from '@angular/http';

////////  SPECS  /////////////



/// Delete this
describe('Smoke test', () => {
    it('should run a passing test', () => {
        expect(true).toEqual(true, 'should pass');
    });
});

describe('AppComponent with TCB', function () {
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                RouterModule,
                HttpModule,
                RoutesModule
            ], declarations: [AppComponent, HeroesComponent, DashboardComponent, HeroDetailComponent] });
    });

    it('should instantiate component', async(() => {
        TestBed.compileComponents().then(() => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
        });
    }));

    it('should have expected <h1> text', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

        expect(h1.innerText).toMatch(/angular app/i, '<h1> should say something about "Angular App"');
    });
});