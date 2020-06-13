import { Component, Input, Output, EventEmitter, ElementRef, OnDestroy } from "@angular/core";

let counters: {
  [key: string]: number;
} = {
  grid: 1
};

@Component({
    selector: 'Page',
    template: `<ng-content></ng-content>`,
})
export class XAMLPage {
    @Input('actionBarHidden') actionBarHidden!: boolean;
}

@Component({
    selector: 'ActionBar',
    template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    `,
})
export class XAMLActionBar {
    @Input('title') title: string = '';
}

@Component({
    selector: 'Label',
    template: `
  <p>{{ text }}</p>
    `,
})
export class XAMLLabel {
    @Input('text') text: string = '';
    @Input('row') row!: number;
    @Input('col') col!: number;
}

@Component({
    selector: 'Button',
    template: `
  <button [class]="class" (click)="onTap($event)" [routerLink]="nsRouterLink">{{ text }}</button>
    `,
})
export class XAMLButton {
    @Input('class') class: string = '';
    @Input('text') text: string = '';
    @Input('nsRouterLink') nsRouterLink!: Array<string>;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter<any>();
    @Input('row') row!: number;
    @Input('col') col!: number;

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

  @Input('row') row!: number;
  @Input('col') col!: number;

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
  @Input('row') row!: number;
  @Input('col') col!: number;

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
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="grid">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
})
export class XAMLGridLayout implements OnDestroy {

  isUpdatingLayout: boolean = false;

  _rows: string = '*';
  @Input('rows')
  set rows(v: string) {
    this._rows = v;
    this.ngAfterContentInit();
  }
  get rows(): string {
    return this._rows;
  }

  _columns: string = '*';
  @Input('columns')
  set columns(v: string) {
    this._columns = v;
    this.ngAfterContentInit();
  }
  get columns(): string {
    return this._columns;
  }

  @Output('layoutChanged') layoutChanged: EventEmitter<any> = new EventEmitter();
  get layoutChangedPresent(): boolean {
    return this.layoutChanged.observers.length > 0;
  }
  layoutChangedHandlerId!: number;

  @Input('row') row!: number;
  @Input('col') col!: number;
  
  gridId!: number;

  constructor(private elRef: ElementRef) { }

  ngAfterContentInit() {
    if (this.isUpdatingLayout) return;
    this.isUpdatingLayout = true;
    this.gridId = counters.grid++;
    let gridEl = this.elRef.nativeElement.querySelector('.grid');
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
    
    this.elRef.nativeElement.querySelectorAll('div.grid > *').forEach((el, i) => {
      let row = (el.attributes.row) ? el.attributes.row.nodeValue : '0';
      let col = (el.attributes.col) ? el.attributes.col.nodeValue : '0';
      el.style.setProperty('grid-row', parseInt(row) + 1);
      el.style.setProperty('grid-column', parseInt(col) + 1);
    });

    if (this.layoutChangedPresent) {
      this.layoutChangedHandlerId = (document as any).registerAppEventHandler('bodyResize', this, 'layoutChanged', true);
    }
    this.isUpdatingLayout = false;
  }

  ngOnDestroy() {
    if (this.layoutChangedPresent) {
      (document as any).unregisterAppEventHandler('bodyResize', this.layoutChangedHandlerId);
    }
  }
}