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
  @Input() visible: boolean = false;
  setValueOnce: boolean = false;

  employeInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeInformationForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  ngAfterContentChecked(): void {
    if (this.type === 'add') this.employeInformation = {};
    if (this.type === 'edit' && !this.setValueOnce) {
      this.setValueOnce = true;
      this.employeInformationForm.patchValue(this.employeInformation);
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.employeInformationForm.value);
  }
}
