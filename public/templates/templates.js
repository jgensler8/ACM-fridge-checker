(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AnalysisViewFront'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns text-center\">\n    <span><h1>ACM Fridge Monitor</h1></span>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns text-center\">\n      <span><h4>Today:</h4></span><br>\n      Open for ";
  if (helper = helpers.totalTimeToday) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalTimeToday); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " seconds<br><br>\n      Opened ";
  if (helper = helpers.timesOpenedToday) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timesOpenedToday); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " times<br><br><br><br><br><br><br><br><br>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns text-center\">\n    <span class=\"label secondary radius\"><small>Updated Hourly</small></span>\n  </div>\n</div>";
  return buffer;
  });
templates['AnalysisViewDetailed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div id=\"timeOpenChart\"></div>\n  </div>\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div id=\"daysOfWeekChart\"></div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div id=\"daysTotalChart\"></div>\n  </div>\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div id=\"monthChart\"></div>\n  </div>\n</div>\n\n<script>\n  d3.json(\"data\", function(error, doorTimes) {\n\n    doorTimes.forEach(function(d, i) {\n      d.index = i;\n      d.timeOpen = (new Date(d.endTime).getTime() - new Date(d.startTime).getTime()) / 1000;\n    });\n\n    var DTCF = crossfilter(doorTimes),\n        daysOfWeek = DTCF.dimension(function(d) { return new Date(d.startTime).getDay(); }),\n        daysGroup = daysOfWeek.group(function(d) { return d; }),\n\n        timeOpen = DTCF.dimension(function(d) { return d.timeOpen }),\n        timeOpenGroup = timeOpen.group(Math.floor),\n\n        daysTotalDim = DTCF.dimension( function(d) { return d.startTime; }),\n        daysTotalGroup = daysTotalDim.group(function(d){ return d; }),\n\n        monthDim = DTCF.dimension( function(d){ return new Date(d.startTime).getMonth(); }),\n        monthGroup = monthDim.group( function(d){ return d; });\n\n    var minDate = daysTotalDim.bottom(1)[0].startTime;\n    var maxDate = daysTotalDim.top(1)[0].startTime;\n\n    var daysOfWeekChart = dc.barChart('#daysOfWeekChart');\n    var timeOpenChart = dc.barChart('#timeOpenChart');\n    var daysTotalChart = dc.barChart('#daysTotalChart');\n    var monthChart = dc.barChart('#monthChart');\n\n    var weekdays = [\"Sun\",\"Mon\",\"Tues\",\"Wednes\",\"Thurs\",\"Fri\",\"Satur\"];\n    var formatDay = function(d) {\n        return weekdays[ d % 7] + \"day\";\n    };\n\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var formatMonth = function(d) {\n        return months[ d % 12];\n    };\n\n    daysOfWeekChart\n      .width(500).height(500)\n      .dimension(daysOfWeek)\n      .group(daysGroup)\n      .x( d3.scale.linear().domain([-.5,6.5]) )\n      .xUnits( d3.time.days)\n      .xAxis()\n        .tickFormat( formatDay )\n        .tickValues([0,1,2,3,4,5,6]);\n\n    timeOpenChart\n      .width(500).height(500)\n      .dimension(timeOpen)\n      .group(timeOpenGroup)\n      .x( d3.scale.linear().domain([0,60]) );\n\n    daysTotalChart\n      .width(500).height(300)\n      .dimension(daysTotalDim)\n      .group(daysTotalGroup)\n      .x( d3.time.scale().domain([minDate, maxDate]) );\n\n    monthChart\n      .width(500).height(300)\n      .dimension(monthDim)\n      .group(monthGroup)\n      .x( d3.scale.linear().domain([-.5,11.5]) )\n      .xUnits( d3.time.months)\n      .xAxis()\n        .tickFormat( formatMonth );\n\n    dc.renderAll();\n    \n  });\n</script>";
  });
templates['AboutView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns\">\n    <span class=\"text-center\"><h2>Authors</h2></span>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <fieldset>\n      <legend class=\"text-center\">Chase Lee</legend>\n      <div class=\"small-3 medium-3 large-3 columns\">\n        <a class=\"th 10\">\n          <img style=\"height:auto; width:auto; max-width:60px; max-height:60px;\" src=\"https://avatars3.githubusercontent.com/u/1387910?s=460\">\n        </a>\n      </div>\n      <div class=\"small-9 medium-9 large-9 columns\">\n        Chase Lee is a Computer Engineering student at the University of Illinois at Chicago.\n      </div>\n    </fieldset>\n  </div>\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <fieldset>\n      <legend class=\"text-center\">Jeff Gensler</legend>\n      <div class=\"small-3 medium-3 large-3 columns\">\n        <a class=\"th\">\n          <img style=\"height:auto; width:auto; max-width:60px; max-height:60px;\" src=\"http://www.gravatar.com/avatar/569260d219df516f2a247046b2c05701.png\">\n        </a>\n      </div>\n      <div class=\"small-9 medium-9 large-9 columns\">\n        Jeff Gensler is a Computer Science student at the University of Illinois at Chicago.\n      </div>\n    </fieldset>\n  </div>\n</div>";
  });
})();