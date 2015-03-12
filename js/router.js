var Router = Backbone.Router.extend({

  routes: {
    "" : "showHome",
    "genre" : "showGenre",
    // "search"     : "showSearch",
    "genre/:genre" : "loadGenre",
  },

  initialize: function() {
    this.genreView = new GenreView();
    this.navView = new NavView();
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    $("body").append(this.tracksView.el);
    $("aside").append(this.genreView.el);
    $("header").append(this.navView.el);

  this.listenTo(this.genreView, "link:click", function(genre){
      this.loadGenre(genre);
      this.navigate("tracks/" + genre);
    });

  },

  loadGenre: function(genre) {
    this.tracks.loadGenre(genre);
  },

  showGenre: function() {
    // console.log("show Products");
   if (!this.genreView) {
      this.genreView = new GenreView().render();
    }
      this.$main.html(this.genreView.el);
  },

  // showSearch: function(){
  //   if (!this.searchView) {
  //     this.searchView = new SearchView().render();
  //   }
  //     this.$main.html(this.searchView.el);
  // }

});
