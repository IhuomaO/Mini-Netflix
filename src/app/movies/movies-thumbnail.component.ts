import { Component, Input } from '@angular/core';

@Component ({
   selector: 'app-movies-thumbnail',
   templateUrl: './movies-thumbnail.component.html'
})

export class MoviesThumbnailComponent {
    @Input() movies: any;
    public isCollapsed: true;
  }
