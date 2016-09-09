import { Component, trigger, transition, animate, style, state } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { QRCodeComponent } from 'ng2-qrcode';

@Component({
    selector: 'bag-pi-screen-one-component',
    templateUrl: 'views/components/pi/screenOne/screenOne.component.html',
    styleUrls: ['views/components/pi/screenOne/screenOne.component.css'],
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
export class BagPiScreenOneComponent { }