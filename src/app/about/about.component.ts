import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  template:`
 <app-nav [height]=height [navHeight]=navHeight (navEmitter)=handle($event)></app-nav>
	<section class="about text-center" id="about">
		<div class="container">
			<div class="row"  [style.marginTop.px]="navHeight">
				<h2>About us</h2>
				<h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h4>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail clearfix">
						<div class="about-img">
							<img class="img-responsive" src="assets/image/childdoc.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<h1>C</h1>
							</div>
							<h3>Child’s specialist</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail">
						<div class="about-img">
							<img class="img-responsive" src="assets/image/emer.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<h1>W</h1>
							</div>
							<h3>Surgeon</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail">
						<div class="about-img">
							<img class="img-responsive" src="assets/image/emer.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<h1>M</h1>
							</div>
							<h3>Emergency</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  
  `,
  styleUrls: ['../app.css']
})
export class AboutComponent implements OnInit {
  height: number = 0;
   navHeight: number = 0;

  ngOnInit() {
  
  }
   handle(event){
   console.log(event)
    this.navHeight =event;
    // this.height = screen.height - this.navHeight;
}
}


