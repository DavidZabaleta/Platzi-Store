import {
    Component,
    Input,
    EventEmitter,
    Output,
    SimpleChanges,
    OnChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.module';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. Soy un constructor');
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log('2. ngOnChanges');
        console.log(changes);

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('3. ngOnInit');

    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log('5. ngOnDestroy');

    }

    addCart() {
        console.log('Agregado');
        this.productClicked.emit(this.product.id);
    }



}