import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MoviesThumbnailComponent } from './movies/movies-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
