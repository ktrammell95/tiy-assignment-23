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
  },

  initialSetup: function() {
    this.listenTo(this.navView, "link:click", function(options){
      switch(options.name) {
        case "genre":
          this.showProducts();
        break;
        // case "search":
        //   this.showSearch();
        // break;
        default:
          this.showHome();
        break;
      }
      this.navigate(options.href);
    });

    this.$main = this.appView.$(".main");

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
