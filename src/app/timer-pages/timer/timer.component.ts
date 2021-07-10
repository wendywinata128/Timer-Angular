import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  [key: string]: any;
  m1 = '';
  m2 = '';
  s1 = '';
  s2 = '';

  isStarted = false;

  constructor() {}

  ngOnInit(): void {}

  onKeyEvent(e: any, input: any) {
    if (!isNaN(+e.key)) {
      // console.log(isNaN(typeof +e.key));
      this[input] = this[input][this[input].length];
    } else {
      setTimeout(() => (this[input] = this[input][0]), 10);
    }
  }

  startTimer() {
    this.isStarted = !this.isStarted;

    if (this.isStarted) {
      //  Total Timer in Second
      const second = (+(this.m1 + this.m2) * 60 + +(this.s1 + this.s2)) * 1000;

      //  Increase Timing in MS
      const PLUS = 10;

      let MAX = 1070;

      // Second / PLUS -> Pertambahan putaran per ms
      const PLUS_PROGRESS = MAX / (second / PLUS);

      let MAX_ROTATE = 0;
      // Pertambahan rotate fire per PLUS(10) ms;
      const ROTATE_PLUS = 360 / (second / PLUS);

      const circle: any = document.querySelector('.progress');
      const fire: any = document.querySelector('.fire');

      if (circle != null) {
        let interval = setInterval(() => {
          if (MAX <= 0 || !this.isStarted) {
            clearInterval(interval);
            return;
          }

          circle.style.strokeDashoffset = MAX;
          fire.style.transform = `translateX(-50%) rotate(${MAX_ROTATE}deg)`;

          MAX -= PLUS_PROGRESS;
          MAX_ROTATE += ROTATE_PLUS;
        }, PLUS);
      }
    }
  }
}
