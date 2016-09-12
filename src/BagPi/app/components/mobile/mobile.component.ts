import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bag-pi-mobile-component',
    templateUrl: 'views/components/mobile/mobile.component.html',
    styleUrls: ['views/components/mobile/mobile.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})
export class BagPiMobileComponent {
    public showBackButton: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute) {
        router.events.subscribe((val) => {
            if (val.url == "/" || val.url == "/menu") {
                this.showBackButton = false;
            } else {
                this.showBackButton = true;
            }
        });
    }

    back() {
        this.router.navigate(['/']);
    }
}