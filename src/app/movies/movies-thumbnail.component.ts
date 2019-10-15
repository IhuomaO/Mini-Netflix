import { Component, Input } from '@angular/core';

@Component ({
   selector: 'app-movies-thumbnail',
   template: `
   <div class="card mb-3" style="max-width: 350px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="..." class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ movies.title }} </h5>
            <p class="card-text"> {{ movies.productionYear }} </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
   `
})

export class MoviesThumbnailComponent {
    @Input() movies: any;
}
