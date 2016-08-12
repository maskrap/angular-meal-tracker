import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['task'],
  template: `

  `
})

export class MealComponent {
  public meal: Meal;
  toggleDone(setCompleteness: boolean){
    this.meal.done = setCompleteness;
  }
}
