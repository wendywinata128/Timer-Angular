import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  name: String = '';

  @Output()
  onBtnClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  onButtonClicked(event: any){
    this.onBtnClicked.emit();

    let circle = document.createElement("div");
    circle.classList.add("circle-anim");

    //  get x and y of clicked event (where person clicked)
    circle.style.left = event.offsetX + 'px';
    circle.style.top = event.offsetY + 'px';

    //  get target element
    let button: Element = event.target;

    button.appendChild(circle);

    //  remove circle button
    setTimeout(()=>
      button.removeChild(circle),1000
    )

  }

}
