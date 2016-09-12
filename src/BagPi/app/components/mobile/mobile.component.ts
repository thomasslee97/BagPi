import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { BagPiScreenService } from '../../services/index';

@Component({
    selector: 'bag-pi-mobile-component',
    templateUrl: 'views/components/mobile/mobile.component.html',
    styleUrls: ['views/components/mobile/mobile.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})
export class BagPiMobileComponent {
    public showBackButton: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute, private screenService: BagPiScreenService) {
        router.events.subscribe((val) => {
            if (val.url == "/" || val.url == "/menu") {
                this.showBackButton = false;
                this.screenService.bCreating = false;
                this.screenService.bEditing = false;
            } else {
                this.showBackButton = true;

                switch (val.url) {
                    case "/create":
                        this.screenService.bCreating = true;
                        break;
                    case "/edit":
                        this.screenService.bEditing = true;
                        break;
                }
            }
        });
    }

    back() {
        this.router.navigate(['/']);
    }
}