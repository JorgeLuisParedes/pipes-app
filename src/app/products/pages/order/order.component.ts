import { Component } from '@angular/core';

@Component({
	selector: 'productos-order',
	templateUrl: './order.component.html',
	styles: ``,
})
export class OrderComponent {
	public isUpperCase: boolean = false;

	toggleUpperCase(): void {
		this.isUpperCase = !this.isUpperCase;
	}
}
