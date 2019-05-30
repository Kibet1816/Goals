import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
      new Goal(1, 'Watch finding Nemo' , 'I think he\'s lost', new Date(2028, 31, 9)),
      new Goal(2, 'Buy cookies', 'I\'m Hungry', new Date(2019, 9, 11) ),
      new Goal(3, 'Finish homework', 'Tommorrow', new Date(2070, 6, 30)),
      new Goal(4, 'Plan world domination', 'Baba ya Thanos amerudi', new Date(2038, 7, 28)),
    ];
}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//     goals: string[];

//   constructor(){

//     this.goals = ["Watch Finding Nemo","Buy Cookies","Get new phone case"];
//   }
// }
