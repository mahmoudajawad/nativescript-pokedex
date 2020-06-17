import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

	constructor(public route: ActivatedRoute, private router: Router) { }

	ngOnInit() { }

	isCurrentRoute(routes: string | Array<string>): boolean {
		if (typeof routes == 'string') {
			routes = [routes];
		}
		return (routes as Array<string>).some((route) => {
			return this.router.url.split('/')[2] == route;
		});
	}

}
