import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Screen } from '../interfaces/index';

const url = "http://bagpi.localhost/";
//const url = "/data/";

@Injectable()
export class BagPiScreenService {
    public currentScreenEven = 0;
    public currentScreenOdd = 1;

    public bLoaded: boolean = false;
    public bEditing: boolean = false;
    public bCreating: boolean = false;
    public bScreenSelected: boolean = false;

    public screens: Screen[];

    public constructor(private http: Http, private router: Router) {
        this.loadScreens();
        setInterval(() => this.loadScreens(), 60000);
    }

    formatData(data) {
        this.bLoaded = true;
        return JSON.parse(data);
    }

    loadScreens() {
        this.getScreens().subscribe((data) => this.screens = this.formatData(data));
    }

    getScreens() {
        return this.http.request(url + "getScreens.php").map(result => result.json());
    }

    saveScreens() {
        this.http.post(url + "updateScreens.php", JSON.stringify(this.screens)).subscribe((data) => this.router.navigate(['/success']));
    }

    public scrollToNext(currentScreen) {
        // CurrentScreen = 0 => Even displayed
        // CurrentScreen = 1 => Odd displayed

        if (currentScreen == 1) {
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