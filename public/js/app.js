var router = Backbone.Router.extend({
  routes:{
    '/': 'showRoot',
    '': 'showRoot'
  },
  initialize: function(){
    this.AnalysisModel = new AnalysisModel()
    this.AnalysisView = new AnalysisView({model: this.AnalysisModel});
    this.AboutView = new AboutView();
  },
  showRoot: function(){
    $('#front').html( this.AnalysisView.renderFront().el );
    $('#detailed').html( this.AnalysisView.renderDetailed().el);
    $('#about').html( this.AboutView.render().el);
  }
});

var app = new router();

$(function(){
  Backbone.history.start();
})