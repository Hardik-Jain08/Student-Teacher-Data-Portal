import { Component, Inject, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  @Input() message : string = 'User deleted Successfully!';
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
      data: { message: message }
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
  <span class="example-pizza-party">
    Successfully {{data.message}}! ✅
  </span>
  `,
  styles: [
    `
    .example-pizza-party {
      color: green;
    }
  `,
  ],
})
export class PizzaPartyComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
