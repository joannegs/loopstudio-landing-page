import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageHomeComponent } from './landing-page-home/landing-page-home.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CreationsPageComponent } from './creations-page/creations-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageHomeComponent,
    HistoryPageComponent,
    CreationsPageComponent,
    FooterPageComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
