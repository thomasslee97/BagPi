import { Routes, RouterModule } from '@angular/router';

import { BagPiMobileComponent } from './components/index';
import { BagPiMenuMobileComponent } from './components/index';
import { BagPiCreateAndModifyMobileComponent } from './components/index';
import { BagPiEditSuccessfulMobileComponent } from './components/index';
import { BagPiPiComponent } from './components/index';
import { BagPiScreenOneComponent } from './components/index';
import { BagPiScreenTwoComponent } from './components/index';

const appRoutes: Routes = [
    {
        path: '',
        component: BagPiMobileComponent,
        children: [
            {
                path: '',
                redirectTo: 'menu'
            },
            {
                path: 'menu',
                component: BagPiMenuMobileComponent
            },
            {
                path: 'create',
                component: BagPiCreateAndModifyMobileComponent
            },
            {
                path: 'edit',
                component: BagPiCreateAndModifyMobileComponent
            },
            {
                path: 'success',
                component: BagPiEditSuccessfulMobileComponent
            }
        ]
    },
    {
        path: 'pi',
        component: BagPiPiComponent,
        children: [
            {
                path: '',
                redirectTo: '1'
            },
            {
                path: '1',
                component: BagPiScreenOneComponent
            },
            {
                path: '2',
                component: BagPiScreenTwoComponent
            }
        ]
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
