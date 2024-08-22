import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService, private Router: Router) {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form.value);
    const data = {
      name: form.value.name,
      email: form.value.email,
      address: form.value.address,
      role: form.value.role,
    };
    console.log(data);
    this.http.postApiCall("", data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.Router.navigate(['/dashboard']);
        },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
}
