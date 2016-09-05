"use strict";
var router_1 = require('@angular/router');
var mobile_component_1 = require('../app/components/mobile/mobile.component');
var pi_component_1 = require('../app/components/pi/pi.component');
var appRoutes = [
    {
        path: '',
        component: mobile_component_1.BagPiMobileComponent
    },
    {
        path: 'pi',
        component: pi_component_1.BagPiPiComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map