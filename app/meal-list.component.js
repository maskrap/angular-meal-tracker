System.register(['angular2/core', './meal.component', './meal.model', './edit-meal-details.component', './new-meal.component', './completeness.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_component_1, meal_model_1, edit_meal_details_component_1, new_meal_component_1, completeness_pipe_1;
    var mealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (completeness_pipe_1_1) {
                completeness_pipe_1 = completeness_pipe_1_1;
            }],
        execute: function() {
            mealListComponent = (function () {
                function mealListComponent() {
                    this.selectedCompleteness = "notDone";
                    this.onMealSelect = new core_1.EventEmitter();
                }
                mealListComponent.prototype.mealClicked = function (clickedMeal) {
                    console.log('meal', clickedMeal);
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                mealListComponent.prototype.createMeal = function (name, details, calories) {
                    this.mealList.push(new meal_model_1.Meal(name, details, calories, this.mealList.length));
                };
                mealListComponent.prototype.onChange = function (optionFromMenu) {
                    this.selectedCompleteness = optionFromMenu;
                    console.log(this.selectedCompleteness);
                };
                mealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        outputs: ['onMealSelect'],
                        directives: [meal_component_1.MealComponent, edit_meal_details_component_1.EditMealDetailsComponent, new_meal_component_1.NewMealComponent],
                        pipes: [completeness_pipe_1.CompletenessPipe],
                        template: "\n    <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n      <option value=\"all\">Show All</option>\n      <option value=\"isDone\">Show Done</option>\n      <option value=\"notDone\" selected=\"selected\">Show Not Done</option>\n    </select>\n\n    <meal-display *ngFor=\"#currentMeal of mealList | completeness:selectedCompleteness\"\n      (click)=\"mealClicked(currentMeal)\"\n      [class.selected]=\"currentMeal === selectedMeal\"\n      [meal]=\"currentMeal\">\n    </meal-display>\n  <edit-meal-details *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\"></edit-meal-details>\n  <br>\n  <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], mealListComponent);
                return mealListComponent;
            }());
            exports_1("mealListComponent", mealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map