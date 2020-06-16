import { Injectable } from '@angular/core';

import * as applicationSettings from 'tns-core-modules/application-settings';

@Injectable()
export class CacheService {

	constructor() { }

	get(key: string): string {
		return applicationSettings.getString(key);
	}
	put(key: string, val: string): void {
		applicationSettings.setString(key, val);
	}

	remove(key: string): void {
		applicationSettings.remove(key);
	}
}