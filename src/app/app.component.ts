import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { IphoneComponent } from './components/iphone/iphone.component';
import { CarsComponent } from './components/cars/cars.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { MentorshipComponent } from './components/mentorship/mentorship.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    IphoneComponent,
    CarsComponent,
    ApartmentsComponent,
    MentorshipComponent,
    ContactComponent,
    ScrollToTopComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}