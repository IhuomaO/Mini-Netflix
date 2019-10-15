import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list' ,
  template: `
  <div class='row'>
      <div *ngFor="let movie of movies" class='col-md-4'>
        <app-movies-thumbnail  [movies]="movie"></app-movies-thumbnail>
      </div>
  </div>

  `
})
export class MoviesListComponent {
   movies = [
     {
     id: 1,
     title: 'Star Wars',
     imageUrl: '/assets/images/star-wars.png' ,
     productionYear: 2018
   },
   {
    id: 2,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 3,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 4,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 5,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 6,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 7,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 8,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },
  {
    id: 9,
    title: 'Star Wars',
    imageUrl: '/assets/images/star-wars.png' ,
    productionYear: 2018
  },

  ];
}
