import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
    selector: '[row]'
})
export class XAMLRowDirective {
    
    @Input('row')
    set row(v: string | number) {
        this.elRef.nativeElement.style.setProperty('grid-row', parseInt((v as any)) + 1);
    }

    constructor(private elRef: ElementRef) { }

}

@Directive({
    selector: '[col]'
})
export class XAMLColDirective {

    @Input('col')
    set col(v: string | number) {
        this.elRef.nativeElement.style.setProperty('grid-column', parseInt((v as any)) + 1);
    }
    
    constructor(private elRef: ElementRef) { }
}