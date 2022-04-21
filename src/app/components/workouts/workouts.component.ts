import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { WorkoutsService } from 'src/app/service/workouts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
  workouts: ICard[];

  constructor(
    private workoutsServices: WorkoutsService,
    private router: Router
  ) {}

  getWorkouts(): void {
    this.workoutsServices.getWorkouts().subscribe(
      (data) => {
        this.workouts = data.slice(0, 26);
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openWorkoutDetail(id: any): void {
    this.router.navigate(['workoutDetails', id]);
  }

  ngOnInit(): void {
    this.getWorkouts();
  }
}
