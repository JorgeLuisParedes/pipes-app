import { Component } from '@angular/core';

@Component({
	selector: 'app-uncommon-page',
	templateUrl: './uncommon-page.component.html',
	styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
	// i18n Select
	public name: string = 'Jorge Alejandro';
	public gender: 'male' | 'female' = 'male';
	public invitationMap = {
		male: 'invitarlo',
		female: 'invitarla',
	};

	changeClient(): void {
		this.name = 'Sophia Victoria';
		this.gender = 'female';
	}

	// i18nPlural
	public cliente: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
	public clientMap = {
		'=0': 'no tenemos ningún cliente esperando.',
		'=1': 'tenemos un cliente esperando.',
		'=2': 'tenemos 2 clientes esperando.',
		other: 'tenemos # clientes esperando.',
	};

	deleteClient(): void {
		this.cliente.shift();
	}
}
