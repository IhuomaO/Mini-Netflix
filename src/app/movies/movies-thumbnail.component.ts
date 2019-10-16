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
          <div class="">
            <h5 class=""> {{ movies.title }} </h5>
            <p class=""> {{ movies.productionYear }} </p>
          </div>
          <a href="#collapseExample" data-toggle="collapse"><small class="text-muted">Additional Details</small></a>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
            <p><small class="text-muted"> Rated: {{ movies.rated }} </small></p>
            <p><small class="text-muted"> Runtime: {{ movies.runtime }} mins </small></p>
            <p><small class="text-muted"> Genre: {{ movies.genre }} </small></p>
            <p><small class="text-muted"> Director: {{ movies.director }} </small></p>
            <p><small class="text-muted"> Actors: {{ movies.actors }} </small></p>
            <p><small class="text-muted"> Plot: {{ movies.plot }} </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
   `
})

export class MoviesThumbnailComponent {
    @Input() movies: any;
}
