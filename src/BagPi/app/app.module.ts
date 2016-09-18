import { Component, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';

import { BagPiScreenService } from './services/index';
import { BagPiSlideshowService } from './services/index';

import { BagPiMobileComponent } from './components/index';
import { BagPiMenuMobileComponent } from './components/index';
import { BagPiCreateAndModifyMobileComponent } from './components/index';
import { BagPiEditSuccessfulMobileComponent } from './components/index';
import { BagPiPiComponent } from './components/index';
import { BagPiScreenOneComponent } from './components/index';
import { BagPiScreenTwoComponent } from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        BagPiMobileComponent,
        BagPiMenuMobileComponent,
        BagPiCreateAndModifyMobileComponent,
        BagPiEditSuccessfulMobileComponent,
        BagPiPiComponent,
        BagPiScreenOneComponent,
        BagPiScreenTwoComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        appRoutingProviders,
        BagPiScreenService,
        BagPiSlideshowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }