import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
// tslint:disable-next-line: member-ordering
  goals = [
    new Goal(1, 'Watch finding Nemo', 'I think he\'s lost', new Date(2028, 31, 9)),
    new Goal(2, 'Buy cookies', 'I\'m Hungry', new Date(2019, 9, 11)),
    new Goal(3, 'Finish homework', 'Tommorrow', new Date(2070, 6, 30)),
    new Goal(3, 'Plan world domination', 'Baba ya Thanos amerudi', new Date(2038, 7, 28)),
  ];

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  toggleDetails(index: string | number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete: any, index: number) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }
}
