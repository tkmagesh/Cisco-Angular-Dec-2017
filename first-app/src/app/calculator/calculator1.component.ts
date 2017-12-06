import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-one',
	template : `
		<h1>Calculator-1</h1>
		<hr>
		<input type="number" #txtNumber1>
		<input type="number" #txtNumber2>
		<input type="button" value="Add" (click)="onAddClick(txtNumber1.value, txtNumber2.value)">
		<input type="button" value="Subtract">
		<input type="button" value="Multiply">
		<input type="button" value="Divide">
		<div>{{result}}</div>
	`
})
export class CalculatorOneComponent{
	model : CalculatorModel;
	result : number = 0;
	constructor(){
		this.model = new CalculatorModel();
	}

	onAddClick(number1Value, number2Value){
		this.model.n1 = parseInt(number1Value);
		this.model.n2 = parseInt(number2Value);
		this.model.add();
		this.result = this.model.result;
	}
}