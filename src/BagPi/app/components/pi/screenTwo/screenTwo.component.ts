import { Component, trigger, transition, animate, style, state } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { QRCodeComponent } from 'ng2-qrcode';

import { BagPiScreenService } from '../../../services/index';

@Component({
    selector: 'bag-pi-screen-two-component',
    templateUrl: 'views/components/pi/screenTwo/screenTwo.component.html',
    styleUrls: ['views/components/pi/screenTwo/screenTwo.component.css'],
    directives: [QRCodeComponent, ROUTER_DIRECTIVES],
    host: {
        '[@routeAnimation]': 'true',
        '[style.display]': "'block'",
        '[style.position]': "'absolute'"
    },
    animations: [
        trigger('routeAnimation', [
            state('*', style({ transform: 'translateX(0)', opacity: 1 })),
            transition('void => *', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(500)
            ]),
            transition('* => void', animate(500, style({ transform: 'translateX(-100%)', opacity: 0 })))
        ])
    ]
})
export class BagPiScreenTwoComponent {
    constructor(
        private screenService: BagPiScreenService
    ) {
        
    }
}