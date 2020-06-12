import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";

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
        if (v[0] == '~') {
            this._src = v.slice(2);
        } else {
            this._src = v;
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
<!-- <div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-12 bg-dark">
      <div class="h-100 d-flex flex-column">
        <div class="row justify-content-center bg-danger">
          <p>ROW 1 - fixed height</p>
        </div>
        <div class="row justify-content-center bg-primary flex-grow-1">
          <p>ROW 2 - Flex</p>
        </div>
      </div>
    </div>
  </div>
    <div class="row">
      <ng-content></ng-content>
    </div>
</div> -->
  `,
})
export class XAMLGridLayout {
  @Input('rows') rows: string = '*';
  @Input('cols') cols: string = '*';
  gridId!: number;

  constructor(private elRef: ElementRef) { }

  ngAfterContentInit() {
    this.gridId = counters.grid++;
    let gridEl = this.elRef.nativeElement.querySelector('.grid');
    for (let axis of ['rows', 'cols']) {
      let gridAxis: string = '';
      let axisSpaces: Array<string> = (axis == 'rows') ? this.rows.split(' ') : this.cols.split(' ');
      for (let col of axisSpaces) {
        if (col == '*') {
          gridAxis += '1fr '
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
  }
}