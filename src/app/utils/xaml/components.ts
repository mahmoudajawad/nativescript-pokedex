import { Component, Input, Output, EventEmitter, ElementRef, OnDestroy, ContentChild, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

let counters: {
	[key: string]: number;
} = {
	grid: 1
};

@Component({
	selector: 'Container, Page',
	template: `
  <div class="container-fluid">
    <div class="row" style="height: 100%;">
      <div class="col-12">
        <ng-content></ng-content>
      </div>
    </div>
  </div>`,
})
export class XAMLPage { }



@Component({
	selector: 'page-router-outlet',
	template: `<router-outlet></router-outlet>`,
})
export class XAMLPageRouterOutlet { }

@Component({
	selector: 'ActionBar',
	template: `
  <nav class="navbar navbar-expand-lg {{ (class) ? class : 'navbar-light bg-light' }}">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">&#9776;</button>
  
    <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
      <ul #WebMenu class="navbar-nav ml-auto">
		  <ng-container *ngTemplateOutlet="web"></ng-container>
	  </ul>
    </div>
  </nav>
    `,
})
export class XAMLActionBar {
	@Input('title') title: string = '';
	@Input('class') class: string = '';

	isMenuCollapsed: boolean = true;

	@ViewChild('WebMenu', { static: true }) WebMenu: ElementRef;
	@ContentChild('web', { static: true }) web: TemplateRef<ElementRef>;

	ngAfterViewInit() {
		this.WebMenu.nativeElement.querySelectorAll('li').forEach((n, i) => {
			this.WebMenu.nativeElement.append(n);
		});
	}
}

@Component({
	selector: 'ActionItem',
	template: ``,
})
export class XAMLActionItem { }

@Component({
	selector: 'Label',
	template: `{{ text }}`,
})
export class XAMLLabel {
	@Input('text') text: string = '';
}

@Component({
	selector: 'Button',
	template: `
  <button [class]="class" (click)="onTap($event)">{{ text }}</button>
  <!-- [routerLink]="nsRouterLink" -->
    `,
})
export class XAMLButton {
	@Input('class') class: string = '';
	@Input('text') text: string = '';
	// @Input('nsRouterLink') nsRouterLink!: Array<string>;
	@Output('tap') tap: EventEmitter<any> = new EventEmitter<any>();

	onTap($event) {
		this.tap.emit($event);
	}
}

@Component({
	selector: 'Image',
	template: `
  <img [src]="_src" [attr.async]="asyncAttrVal()">
    `,
})
export class XAMLImage {

	_src: string = '';
	@Input('src')
	public set src(v: string) {
		try {
			if (v[0] == '~') {
				this._src = v.slice(2);
			} else {
				this._src = v;
			}
		} catch (error) {

		}
	}

	@Input('loadMode') loadMode: 'async' | 'sync' = 'async';

	asyncAttrVal(): 'on' | 'off' {
		return (this.loadMode == 'async') ? 'on' : 'off';
	}
}

@Component({
	selector: 'ScrollView',
	template: `<ng-content></ng-content>`,
})
export class XAMLScrollView { }

@Component({
	selector: 'StackLayout',
	template: `
  <div class="container-fluid">
      <div class="row">
        <ng-content></ng-content>
      </div>
  </div>
    `,
})
export class XAMLStackLayout {

	constructor(private elRef: ElementRef) { }

	ngAfterContentInit() {
		this.elRef.nativeElement.querySelectorAll('div.container-fluid > div.row > *').forEach((n, i) => {
			n.classList.add('col-12')
		});
	}
}

@Component({
	selector: 'GridLayout',
	template: `
    <div class="grid">
      <ng-content></ng-content>
    </div>
  `,
})
export class XAMLGridLayout implements OnDestroy {

	beginUpdateLayout: boolean = false;
	isUpdatingLayout: boolean = false;

	_rows: string = '*';
	@Input('rows')
	set rows(v: string) {
		this._rows = v;
		if (this.beginUpdateLayout) {
			this.ngAfterContentInit();
		}
	}
	get rows(): string {
		return this._rows;
	}

	_columns: string = '*';
	@Input('columns')
	set columns(v: string) {
		this._columns = v;
		if (this.beginUpdateLayout) {
			this.ngAfterContentInit();
		}
	}
	get columns(): string {
		return this._columns;
	}

	@Input('class') class!: string;

	@Output('layoutChanged') layoutChanged: EventEmitter<any> = new EventEmitter();
	get layoutChangedPresent(): boolean {
		return this.layoutChanged.observers.length > 0;
	}
	layoutChangedHandlerId!: number;

	gridId!: number;

	constructor(private elRef: ElementRef) { }

	ngAfterContentInit() {
		if (this.isUpdatingLayout) return;
		this.isUpdatingLayout = true;
		this.gridId = counters.grid++;
		let gridEl = this.elRef.nativeElement.querySelector('.grid');
		if (this.class) {
			gridEl.classList.add(...this.class.split(' '));
			this.elRef.nativeElement.classList.remove(...this.class.split(' '));
		}
		for (let axis of ['rows', 'columns']) {
			let gridAxis: string = '';
			let axisSpaces: Array<string> = (axis == 'rows') ? this.rows.split(' ') : this.columns.split(' ');
			for (let col of axisSpaces) {
				if (col.endsWith('*')) {
					if (col == '*') {
						gridAxis += '1fr '
					} else {
						gridAxis += `${col.replace('*', '')}fr `
					}
				} else if (col == 'auto') {
					gridAxis += 'min-content '
				} else {
					gridAxis += `${col}px `
				}
			}
			gridEl.style.setProperty(`grid-template-${(axis == 'rows') ? 'rows' : 'columns'}`, gridAxis);
		}

		if (this.layoutChangedPresent) {
			this.layoutChangedHandlerId = (document as any).registerAppEventHandler('bodyResize', this, 'layoutChanged', true);
		}
		this.isUpdatingLayout = false;
		this.beginUpdateLayout = true;
	}

	ngOnDestroy() {
		if (this.layoutChangedPresent) {
			(document as any).unregisterAppEventHandler('bodyResize', this.layoutChangedHandlerId);
		}
	}
}