import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { BagPiScreenService } from '../../../services/index';

declare var $: any;

@Component({
    selector: 'bag-pi-create-and-modify-mobile-component',
    templateUrl: 'views/components/mobile/createAndModify/createAndModify.mobile.component.html',
    styleUrls: ['views/components/mobile/createAndModify/createAndModify.mobile.component.css']
})
export class BagPiCreateAndModifyMobileComponent {
    public iconList = [];

    public selectedIcon = {};
    public selectedScreen = {};

    public dropSelectionEdit;
    public dropSelectionCreate;
    public dropSelectionTemplateType;

    public bLoaded = false;

    public newScreenTitle;

    constructor(private screenService: BagPiScreenService, private http: Http) {
        this.getIcons().subscribe((data) => this.formatData(data));      
        this.dropSelectionTemplateType = 0;  
    }

    formatData(data) {
        this.bLoaded = true;
        console.log(data);
        this.iconList = data;
        this.selectedIcon = this.iconList[0];
        this.dropSelectionCreate = this.selectedIcon["name"];
        this.selectedScreen = this.screenService.screens[0];
        this.dropSelectionEdit = this.selectedScreen["title"];
    }

    getIcons() {
        return this.http.request('/data/icons.json').map(result => result.json());
    }

    overrideSelectedIcon(value) {
        for (var i = 0; i < this.iconList.length; i++) {
            if (this.iconList[i].name == value) {
                this.selectedIcon = this.iconList[i];
            }
        }
    }

    overrideSelectedScreen(value) {
        for (var i = 0; i < this.screenService.screens.length; i++) {
            if (this.screenService.screens[i].title == value) {
                this.selectedScreen = this.screenService.screens[i];
            }
        }
    }

    addNewScreen() {
        console.log("Add New Screen");
    }
}