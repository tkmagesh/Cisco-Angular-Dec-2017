import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-one',
	template : `
		<h1>Calculator-1</h1>
		<hr>
		<input type="number" [(ngModel)]="model.n1" >
		<input type="number" [(ngModel)]="model.n2" >
		<input type="button" value="Add" (click)="model.add()">
		<input type="button" value="Subtract" (click)="model.subtract()">
		<input type="button" value="Multiply" (click)="model.multiply()">
		<input type="button" value="Divide" (click)="model.divide()">
		<calculator-result [data]="model.result"></calculator-result>
	`
})
export class CalculatorOneComponent{
	model : CalculatorModel;
	
	constructor(){
		this.model = new CalculatorModel();
	}
}