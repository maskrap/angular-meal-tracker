import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <li>
        {{ meal.name }}
      </li>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
