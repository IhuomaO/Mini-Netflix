import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list' ,
  template: `
  <div>
  <h1>Upcoming Movie Premiers</h1>
  </div>
  <hr>

  <div class="card" style="width: 18rem;">
  <img src="/assets/images/star-wars.png" class="card-img-top" alt="advert">
  <div class="card-body">
    <h2 class="card-title"> {{movie.name}} </h2>
    <h3 class="card-text"> {{movie.productionYear}} </h3>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
})
export class MoviesListComponent {
   movie = {
     id: 1,
     name: 'Star Wars',
     imageUrl: '/assets/images/star-wars.png' ,
     productionYear: 2018
   };
}
