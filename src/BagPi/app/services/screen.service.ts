import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BagPiScreenService {
    public currentScreenEven = 0;
    public currentScreenOdd = 2;

    public bLoaded: boolean = false;
    public bEditing: boolean = false;
    public bCreating: boolean = false;
    public bScreenSelected: boolean = false;

    public screens = [];

    public constructor(private http: Http) {
        this.getScreens().subscribe((data) => this.screens = this.formatData(data));
    }

    formatData(data) {
        this.bLoaded = true;
        console.log(data);
        return data;
    }

    getScreens() {
        return this.http.request('/data/screens.json').map(result => result.json());
    }

    saveScreens() {
        this.http.post('/data/screens.json', JSON.stringify(this.screens));
    }

    public scrollToNext(currentScreen) {
        // CurrentScreen = 0 => Even displayed
        // CurrentScreen = 1 => Odd displayed

        if (currentScreen == 0) {
            this.currentScreenOdd = this.currentScreenEven + 1;
            if (this.currentScreenOdd > this.screens.length - 1) {
                this.currentScreenOdd = 0;
            }
        } else {
            this.currentScreenEven = this.currentScreenOdd + 1;
            if (this.currentScreenEven > this.screens.length - 1) {
                this.currentScreenEven = 0;
            }
        }
    }
}