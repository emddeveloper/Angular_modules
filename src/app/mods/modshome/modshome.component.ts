import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css'],
})
export class ModshomeComponent implements OnInit {
  openModal = false;
  ageModalOpen = false;
  modalToggle() {
    this.openModal = !this.openModal;
  }
  agemodalToggle() {
    this.ageModalOpen = !this.ageModalOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}
