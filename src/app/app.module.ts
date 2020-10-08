import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './body/intro/intro.component';
import { ReceiptComponent } from './body/receipt/receipt.component';
import { ReceiptHeadingComponent } from './body/receipt/receipt-heading/receipt-heading.component';
import { TechnologiesComponent } from './body/receipt/technologies/technologies.component';
import { ProjectsComponent } from './body/receipt/projects/projects.component';
import { CostComponent } from './body/receipt/cost/cost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    BodyComponent,
    FooterComponent,
    IntroComponent,
    ReceiptComponent,
    ReceiptHeadingComponent,
    TechnologiesComponent,
    ProjectsComponent,
    CostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
