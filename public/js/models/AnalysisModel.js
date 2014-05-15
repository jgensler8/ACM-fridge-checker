var AnalysisModel = Backbone.Model.extend({
  initialize: function(){
    _.bindAll(this, 'countItems','syncItems');
    this.totalTimeToday = 0;
    this.timesOpenedToday = 0;
    this.doorTimes = new DoorTimesCollection();
  },
  syncItems: function(){
    this.doorTimes.fetch({
      success: this.countItems,
      async: false
    });
  },
  countItems: function(){
    var start,
      end,
      me = this,
      today = new Date();
    _.each(this.doorTimes.models, function(obj, index){
      start = new Date(obj.attributes.startTime);
      end = new Date(obj.attributes.endTime);
      if( today.getFullYear() === start.getFullYear()
          && today.getMonth() === start.getMonth()
          && today.getDate() === start.getDate() ){
      console.log(start);
      console.log(end);
        me.timesOpenedToday += 1;
        me.totalTimeToday += (end.getTime() - start.getTime())/1000;
      }
    });
  }
})