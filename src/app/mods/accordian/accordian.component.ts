import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  @Input() accordiansData = [];
  activeIndex = 0;
  onActive(index: number) {
    this.activeIndex = index;
    console.log(index);
  }
  constructor() {}

  ngOnInit(): void {}
}
