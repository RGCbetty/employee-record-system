import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'employee-record-system';
  type: string = '';
  employeInformation: any = {};

  openModal(): void {
    this.type = 'add';
  }

  editModal(): void {
    this.type = 'edit';
    this.employeInformation = {
      email: 'adrian.calma@yahoo.com',
    };
  }
}
