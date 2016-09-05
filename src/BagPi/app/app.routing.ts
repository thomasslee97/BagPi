import { Routes, RouterModule } from '@angular/router';

import { BagPiMobileComponent } from '../app/components/mobile/mobile.component';
import { BagPiPiComponent } from '../app/components/pi/pi.component';

const appRoutes: Routes = [
    {
        path: '',
        component: BagPiMobileComponent
    },
    {
        path: 'pi',
        component: BagPiPiComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
