import { Injectable } from '@angular/core';

import { debugLog, camelCaseToSpaced, kebabCaseToSpaced, generatePokemonObject } from '@src/app/utils/app-utils/app-utils.common';

@Injectable()
export class AppUtils {
	debugLog = debugLog;
	camelCaseToSpaced = camelCaseToSpaced;
	kebabCaseToSpaced = kebabCaseToSpaced;

	generatePokemonObject = generatePokemonObject;

	platformVal = (vals: { web?: any; mobile: any; android: any; ios: any; }, verbose: boolean = false) => {
		return vals.web;
	}

	platform = (verbose: boolean = false): 'web' | 'mobile' | 'android' | 'ios' => {
		return 'web';
	}

	screenWidth = (): number => {
		return window.innerWidth;
	}
}