import { Injectable } from '@angular/core';

import { ApplicationSettings } from '@nativescript/core';

@Injectable()
export class CacheService {

	constructor() { }

	get(key: string): string {
		return ApplicationSettings.getString(key);
	}
	put(key: string, val: string): void {
		ApplicationSettings.setString(key, val);
	}

	remove(key: string): void {
		ApplicationSettings.remove(key);
	}
}