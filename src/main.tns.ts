import { platformNativeScriptDynamic, AppOptions } from '@nativescript/angular';

import { AppModule } from '@src/app/app.module';

// Optional - attach to livesync hooks and perfrom navigation
// import './livesync-navigation.tns';

let options: AppOptions = {};

// if (module['hot']) {
// 	options.hmrOptions = {
// 		moduleTypeFactory: () => AppModule,
// 		livesyncCallback: (platformReboot) => {
// 			setTimeout(platformReboot, 0);
// 		},
// 	};

// 	// Path to your app module.
// 	// You might have to change it if your module is in a different place.
// 	module['hot'].accept(['./app/app.module'], () => {
// 		global['hmrRefresh']();
// 	});
// }

// Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);