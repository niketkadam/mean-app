import { Component } from '@angular/core';
 import { User } from 'user';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../app.service';

@Component({
    selector: 'app-root',
    template: `
  <form #signupForm="ngForm" (ngSubmit)="onSubmit()">
     <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" id="password" required [(ngModel)]="email" name="email">
    </div>
    <div class="form-group">
        <label for="name">Password</label>
        <input type="text" class="form-control" id="password" required [(ngModel)]="password" name="password">
    </div>
    <button type="submit">Login</button>
    <span ><button type="button" (click)="onClick()">SignUp</button></span>

</form>
  
  `,

})
export class LoginComponent {
    email:string='';
    password:string='';
    constructor(private router: Router, private app: DataService) {
    }

    onSubmit(){
        this.app.getLogin(this.email,this.password).subscribe(
            (response) => { console.log(response) }
        )

    }

    onClick(){
        this.router.navigate(['/signup']);
    }

}
