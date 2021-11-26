import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IEmployee } from '../employee';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employees: IEmployee[] = [];
  employee!: IEmployee;
  type: string = '';
  search: string = '';
  setValueOnce: boolean = false;

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  getEmployee(): void {
    this.apiService.getEmployee().subscribe({
      next: (response) => {
        this.employees = response;
      },
      error: (err) => {
        this.toastr.error(err, 'Error');
      },
    });
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  onEmployee(): void {
    this.getEmployee();
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

  onSearch(): void {
    if (!this.search) {
      this.getEmployee();
    } else {
      this.employees = this.employees.filter(
        (employee) =>
          employee.firstName.toLocaleLowerCase().includes(this.search) ||
          employee.lastName.toLocaleLowerCase().includes(this.search) ||
          employee.email.toLocaleLowerCase().includes(this.search)
      );
    }
  }
}
