import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { WorkoutsService } from 'src/app/service/workouts.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.scss'],
})
export class WorkoutDetailsComponent implements OnInit {
  workoutDetail: ICard[];
  constructor(private workoutDetailService: WorkoutsService) {}

  getWorkoutDetail(): void {
    this.workoutDetailService.getWorkouts().subscribe(
      (data) => {
        this.workoutDetail = data.slice(0, 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getWorkoutDetail();
  }
}
