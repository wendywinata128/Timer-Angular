import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isStarted = false;
  isPaused = false;

  hours = '00';
  minute = '00';
  second = '00';
  milisecond = '00';

  // Set Progress
  @ViewChild('progress')
  progressCircular: any;

  constructor(private testService: TestService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  onStartClicked() {
    this.isPaused = false;

    if (!this.isStarted) {
      this.hours = this.minute = this.second = this.milisecond = '00';
    }

    //start or stop the stopwatch
    this.isStarted = !this.isStarted;

    if (this.isStarted) {
      this.startStopwatch(false);
    }
  }

  onPauseClicked() {
    this.isPaused = !this.isPaused;

    if (!this.isPaused) this.startStopwatch(true);
  }

  startStopwatch(isResume: boolean) {
    //  Increase Milisecond
    const PLUS = 1000 / 100;

    // Increase Progress
    let MAX_PROGRESS = 1070;
    const PLUS_PROGRESS = MAX_PROGRESS / 6000;

    //  Get ProgressCircular
    const circular = this.progressCircular.nativeElement;

    let count = isResume
      ? parseInt(getComputedStyle(circular).strokeDashoffset)
      : MAX_PROGRESS;

    console.log(!this.isStarted || this.isPaused);

    let interval = setInterval(() => {
      if (!this.isStarted || this.isPaused) {
        clearInterval(interval);
        return;
      }

      this.milisecond = ('' + (+this.milisecond + 1)).padStart(2, '0');
      count -= PLUS_PROGRESS;
      circular.style.strokeDashoffset = count;

      if (this.milisecond === '100') {
        this.milisecond = '00';

        this.second = ('' + (+this.second + 1)).padStart(2, '0');

        if (this.second === '60') {
          this.second = '00';
          this.minute = ('' + (+this.minute + 1)).padStart(2, '0');
        }
      }
    }, PLUS);
  }
}
