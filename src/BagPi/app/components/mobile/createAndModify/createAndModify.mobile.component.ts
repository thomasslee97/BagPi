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
    public newScreenUsername;
    public newScreenUrl;
    public newScreenHandle;
    public newScreenHtml;

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

    addNewScreen(social: boolean) {
        console.log("Adding New Screen");

        if (social) {
            var newSocialScreen = {
                "type": "Social",
                "title": this.newScreenTitle,
                "iconCode": this.selectedIcon["code"],
                "username": this.newScreenUsername,
                "url": this.newScreenUrl,
                "handle": this.newScreenHandle,
                "styles": this.selectedIcon["styles"]
            }

            this.screenService.screens.push(newSocialScreen);

            this.screenService.saveScreens();
        } else {
            var newCustomScreen = {
                "type": "Custom",
                "title": this.newScreenTitle,
                "iconCode": undefined,
                "username": undefined,
                "url": undefined,
                "handle": undefined,
                "styles": undefined,
                "html": this.newScreenHtml
            }

            this.screenService.screens.push(newCustomScreen);

            this.screenService.saveScreens();
        }
    }

    validateNewScreen() {
        if (this.dropSelectionTemplateType == 0) {
            var bValidTitle: boolean = this.validateTitle(this.newScreenTitle);
            var bValidUsername: boolean = this.validateUsername(this.newScreenUsername);
            var bValidUrl: boolean = this.validateUrl(this.newScreenUrl);
            var bValidHandle: boolean = this.validateHandle(this.newScreenHandle);

            if (bValidTitle && bValidUsername && bValidUrl && bValidHandle) {
                this.addNewScreen(true);
            }
        } else {
            var bValidTitle: boolean = this.validateTitle(this.newScreenTitle);
            var bValidHtml: boolean = this.validateHTML(this.newScreenHtml);

            if (bValidTitle && bValidHtml) {
                this.addNewScreen(false);
            }
        }
    }

    validateTitle(title: string) {
        if (title == "" || title == null || title === null || title == undefined) {
            return false;
        } else {
            return true;
        }
    }

    validateUsername(username: string) {
        return true;
    }

    validateUrl(url: string) {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return true;
        } else {
            return false;
        }
    }

    validateHandle(handle: string) {
        return true;
    }

    validateHTML(html: string) {
        if (html == "" || html == null || html === null || html == undefined) {
            return false;
        } else {
            return true;
        }
    }
}