import { Directive, Input, ElementRef, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Directive({
	selector: '[row]'
})
export class XAMLRowDirective {

	@Input('rowSpan') rowSpan: string | number = 1;
	@Input('row')
	set row(v: string | number) {
		this.elRef.nativeElement.style.setProperty('grid-row-start', parseInt((v as any)) + 1);
		this.elRef.nativeElement.style.setProperty('grid-row-end', parseInt((v as any)) + parseInt((this.rowSpan as any)) + 1);
	}

	constructor(private elRef: ElementRef) { }

}

@Directive({
	selector: '[col]'
})
export class XAMLColDirective {

	@Input('colSpan') colSpan: string | number = 1;
	@Input('col')
	set col(v: string | number) {
		this.elRef.nativeElement.style.setProperty('grid-column-start', parseInt((v as any)) + 1);
		this.elRef.nativeElement.style.setProperty('grid-column-end', parseInt((v as any)) + parseInt((this.colSpan as any)) + 1);
	}

	constructor(private elRef: ElementRef) { }
}

@Directive({
	selector: '[nsRouterLink]'
})
export class NSRouterLinkDirective {

	@Input('nsRouterLink') nsRouterLink!: Array<string> | string;

	constructor(private router: Router) { }

	// Ref: https://stackoverflow.com/a/41971514/2393762
	@HostListener('click', ['$event']) onClick($event) {
		this.router.navigate((this.nsRouterLink as any))
	}
}