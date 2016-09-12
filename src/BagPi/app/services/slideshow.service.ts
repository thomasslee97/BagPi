import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BagPiScreenService } from './screen.service';

@Injectable()
export class BagPiSlideshowService {
    private currentScreen = 0;

    constructor(private router: Router, private screenService: BagPiScreenService) {
        this.screenService.scrollToNext(this.currentScreen);
        setInterval(() => { this.alternate(); }, 5000);
    }

    alternate() {
        this.currentScreen++;

        if (this.currentScreen == 2) {
            this.currentScreen = 0;
        }

        this.screenService.scrollToNext(this.currentScreen);

        switch (this.currentScreen) {
            case 0:
                this.router.navigate(['/pi/1']);
                break;
            case 1:
                this.router.navigate(['/pi/2']);
                break;
        }
    }
}