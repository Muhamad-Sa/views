import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { VisionComponent } from './components/vision/vision.component';
import { MissionComponent } from './components/mission/mission.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisionSectionComponent } from './vision-section/vision-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    VisionComponent,
    MissionComponent,
    TeamComponent,
    HomeComponent,
    VideoSectionComponent,
    NavMenuComponent,
    AboutUsComponent,
    PortfolioComponent,
    ContactUsComponent,
    FooterComponent,
    VisionSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
