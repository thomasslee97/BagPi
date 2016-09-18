import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

import { BagPiScreenService } from '../../../services/index';

declare var $: any;

@Component({
    selector: 'bag-pi-create-and-modify-mobile-component',
    templateUrl: 'views/components/mobile/createAndModify/createAndModify.mobile.component.html',
    styleUrls: ['views/components/mobile/createAndModify/createAndModify.mobile.component.css']
})
export class BagPiCreateAndModifyMobileComponent implements OnInit {
    public iconList = [];

    public selectedIcon = {};
    public selectedScreen = {};

    public selectedScreenIndex = 0;

    public dropSelectionEdit;
    public dropSelectionCreate;
    public dropSelectionTemplateType;

    public bLoaded = false;

    public newScreenTitle;
    public newScreenUsername;
    public newScreenUrl;
    public newScreenHandle;
    public newScreenHtml;

    constructor(private screenService: BagPiScreenService, private http: Http, private router: Router) {

    }

    ngOnInit() {
        this.getIcons().subscribe((data) => this.formatData(data));
        this.dropSelectionTemplateType = 0;

        if (this.screenService.bEditing) {
            this.selectedScreen = this.screenService.screens[0];
            this.screenService.bScreenSelected = true;

            this.setSelectedScreenValues();
        }
    }

    formatData(data) {
        this.bLoaded = true;
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
                console.log(this.selectedIcon);
            }
        }
    }

    overrideSelectedScreen(value) {
        for (var i = 0; i < this.screenService.screens.length; i++) {
            if (this.screenService.screens[i].title == value) {
                this.selectedScreen = this.screenService.screens[i];
                this.selectedScreenIndex = i;
                this.screenService.bScreenSelected = true;

                this.setSelectedScreenValues();
            }
        }
    }

    setSelectedScreenValues() {
        this.newScreenTitle = this.selectedScreen["title"];
        this.newScreenUsername = this.selectedScreen["username"];
        this.newScreenUrl = this.selectedScreen["url"];
        this.newScreenHandle = this.selectedScreen["handle"];
        this.newScreenHtml = this.selectedScreen["html"];
        this.dropSelectionCreate = this.findIconNameByCode(this.selectedScreen["iconCode"]);

        this.overrideSelectedIcon(this.dropSelectionCreate);
    }

    findIconNameByCode(code) {
        for (var i = 0; i < this.iconList.length; i++) {
            if (this.iconList[i]["code"] == code) {
                return this.iconList[i]["name"];
            }
        }
    }

    addNewScreen(social: boolean) {
        if (social) {
            if (this.screenService.bEditing) {
                this.screenService.screens[this.selectedScreenIndex]["title"] = this.newScreenTitle;
                this.screenService.screens[this.selectedScreenIndex]["iconCode"] = this.selectedIcon["code"];
                this.screenService.screens[this.selectedScreenIndex]["username"] = this.newScreenUsername;
                this.screenService.screens[this.selectedScreenIndex]["url"] = this.newScreenUrl;
                this.screenService.screens[this.selectedScreenIndex]["handle"] = this.newScreenHandle;
                this.screenService.screens[this.selectedScreenIndex]["styles"] = this.selectedIcon["styles"];
            } else {
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
            }

            this.screenService.saveScreens();
        } else {
            if (this.screenService.bEditing) {
                this.screenService.screens[this.selectedScreenIndex]["title"] = this.newScreenTitle;
                this.screenService.screens[this.selectedScreenIndex]["html"] = this.newScreenHtml;
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
            }

            this.screenService.saveScreens();

            this.router.navigate(['/success']);
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