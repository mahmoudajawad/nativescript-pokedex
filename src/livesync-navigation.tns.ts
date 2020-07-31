import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { onBeforeLivesync, onAfterLivesync, RouterExtensions } from '@nativescript/angular';

// Ref: https://github.com/NativeScript/nativescript-angular/wiki/NativeScript-5.2-HMR-with-Angular

let cachedUrl: string;
onBeforeLivesync.subscribe(moduleRef => {
	console.log('#### onBeforeLivesync');
	if (moduleRef) {
		const router = <Router>moduleRef.injector.get(Router);
		cachedUrl = router.url;
		console.log(`-------> Caching URL: ${cachedUrl}`);
	}
});

onAfterLivesync.subscribe(({ moduleRef, error }) => {
	console.log(`#### onAfterLivesync moduleRef: ${moduleRef} error: ${error}`);
	if (moduleRef) {
		const router = <RouterExtensions>moduleRef.injector.get(RouterExtensions);
		const ngZone = <NgZone>moduleRef.injector.get(NgZone);
		if (router && cachedUrl) {
			ngZone.run(() => { // <--  should be wrapped in ngZone
				router.navigateByUrl(cachedUrl, { animated: false });
			});
		}
	}
});