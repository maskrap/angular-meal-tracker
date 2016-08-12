import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class caloriesPipe implements PipeTransform {
  transform(input: Meal[], info){
    if(info[0] === "high calories!" ) {
      return input.filter((meal) => {
        return meal.calorie >= 500;
      });
    } else if (info[0] === "low calories!" )  {
      return input.filter((meal) => {
        return meal.calorie <= 500;
      });
    } else {
      return input;
    }
  }
}
