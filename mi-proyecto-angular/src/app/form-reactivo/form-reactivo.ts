import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common'

@Component({
  selector: 'app-form-reactivo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reactivo.html',
  styleUrl: './form-reactivo.css',
})
export class FormReactivo implements OnInit {
miForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.miForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  onSubmit() {
    console.log('Data:', this.miForm.value);
  }
}
