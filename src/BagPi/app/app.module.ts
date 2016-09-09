import { Component, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';

import { BagPiSlideshowService } from './services/index';

import { BagPiMobileComponent } from './components/index';
import { BagPiPiComponent } from './components/index';
import { BagPiScreenOneComponent } from './components/index';
import { BagPiScreenTwoComponent } from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        BagPiMobileComponent,
        BagPiPiComponent,
        BagPiScreenOneComponent,
        BagPiScreenTwoComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        appRoutingProviders,
        BagPiSlideshowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }