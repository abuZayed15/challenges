import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TweetwComponent } from './tweetw/tweetw.component';
import { TopbodyComponent } from './topbody/topbody.component';
import { MiddlebodyComponent } from './middlebody/middlebody.component';
import { BottombodyComponent } from './bottombody/bottombody.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TweetwComponent,
    TopbodyComponent,
    MiddlebodyComponent,
    BottombodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
