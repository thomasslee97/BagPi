import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BagPiScreenService {
    public currentScreenEven = 0;
    public currentScreenOdd = 2;

    public bLoaded:boolean = false;
    public bEditing: boolean = false;
    public bCreating: boolean = false;

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

    public screens = [];

    /*public screens = [
        {
            title: 'Twitter',
            icon: '<i class="fa fa-twitter"></i>',
            username: 'Tom Lee',
            url: 'https://twitter.com/thomasslee97',
            handle: '@thomasslee97',
            styles: [{
                color: '#1DA1F2',
                background: '#FFFFFF'
            }]
        },
        {
            title: 'Facebook',
            icon: '<i class="fa fa-facebook"></i>',
            username: 'Tom Lee',
            url: 'https://www.facebook.com/thomasslee97',
            handle: '/thomasslee97',
            styles: [{
                color: '#3b5998',
                background: '#FFFFFF'
            }]
        },
        {
            title: 'Blog',
            icon: '<img src="/media/Logo_Dark.png" width="36" height="36" />',
            username: './T',
            url: 'http://tom.grepped.co',
            handle: 'http://tom.grepped.co',
            styles: [{
                color: '#000000',
                background: '#FFFFFF'
            }]
        }
    ];*/

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