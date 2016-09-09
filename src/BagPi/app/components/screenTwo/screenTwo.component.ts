import { Component, trigger, transition, animate, style, state } from '@angular/core';
import { QRCodeComponent } from 'ng2-qrcode';

@Component({
    selector: 'bag-pi-screen-two-component',
    templateUrl: 'views/components/screenTwo/screenTwo.component.html',
    styleUrls: ['views/components/screenTwo/screenTwo.component.css'],
    directives: [QRCodeComponent],
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
export class BagPiScreenTwoComponent { }