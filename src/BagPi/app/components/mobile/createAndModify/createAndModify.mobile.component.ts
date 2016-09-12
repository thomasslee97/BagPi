import { Component } from '@angular/core';

import { BagPiScreenService } from '../../../services/index';

@Component({
    selector: 'bag-pi-create-and-modify-mobile-component',
    templateUrl: 'views/components/mobile/createAndModify/createAndModify.mobile.component.html',
    styleUrls: ['views/components/mobile/createAndModify/createAndModify.mobile.component.css']
})
export class BagPiCreateAndModifyMobileComponent {
    constructor(private screenService: BagPiScreenService) {

    }
}