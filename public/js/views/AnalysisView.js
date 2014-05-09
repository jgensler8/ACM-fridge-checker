var AnalysisView = Backbone.View.extend({
  initialize: function(){

  },
  renderFront: function(){
    this.$el.html( Handlebars.templates.AnalysisViewFront() );
    return this;
  },
  renderDetailed: function(){
    this.$el.html( Handlebars.templates.AnalysisViewDetailed() );
    return this;
  }
});