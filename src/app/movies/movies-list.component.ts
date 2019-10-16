import { Component } from '@angular/core';
import { Imovie } from './movies';

@Component({
  selector: 'app-movies-list' ,
  template: `
  <div class='row'>
      <div class='container'>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" name="search" placeholder="Search" aria-label="Search" [(ngModel)]='listFilter'>
        </form>
      </div>
      <div *ngFor="let movie of filteredMovies" class='col-md-4'>
        <app-movies-thumbnail  [movies]="movie"></app-movies-thumbnail>
      </div>
  </div>

  `
})
export class MoviesListComponent {
   // tslint:disable-next-line: variable-name
   _listFilter: string;
   get listFilter(): string {
     return this._listFilter;
   }
   set listFilter(value: string) {
     this._listFilter = value;
     this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
   }

   filteredMovies: Imovie[];
   movies: Imovie[] = [
     {
     id: 1,
     title: 'A Star is born',
     imageUrl: '/assets/images/Star.jpg' ,
     productionYear: 2018
   },
   {
    id: 2,
    title: 'Aquaman',
    imageUrl: '/assets/images/Aquaman.jpg' ,
    productionYear: 2019
  },
  {
    id: 3,
    title: 'Baby Boy  2',
    imageUrl: '/assets/images/Baby.png' ,
    productionYear: 2010
  },
  {
    id: 4,
    title: 'Crazy Rich Asians',
    imageUrl: '/assets/images/Asians.jpg' ,
    productionYear: 2019
  },
  {
    id: 5,
    title: 'Beauty & The Beast',
    imageUrl: '/assets/images/Beast.jpg' ,
    productionYear: 2018
  },
  {
    id: 6,
    title: 'Creed II',
    imageUrl: '/assets/images/Creed.jpg' ,
    productionYear: 2017
  },
  {
    id: 7,
    title: 'Deepwater Horizons',
    imageUrl: '/assets/images/DeepWater.jpg' ,
    productionYear: 2018
  },
  {
    id: 8,
    title: 'GodFather',
    imageUrl: '/assets/images/Godfather.jpg' ,
    productionYear: 2006
  },
  {
    id: 9,
    title: 'Home Alone',
    imageUrl: '/assets/images/Home.jpg' ,
    productionYear: 2018
  },
  {
    id: 10,
    title: 'John Wick 3',
    imageUrl: '/assets/images/Wick.jpg' ,
    productionYear: 2019
  },
  {
    id: 11,
    title: 'Maleficent',
    imageUrl: '/assets/images/Maleficent.jpg' ,
    productionYear: 2015
  },
  {
    id: 12,
    title: 'Long Walk To Freedom',
    imageUrl: '/assets/images/Mandela.jpg' ,
    productionYear: 2013
  },
  {
    id: 13,
    title: 'The Hangover',
    imageUrl: '/assets/images/Hangover.jpg' ,
    productionYear: 2009
  },
  {
    id: 14,
    title: 'The Lord of the Rings',
    imageUrl: '/assets/images/Rings.jpg' ,
    productionYear: 2013
  },
  {
    id: 15,
    title: 'Wonder Woman',
    imageUrl: '/assets/images/Wonder.jpg' ,
    productionYear: 2017
  },

  ];

  constructor() {
      this.filteredMovies = this.movies;
      this.listFilter = '';
  }

  performFilter(filterBy: string): Imovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: Imovie) =>
           movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
