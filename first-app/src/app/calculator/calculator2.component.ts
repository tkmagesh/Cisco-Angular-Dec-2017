import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-two',
	template : `
		<h1>Calculator-2</h1>
		<hr>
		<input type="number" [(ngModel)]="model.n1">
		<select [(ngModel)]="operator" (change)="model[operator]()">
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="number" [(ngModel)]="model.n2">
		<input type="button" value="Calculate" (click)="model[operator]()">
		<calculator-result [data]="model.result"></calculator-result>
	`
})
export class CalculatorTwoComponent{
	model : CalculatorModel;
	
	operator : string;

	constructor(){
		this.model = new CalculatorModel();
	}

}