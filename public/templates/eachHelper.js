Handlebars.registerHelper('each', function(context, options){
  var ret = "";
  for(var elem=0, len=context.length; elem<len; elem++){
    ret = ret + options.fn(context[elem]);
  }
  return ret;
});
