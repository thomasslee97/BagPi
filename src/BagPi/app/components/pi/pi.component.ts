import { Component } from '@angular/core';
import { QRCodeComponent } from 'ng2-qrcode';

import { BagPiSlideshowService } from '../../services/index';

@Component({
    selector: 'bag-pi-pi-component',
    templateUrl: 'views/components/pi/pi.component.html',
    styleUrls: ['views/components/pi/pi.component.css'],
    directives: [QRCodeComponent]
})
export class BagPiPiComponent {
    constructor(private slideShowService: BagPiSlideshowService) {

    }
}