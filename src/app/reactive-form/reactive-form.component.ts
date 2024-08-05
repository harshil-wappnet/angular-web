import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonPipe } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  ngOnInit(): void {}
}
