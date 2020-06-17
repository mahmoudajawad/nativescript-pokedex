import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

	constructor() { }

	get(key: string): string {
		return localStorage.getItem(key);
	}

	put(key: string, val: string): void {
		return localStorage.setItem(key, val);
	}

	remove(key: string): void {
		return localStorage.removeItem(key);
	}

	removeAll(): void {
		return localStorage.clear();
	}
}