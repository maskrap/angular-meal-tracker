import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CompletenessPipe } from './completeness.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [CompletenessPipe],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>

    <meal-display *ngFor="#currentMeal of mealList | completeness:selectedCompleteness"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <br>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class mealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCompleteness: string ="notDone";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    console.log('meal', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(name: string, detail: string, calorie: number): void {
    this.mealList.push(
      new Meal(name, detail, calorie)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
}
