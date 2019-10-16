import { Component, Input } from '@angular/core';

@Component ({
   selector: 'app-movies-thumbnail',
   template: `
   <div class="card mb-3" style="max-width: 350px, max-height:200px,  min-height: 200px;">
      <div class="row no-gutters">
        <div class="col-md-4 justify-content-center">
          <img src="{{movies.imageUrl}} " class="card-img"  style="min-height: 100px;" alt="...">
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
