var router = Backbone.Router.extend({
  routes:{
    '/': 'showRoot',
    '': 'showRoot'
  },
  initialize: function(){
    this.AnalysisModel = new AnalysisModel();
    this.AnalysisViewFront = new AnalysisViewFront({model: this.AnalysisModel});
    this.AnalysisViewDetailed = new AnalysisViewDetailed({model: this.AnalysisModel});
    this.AboutView = new AboutView();
  },
  showRoot: function(){
    $('#front').html( this.AnalysisViewFront.render().el );
    $('#detailed').html( this.AnalysisViewDetailed.render().el);
    $('#about').html( this.AboutView.render().el);
  }
});

var app = new router();

$(function(){
  Backbone.history.start();
})