import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  // constructor(private dialog: MatDialog) { }

  // openPopup(): void {
  //   this.dialog.open(PopupComponent, {
  //     panelClass: 'bottom-dialog'
  //   });
  // }

  private popupData: any;

  setPopupData(data: any): void {
    this.popupData = data;
  }

  getPopupData(): any {
    return this.popupData;
  }
}
