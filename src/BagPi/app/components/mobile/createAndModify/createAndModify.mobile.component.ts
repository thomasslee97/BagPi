import { Component } from '@angular/core';

import { BagPiScreenService } from '../../../services/index';

@Component({
    selector: 'bag-pi-create-and-modify-mobile-component',
    templateUrl: 'views/components/mobile/createAndModify/createAndModify.mobile.component.html',
    styleUrls: ['views/components/mobile/createAndModify/createAndModify.mobile.component.css']
})
export class BagPiCreateAndModifyMobileComponent {
    public iconList = [
        {
            "name": "Facebook",
            "code": "&#xf09a;",
            "styles": [
                {
                    "color": "#3b5998"
                }
            ]
        },
        {
            "name": "Twitter",
            "code": "&#xf099;",
            "styles": [
                {
                    "color": "#1DA1F2"
                }
            ]
        },
        {
            "name": "Soundcloud",
            "code": "&#xf1be;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Google+",
            "code": "&#xf2b3;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "YouTube",
            "code": "&#xf167;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Instagram",
            "code": "&#xf16d;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "GitHub",
            "code": "&#xf09b;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Slack",
            "code": "&#xf198;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Reddit",
            "code": "&#xf1a1;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Wordpress",
            "code": "&#xf19a;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Bitbucket",
            "code": "&#xf171;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Pinterest",
            "code": "&#xf0d2;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Skype",
            "code": "&#xf17e;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Steam",
            "code": "&#xf1b6;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "Deviantart",
            "code": "&#xf1bd;",
            "styles": [
                {
                    "color": ""
                }
            ]
        },
        {
            "name": "LinkedIn",
            "code": "&#xf0e1;",
            "styles": [
                {
                    "color": ""
                }
            ]
        }
    ];

    public selectedIcon = {};

    constructor(private screenService: BagPiScreenService) {
        this.selectedIcon = this.iconList[0];
    }

    overrideSelected(value) {
        for (var i = 0; i < this.iconList.length; i++) {
            if (this.iconList[i].name == value) {
                this.selectedIcon = this.iconList[i];
            }
        }
    }
}