var AnalysisModel = Backbone.Model.extend({
  initialize: function(){
    this.doorTimes = new DoorTimesCollection();
  }
})