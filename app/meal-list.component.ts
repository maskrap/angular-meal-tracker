import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { caloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [caloriesPipe],
  template: `
  <div class="container">
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all" selected="selected">Show All</option>
  <option value="lowCal">Low calorie</option>
  <option value="highCal">High calorie</option>
  </select>
  </div>
  <div class="container">
  <meal-display *ngFor="#currentMeal of mealList | calories:selectedCalories"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  </div>
  `
})

export class mealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string ="all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    console.log('meal', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(newMeal: string[]): void {
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseInt(newMeal[2]))
    );
  }

  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
}
