import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.addUserForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }
  ngOnInit(): void {
  }
  
  onSubmit(form: FormGroup) {
    console.log(form.value);
    let data = {
      firstName: form.value.name.split(' ')[0],
      lastName: form.value.name.split(' ')[1] || "string",
      service: 'string',
      email: form.value.email,
      password: form.value.password
    };
    console.log(data);
    this.http.post(""data).subscribe({
      next: (res: any) => {
        console.log(res);
        window.location.href = '/';
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

}


