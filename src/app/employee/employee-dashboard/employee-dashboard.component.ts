import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employees: IEmployee[] = [];
  employee!: IEmployee;
  type: string = '';
  setValueOnce: boolean = false;

  ngOnInit(): void {
    this.employees = [
      {
        id: '1',
        firstName: 'adrian',
        lastName: 'calma',
        email: 'adrian.calma@yahoo.com',
        contactNumber: '1111111',
        salary: '111',
      },
      {
        id: '2',
        firstName: 'adrian2',
        lastName: 'calma2',
        email: 'adrian.calma@yahoo.com2',
        contactNumber: '11111112',
        salary: '1112',
      },
    ];
  }

  openModal(type: string, employee?: any): void {
    this.type = type;
    this.setValueOnce = true;
    if (type !== 'add') {
      this.employee = employee;
    }
  }

  onSetValueOnce(event: boolean): void {
    this.setValueOnce = event;
  }
}
