import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit, AfterContentChecked {
  @Input() type: string = '';
  @Input() employeInformation: any = {};
  employeInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeInformationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  ngAfterContentChecked(): void {
    if (this.type === 'add') this.employeInformation = {};
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.employeInformationForm.invalid) {
      console.log(this.employeInformationForm);
    }
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
