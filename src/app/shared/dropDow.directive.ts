import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective {

    @HostBinding('class.open') isOpen: boolean = false;
    constructor( 
        //private temRef: TemplateRef<any>,
        //private vcRef: ViewContainerRef  
    ){}

   

    @HostListener('click') toggleOpen(evenData: Event ){
       //console.log('this is from the directive.');
        this.isOpen = !this.isOpen;
    }
}