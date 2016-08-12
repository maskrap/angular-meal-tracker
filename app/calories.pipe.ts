import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class caloriesPipe implements PipeTransform {
  transform(input: Meal[], args){
    if(args[0] === "highCal" ) {
      return input.filter((meal) => {
        return meal.calorie >= 500;
      });
    } else if (args[0] === "lowCal" )  {
      return input.filter((meal) => {
        return meal.calorie <= 500;
      });
    } else {
      return input;
    }
  }
}
