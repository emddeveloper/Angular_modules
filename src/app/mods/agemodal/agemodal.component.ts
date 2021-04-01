import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-agemodal',
  templateUrl: './agemodal.component.html',
  styleUrls: ['./agemodal.component.css'],
})
export class AgemodalComponent implements OnInit {
  constructor(private el: ElementRef) {}
  @Output() closeAgeModal = new EventEmitter();
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
  onAgeModalClose() {
    this.closeAgeModal.emit();
  }
}
