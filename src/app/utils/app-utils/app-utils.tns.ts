import { Injectable } from '@angular/core';
import { isAndroid, isIOS, Screen } from '@nativescript/core';

import { debugLog, camelCaseToSpaced, kebabCaseToSpaced, generatePokemonObject } from '@src/app/utils/app-utils/app-utils.common';


@Injectable()
export class AppUtils {

	constructor() { }

	debugLog = debugLog;
	camelCaseToSpaced = camelCaseToSpaced;
	kebabCaseToSpaced = kebabCaseToSpaced;

	generatePokemonObject = generatePokemonObject;

	platformVal = (vals: { web?: any; mobile: any; android: any; ios: any; }, verbose: boolean = false) => {
		return vals[this.platform(verbose)];
	}

	platform = (verbose: boolean = false): 'web' | 'mobile' | 'android' | 'ios' => {
		if (verbose) {
			if (isAndroid) {
				return 'android';
			} else if (isIOS) {
				return 'ios';
			}
		}
		return 'mobile';
	}

	screenWidth = (): number => {
		return Screen.mainScreen.widthDIPs;
	}
}