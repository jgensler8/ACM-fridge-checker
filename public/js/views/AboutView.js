var AboutView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){
    this.$el.html( Handlebars.templates.AboutView() );
    return this;
  }
});