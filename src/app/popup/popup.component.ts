import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('progressAnimation', [
      transition(':increment', [
        style({ width: '0%' }),
        animate('1s', style({ width: '{{ progressValue }}%' })),
      ]),
    ]),
  ],
})
export class PopupComponent implements OnInit {
  @Input() popupData: any;
  isPopupVisible:  boolean = true;


  progressValue: number = 0;
  isProgressActive: boolean = false;

  startProgress() {
    this.isProgressActive = true;
    this.progressValue = 100;
  }

  resetProgress() {
    this.isProgressActive = false;
    this.progressValue = 0;
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

  // openPopup() {
  //   this.showPopup = true;
  // }

  // closePopup() {
  //   this.showPopup = false;
  // }


  constructor(private sharedDataService: PopupService) {}

  ngOnInit(): void {
    // Get data from the service
    this.popupData = this.sharedDataService.getPopupData();
  }


  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
