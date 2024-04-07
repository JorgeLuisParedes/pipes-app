import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
	selector: 'app-uncommon-page',
	templateUrl: './uncommon-page.component.html',
	styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
	// i18n Select Pipe
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

	// i18nPlural Pipe
	public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
	public clientMap = {
		'=0': 'no tenemos ningún cliente esperando.',
		'=1': 'tenemos un cliente esperando.',
		'=2': 'tenemos 2 clientes esperando.',
		other: 'tenemos # clientes esperando.',
	};

	deleteClient(): void {
		this.clients.shift();
	}

	// KeyValue Pipe
	public person = {
		name: 'Jorge Alejandro',
		age: 3,
		address: 'Oviedo, España',
	};

	// Async Pipe
	public myObservableTimer: Observable<number> = interval(2000).pipe(tap((value) => console.log('tap', value)));

	public promiseValue: Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Tenemos data en el promesa.');
			console.log('Tenemos data en el promesa.');
			this.person.name = 'Sophia Victoria';
			this.person.age = 16;
		}, 3500);
	});
}
