import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    isCurrentRoute(route: string): boolean {
        return (this.router.url.split('/')[2] == route);
    }

}
