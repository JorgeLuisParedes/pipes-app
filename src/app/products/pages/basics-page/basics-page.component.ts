import { Component } from '@angular/core';

@Component({
	selector: 'app-basics-page',
	templateUrl: './basics-page.component.html',
	styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
	public nameLower: string = 'jorge alejandro';
	public nameUpper: string = 'JORGE ALEJANDRO';
	public fullName: string = 'jOrGe AlEjAnDrO pArEdEs PrAtO';

	public customDate: Date = new Date();
}
