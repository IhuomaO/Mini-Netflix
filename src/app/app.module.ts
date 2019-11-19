import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MoviesThumbnailComponent } from './movies/movies-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'movies-list', component: MoviesListComponent },
      { path: 'movies-thumbnail', component: MoviesThumbnailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
