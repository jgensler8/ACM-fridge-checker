var AnalysisViewFront = Backbone.View.extend({
  initialize: function(){
    _.bindAll( this, 'render');
  },
  render: function(){
    $.when( this.model.syncItems() )
      .then( this.$el.html( Handlebars.templates.AnalysisViewFront(this.model) ));
      console.log("done render");
    return this;
  }
});