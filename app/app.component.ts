import { Component } from 'angular2/core';
import { mealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [mealListComponent],
  template: `
    <div class="container">
      <h1>Track My Meal, Baby!</h1>
      <meal-list [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Wild Alaskan Sea Venison", "exquisite, so local, so moist", 500),
      new Meal("Chicago-style Crabdogs", "perfect for a cubbies game", 600),
      new Meal("Los Angeles-style steak", "it's quinoa", 100)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
