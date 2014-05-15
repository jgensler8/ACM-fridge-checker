var AnalysisViewDetailed = Backbone.View.extend({
  initialize: function(){
    _.bindAll( this, 'render', 'renderMaps');
  },
  render: function(){
    this.$el.html( Handlebars.templates.AnalysisViewDetailed(this.model) );
    return this;
  },
  renderMaps: function(){

  }
});