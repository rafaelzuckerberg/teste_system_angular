import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getForm();
  }


  getForm() {
    this.form = this.fb.group({
      email: ['', Validators.required]
    })
  }


  reset() {
    console.log(this.form.value.email);
  }

}
