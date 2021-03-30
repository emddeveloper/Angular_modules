import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  records = [
    {
      id: '1',
      firstName: 'Tom',
      lastName: 'Cruise',
    },
    {
      id: '2',
      firstName: 'Maria',
      lastName: 'Sharapova',
    },
    {
      id: '3',
      firstName: 'James',
      lastName: 'Bond',
    },
  ];
  headers = [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'firstName',
      label: 'First Name',
    },
    {
      key: 'lastName',
      label: 'Last Name',
    },
  ];
}
