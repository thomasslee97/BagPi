import { Component, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';

import { BagPiMobileComponent } from './components/index';
import { BagPiPiComponent } from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        BagPiMobileComponent,
        BagPiPiComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }