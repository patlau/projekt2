import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public confirmDelete(name: string): Observable<boolean> {
    return this.confirm('Confirm', 'Delete "' + name + '"?');
  }

  public confirmDiscardChanges(): Observable<boolean> {
    return this.confirm('Confirm', 'Discard changes?');
  }
}
