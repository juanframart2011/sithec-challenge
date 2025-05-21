import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PostListComponent } from './core/pages/blog/post-list/post-list.component';
import { PostCardComponent } from './core/pages/blog/post-card/post-card.component';
import { PostDetailComponent } from './core/pages/blog/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    PostCardComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
