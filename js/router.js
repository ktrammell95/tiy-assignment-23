var Router = Backbone.Router.extend({

  routes: {
    "genre/:genre" : "loadGenre",
  },

  initialize: function() {
    this.genreView = new GenreView();
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    $("body").append(this.tracksView.el);
    $("aside").append(this.genreView.el);
  },

  loadGenre: function(genre) {
    this.tracks.loadGenre(genre);
  }

});
