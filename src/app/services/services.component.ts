import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-ser',
    template: `
    <app-nav [height]=height [navHeight]=navHeight (navEmitter)=handle($event)></app-nav>
    <section class="service text-center" id="service">
		<div class="container">
			<div class="row" [style.marginTop.px]="navHeight">
				<div class="col-md-3 col-sm-6">
							<div class="about-img">
								<img class="img-responsive" src="assets/image/childdoc.jpg" alt="">
							</div>
						<h3>Heart problem</h3>
				</div>
				<div class="col-md-3 col-sm-6">
							<div class="about-img">
								<img class="img-responsive" src="assets/image/childdoc.jpg" alt="">
							</div>
						<h3>brain problem</h3>
				</div>
				<div class="col-md-3 col-sm-6">
							<div class="about-img">
								<img class="img-responsive" src="assets/image/childdoc.jpg" alt="">
						</div>
						<h3>knee problem</h3>
				</div>
				<div class="col-md-3 col-sm-6">
							<div class="about-img">
								<img class="img-responsive" src="assets/image/childdoc.jpg" alt="">
							</div>
						<h3>human bones problem</h3>
				</div>
			</div>
		</div>
	</section>
  `,
    styleUrls: ['../app.css']
})
export class ServiceComponent implements OnInit {

    height: number = 0;
    navHeight: number = 0;
    ngOnInit() {

    }
    handle(event) {
        console.log(event)
        this.navHeight = event;
		console.log(this.navHeight);
        this.height = screen.height - this.navHeight;
    }

}


