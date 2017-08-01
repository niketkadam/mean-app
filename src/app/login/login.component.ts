import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService}from '../app.service';

@Component({
    selector: 'app-root',
    template: `
  <form #signupForm="ngForm" (ngSubmit)="onSubmit(signupForm.value)">
    <div class="form-group">
        <label for="name">UserName</label>
        <input type="text" class="form-control" id="username" required [(ngModel)]="model.username" name="username">
    </div>
    <div class="form-group">
        <label for="name">Password</label>
        <input type="text" class="form-control" id="password" required [(ngModel)]="model.password" name="password">
    </div>

    <button type="submit">Sign Up</button>
</form>
  
  `,
   
})
export class LoginComponent {
    model = new User(null, null);
    constructor(private router: Router,private app:DataService) {
        localStorage.clear();
    }

    onSubmit(signupForm) {
        var data= JSON.stringify({ username: this.model.username, password: this.model.password })
        localStorage.setItem('model',data)
       this.app.getData(data).subscribe(
           (response)=>{console.log(response)}
       )
        // this.router.navigate(['/home']);
    }

}
