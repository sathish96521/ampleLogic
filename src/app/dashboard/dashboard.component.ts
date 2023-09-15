import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PopupService } from '../popup.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Output() openPopupEvent = new EventEmitter<any>();
  dataToPass: any;

  openPopup(): void {
    this.dataToPass = { /* Your data here */ };
    this.openPopupEvent.emit(this.dataToPass);
  }
}