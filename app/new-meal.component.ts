import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Detail" class="col-sm-8 input-lg" #newDetail>
    <input placeholder="Calorie" class="col-sm-8 input-lg" #newCalorie>
    <button (click)="addMeal(newName, newDetail, newCalorie)" class="btn-lg">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetail: HTMLInputElement, mealCalorie: HTMLInputElement){
    this.onSubmitNewMeal.emit(mealName.value);
    mealName.value = "";
    this.onSubmitNewMeal.emit(mealDetail.value);
    mealDetail.value = "";
    this.onSubmitNewMeal.emit(mealCalorie.value);
    mealCalorie.value = "";
  }
}
