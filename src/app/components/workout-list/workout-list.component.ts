import { Component, OnInit } from '@angular/core';
import { IWorkoutList } from 'src/app/interfaces/workout-list';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  workouts: IWorkoutList[];
  inputWorkout: string="";

  constructor() { }

  ngOnInit(): void {
    this.workouts=[
      {
        content: "Warm up: 5 Min Run",
        completed: false
      },
      {
        content: "Warm up: 5 Min Rope Jump",
        completed: false
      },
    ]
  }

  toggleDone(id: number): void {
    this.workouts.map((v, i) =>{
      if(i == id) 
        v.completed = !v.completed;
        return v;
      
    })
  }

  deleteWorkout (id: number):void {
    this.workouts =this.workouts.filter((v,i)=> i !== id);
  }

  addWorkout(): void {
    this.workouts
    .push(
      {
        content: this.inputWorkout,
        completed: false
      }
    )
    this.inputWorkout ="";
  }

}
