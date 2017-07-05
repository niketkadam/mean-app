import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  template:`
<app-nav [height]=height [navHeight]=navHeight (navEmitter)=handle($event)></app-nav>
<section class="slider" id="home">
    <div class="container-fluid">
        <div class="row" >
            <div id="myCarousel" class="carousel slide" data-ride="carousel" [style.marginTop.px]="navHeight" >
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="assets/image/doctors15.jpg"  alt="" [style.height.px]="height">
                         <div class="carousel-caption"  style="color:black">
                            <h2>Doctors</h2>
                            <p>Always to help you</p>
                        </div>
                    </div>

                    <div class="item">
                       <img src="assets/image/doctor4.jpg" alt="" [style.height.px]="height">
                    </div>

                    <div class="item">
                       <img src="assets/image/doctor2.jpg"  alt="" [style.height.px]="height">
                    </div>
                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                 <span class="glyphicon glyphicon-chevron-left"></span>
                 <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</section>

  `,
  styleUrls: ['../app.css']
})
export class HomeComponent implements OnInit {
//   width: number = 0;
   height: number = 0;
   navHeight: number = 0;
//  @ViewChild("nav") nav: ElementRef

  ngOnInit() {
    
   }
   handle(event){
   console.log(event)
    this.navHeight =event;
    this.height = screen.height - this.navHeight;
}
}


