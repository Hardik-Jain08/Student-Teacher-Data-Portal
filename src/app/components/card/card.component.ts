import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userI } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails?: userI;
  @Output() delete = new EventEmitter<userI>();

  constructor(private http: HttpService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete();
      }
    });
  }

  onDelete(): void {
    this.delete.emit(this.cardDetails);
    
    this.http.deleteApiCall(this.cardDetails!.id!).subscribe({
      next: (res: any) => {
        console.log(res);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 5000,
          data: { message: 'User deleted Successfully!' }
        });
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
}
