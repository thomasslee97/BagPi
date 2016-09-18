import { Component } from '@angular/core';

import { BagPiScreenService } from '../../../services/index';

declare var $: any;

@Component({
    selector: 'bag-pi-create-and-modify-mobile-component',
    templateUrl: 'views/components/mobile/editSuccessful/editSuccessful.mobile.component.html',
    styleUrls: ['views/components/mobile/editSuccessful/editSuccessful.mobile.component.css']
})
export class BagPiEditSuccessfulMobileComponent {
    constructor(private screenService: BagPiScreenService) {
        
    }
}