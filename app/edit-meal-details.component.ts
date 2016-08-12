import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="container">
  <h3>Edit Details: </h3>
  <input [(ngModel)]="meal.name" class="col-sm-8 input-lg"/>
  <input [(ngModel)]="meal.detail" class="col-sm-8 input-lg"/>
  <input [(ngModel)]="meal.calorie" class="col-sm-8 input-lg" type="number"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
