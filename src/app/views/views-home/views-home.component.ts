import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 1055,
      label: 'Files Saved',
    },
    {
      value: 155,
      label: 'Files Downloaded',
    },
    {
      value: 65,
      label: 'Files Deleted',
    },
  ];
  items = [
    {
      image: 'assets/images/couch.jpeg',
      title: 'The Couch',
      desc: 'This is the best couch in a very lower price in Kolkta',
    },
    {
      image: 'assets/images/dresser.jpeg',
      title: 'The Dresser',
      desc: 'This is the best Dresser in a very lower price in Kolkta',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
