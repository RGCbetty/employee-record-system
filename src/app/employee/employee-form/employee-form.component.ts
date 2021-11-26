import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../employee';
import { v4 as uuidv4 } from 'uuid';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit, AfterContentChecked {
  @Input() type: string = '';
  @Input() employee: IEmployee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    salary: '',
  };
  @Input() setValueOnce: boolean = false;
  @Output() onSetValueOnce: EventEmitter<boolean> = new EventEmitter();

  employeInformationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.employeInformationForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  ngAfterContentChecked(): void {
    if (this.setValueOnce) {
      setTimeout(() => {
        this.onSetValueOnce.emit(false);
      }, 100);
      if (this.type === 'add') this.employeInformationForm.reset();
      if (this.type === 'edit')
        this.employeInformationForm.setValue(this.employee);
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.employeInformationForm.invalid) {
      if (this.type === 'add') {
        this.apiService
          .postEmployee(this.employeInformationForm.value)
          .subscribe({
            next: (response) => {
              console.log(response);
            },
            error: (err) => console.error(err),
          });
      }
      if (this.type === 'edit') {
        this.apiService
          .updateEmployee(this.employeInformationForm.value)
          .subscribe({
            next: (response) => {
              console.log(response);
            },
            error: (err) => console.error(err),
          });
      }
    }
  }

  onDelete(id: string): void {
    this.apiService.deleteEmployee(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => console.error(err),
    });
  }

  onClose(): void {
    this.employeInformationForm.reset();
    this.onSetValueOnce.emit(false);
  }

  get firstName() {
    return this.employeInformationForm.get('firstName');
  }

  get lastName() {
    return this.employeInformationForm.get('lastName');
  }

  get email() {
    return this.employeInformationForm.get('email');
  }

  get contactNumber() {
    return this.employeInformationForm.get('contactNumber');
  }

  get salary() {
    return this.employeInformationForm.get('salary');
  }
}
