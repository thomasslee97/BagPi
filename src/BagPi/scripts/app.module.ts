import { Component, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { BagPiMobileComponent } from './mobile/mobile.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        BagPiMobileComponent
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }