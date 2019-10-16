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
     productionYear: 2018,
     rated: +18,
     runtime: 115,
     genre: 'Musical',
     director: 'Steve Speilberg' ,
     actors: 'Van Histeroy, Estaban Suarez, Lady Gaga',
     plot: 'An acclaimed artist struggles with depresion and the presssures of stardom'
   },
   {
    id: 2,
    title: 'Aquaman',
    imageUrl: '/assets/images/Aquaman.jpg' ,
    productionYear: 2019,
    rated: +18,
    runtime: 120,
    genre: 'Anime & Comic' ,
    director: 'Green Smart',
    actors: 'Vin Diesel, Terry Cherie, Denise Gray',
    plot: 'An evil warlord from Atlantis threatens Earth and an unlikely hero shows up'
  },
  {
    id: 3,
    title: 'Baby Boy  2',
    imageUrl: '/assets/images/Baby.png' ,
    productionYear: 2010,
    rated: +18,
    runtime: 95,
    genre: 'Action',
    director: 'Tyler Perry',
    actors: 'Ludacris, Grace Bairns, Sheryl Brooks',
    plot: 'An ex-convict resists the lure of crime till his son is kidnapped'
  },
  {
    id: 4,
    title: 'Crazy Rich Asians',
    imageUrl: '/assets/images/Asians.jpg' ,
    productionYear: 2019,
    rated: +18,
    runtime: 115,
    genre: 'Romance',
    director: 'Chong Lee',
    actors: 'Yung Kwan, Chin Chong, Stan Lee',
    plot: 'Two lovebirds face the challenge of societal class pressure'
  },
  {
    id: 5,
    title: 'Beauty & The Beast',
    imageUrl: '/assets/images/Beast.jpg' ,
    productionYear: 2018,
    rated: +12,
    runtime: 85,
    genre: 'Animation',
    director: 'Charles Dickens',
    actors: 'Rihanna, Dan Guy, Steff Curry',
    plot: 'An ugly beast needs to find true love for his curse to be lifted'
  },
  {
    id: 6,
    title: 'Creed II',
    imageUrl: '/assets/images/Creed.jpg' ,
    productionYear: 2017,
    rated: +18,
    runtime: 125,
    genre: 'Action',
    director: 'Sylvester Stallone',
    actors: 'Sylvester Stallone, Derrick White, Rose Barkley',
    plot: 'A defeated boxing champion makes a last ditch effort to win his crown'
  },
  {
    id: 7,
    title: 'Deepwater Horizons',
    imageUrl: '/assets/images/DeepWater.jpg' ,
    productionYear: 2018,
    rated: +18,
    runtime: 105,
    genre: 'Thriller',
    director: 'Steve Speilberg',
    actors: 'Danny Welbeck, CR7, Messi',
    plot: 'A oil company cuts corners and a rig caught fire leading to fatalities'
  },
  {
    id: 8,
    title: 'GodFather',
    imageUrl: '/assets/images/Godfather.jpg' ,
    productionYear: 2006,
    rated: +18,
    runtime: 160,
    genre: 'Action',
    director: 'Mario Puzo',
    actors: 'AlPacino, DiVetto Lanzini, Adil Bradley',
    plot: 'A mob boss plots the survival and longevity of his family'
  },
  {
    id: 9,
    title: 'Home Alone',
    imageUrl: '/assets/images/Home.jpg' ,
    productionYear: 2018,
    rated: +12,
    runtime: 120,
    genre: 'Comedy',
    director: 'Dan Willer',
    actors: 'MacCauley Culkin, Adam Shiff, Stein Bin',
    plot: ' A kid gets left behind on a vacation and thwarts a robbery',
  },
  {
    id: 10,
    title: 'John Wick 3',
    imageUrl: '/assets/images/Wick.jpg' ,
    productionYear: 2019,
    rated: +18 ,
    runtime: 130 ,
    genre: 'Action',
    director: 'Mark Walhberg' ,
    actors: 'Steven Seagal, Donnie Yen, Mark Dacascos',
    plot: 'A former hitman takes a last contract before he retires but there are many twists in the process'
  },
  {
    id: 11,
    title: 'Maleficent',
    imageUrl: '/assets/images/Maleficent.jpg' ,
    productionYear: 2015,
    rated: +15,
    runtime: 105,
    genre: 'Animation',
    director: 'Cahill Tim',
    actors: 'Sussie Lou, Stan Grant, Moses Pepple',
    plot: 'A princess is under a spell by a witch until she is kissed by her lover'
  },
  {
    id: 12,
    title: 'Long Walk To Freedom',
    imageUrl: '/assets/images/Mandela.jpg' ,
    productionYear: 2013,
    rated: +18,
    runtime: 105,
    genre: 'Documentary',
    director: 'Masheela Mumbazi',
    actors: 'Idris Alba, Mo Abadu, Angela White',
    plot: 'A biopic about the travals of Mandela during the apartheid era'
  },
  {
    id: 13,
    title: 'The Hangover',
    imageUrl: '/assets/images/Hangover.jpg' ,
    productionYear: 2009,
    rated: +18,
    runtime: 130,
    genre: 'Comedy',
    director: 'Earl Thrombon',
    actors: 'Denis Sears, Appolus Chu, Brown Reid',
    plot: 'A bachelor eve party goes way way wrong'
  },
  {
    id: 14,
    title: 'The Lord of the Rings',
    imageUrl: '/assets/images/Rings.jpg' ,
    productionYear: 2013,
    rated: +18,
    runtime: 175,
    genre: 'Epic',
    director: 'Medelin Gomez',
    actors: 'Orlando Bloom, Pascal Peter',
    plot: 'An adventrous journey to the middle of earth to destroy the powers of a wizard'
  },
  {
    id: 15,
    title: 'Wonder Woman',
    imageUrl: '/assets/images/Wonder.jpg' ,
    productionYear: 2017,
    rated: +18,
    runtime: 105,
    genre: 'Action',
    director: 'Eva Mendez',
    actors: 'Meryl Streep, Jennifer Aniston, Brandon Lee',
    plot: 'The strory revolves around the growth of an amazon warrior'
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
