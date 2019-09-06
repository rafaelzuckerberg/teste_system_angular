import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private router: Router, 
        private fb: FormBuilder, 
        private _snackBar: MatSnackBar,
        private auth: AuthenticationService) {}

    ngOnInit() {
        this.getForm(); 
    }

    getForm() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }


    login() { 
        this.auth.authentication(this.form.value)
            .then((res) => { 
                if(res['success']) {
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                }
            }, err => { 
                if(err) {
                    this.openSnackBar('Email ou senha incorreto, tente novamente');
                }
            }); 
    }


    openSnackBar(message: string) {
        this._snackBar.open(message, 'Fechar', {
            duration: 2000,
        });
    }

}
