import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-nav',
    template: `
  <header class="top-header" style="margin-top:-65px;">
    <div class="container">
        <div class="row" [style.marginTop.px]="navHeight">
            <div class="col-xs-5 header-logo">
                <a href="index.html"><img src="assets/image/logo.jpg" alt="" class="img"></a>
            </div>
            <div class="col-md-7">
                <nav #nav class="navbar navbar-default" style=" margin-top: 12px;margin-bottom: 0px;">
                    <div class="container-fluid nav-bar">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					        <span class="sr-only">Toggle navigation</span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					      </button>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a routerLink="/home">Home</a></li>
                                <li><a routerLink="/about">About</a></li>
                                 <li><a routerLink="/services">Services</a></li>
                                 <li><a routerLink="/about">About</a></li>
                                <li><a class="menu" href="#contact"> contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
  `,
    styleUrls: ['../app.css']
})
export class NavComponent implements OnInit {

    @Input("height") height: number = 0;
    @Input("navHeight") navHeight: number = 0;
    @ViewChild("nav") nav: ElementRef
    @Output() navEmitter = new EventEmitter();


    ngOnInit() {
        
        this.navHeight = this.nav.nativeElement.offsetHeight;
        this.height = screen.height - this.navHeight;
        this.navEmitter.emit(this.navHeight);
    }
}


