import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <input *ngIf="meal.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
      <input *ngIf="meal.done === false" type="checkbox" (click)="toggleDone(true)"/>
      <label>{{ meal.description }}</label>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
  toggleDone(setCompleteness: boolean){
    this.meal.done = setCompleteness;
  }
}
