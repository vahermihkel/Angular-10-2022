import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;
  employees: any[] = [];

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res.data;
    });
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      avatar: ['', [Validators.required]],
    });
  }

  addEmployee(): void {
    // TODO: Add an employee to the table
    const newEmployee: any = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      avatar: this.form.get('avatar').value
    };
    this.employees.push(newEmployee);
    this.initForm();
  }

  deleteEmployee(employee: any): void {
    // TODO: Delete an employee from the table
    const index = this.employees.indexOf(employee);
    this.employees.splice(index,1);
  }
}
