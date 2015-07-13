(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['date'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n    <h4>Filter by date attributes: </h4>\n    <input type=\"text\" class=\"filter text\" value=\"Lol you can't.\" disabled=\"disabled\">\n</div>\n";
},"useData":true});
templates['layer'] = template({"1":function(depth0,helpers,partials,data) {
    return "<span class=\"layer-type-marker raster\">ⓡ</span>\n    ";
},"3":function(depth0,helpers,partials,data) {
    return "<span class=\"layer-type-marker vector\">ⓥ</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"layer\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n    <input class=\"layer-checkbox\" type=\"checkbox\" class=\"visible-checkbox\">\n    <span class=\"layer-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.raster : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"useData":true});
templates['text'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n    <h4>Filter by text attributes: </h4>\n    <input type=\"text\" class=\"filter text\">\n</div>\n";
},"useData":true});
})();
