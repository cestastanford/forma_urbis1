(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['feature-detail'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"feature-detail\" title=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"field-name\">"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + ":</span>\n    <span class=\"field-value\">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n</li>\n";
},"useData":true});
templates['feature-result'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "feature #"
    + this.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li class=\"result\">\n    <span class=\"layer\">"
    + this.escapeExpression(((helper = (helper = helpers.layer || (depth0 != null ? depth0.layer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"layer","hash":{},"data":data}) : helper)))
    + ": </span>\n    <span class=\"name\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n</li>\n";
},"useData":true});
templates['layer'] = template({"1":function(depth0,helpers,partials,data) {
    return "raster-layer";
},"3":function(depth0,helpers,partials,data) {
    return "vector-layer";
},"5":function(depth0,helpers,partials,data) {
    return "<span class=\"layer-type-marker raster\">ⓡ</span>\n    ";
},"7":function(depth0,helpers,partials,data) {
    return "<span class=\"layer-type-marker vector\">ⓥ</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"layer "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.raster : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n    <input class=\"layer-checkbox\" type=\"checkbox\" class=\"layer-checkbox\">\n    <span class=\"layer-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.raster : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"useData":true});
templates['matching-date'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div>\n                <input type=\"checkbox\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"subtype\" subtype=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" checked=\"checked\">\n                <span>"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "<span>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"filter\">\n    <h4>Filter by date</h4>\n    <div class=\"inputs\">\n        <div style=\"\">Find features with dates from</div>\n        <br>\n        <div>\n            <input type=\"range\" min="
    + alias3(((helper = (helper = helpers.oldestDate || (depth0 != null ? depth0.oldestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"oldestDate","hash":{},"data":data}) : helper)))
    + " max="
    + alias3(((helper = (helper = helpers.newestDate || (depth0 != null ? depth0.newestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"newestDate","hash":{},"data":data}) : helper)))
    + " value="
    + alias3(((helper = (helper = helpers.oldestDate || (depth0 != null ? depth0.oldestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"oldestDate","hash":{},"data":data}) : helper)))
    + " index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input matching-date-slider-0\" oninput=\"outputUpdate(value, 'matching-date-box-0')\">\n            <input type=\"text\" class=\"matching-date-box-0\" value=\""
    + alias3(((helper = (helper = helpers.oldestDate || (depth0 != null ? depth0.oldestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"oldestDate","hash":{},"data":data}) : helper)))
    + "\" size=\"5\" oninput=\"outputUpdate(value, 'matching-date-slider-0')\">\n            <span style=\"margin: 1em;\">until</span>\n            <input type=\"range\" min="
    + alias3(((helper = (helper = helpers.oldestDate || (depth0 != null ? depth0.oldestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"oldestDate","hash":{},"data":data}) : helper)))
    + " max="
    + alias3(((helper = (helper = helpers.newestDate || (depth0 != null ? depth0.newestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"newestDate","hash":{},"data":data}) : helper)))
    + " value="
    + alias3(((helper = (helper = helpers.newestDate || (depth0 != null ? depth0.newestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"newestDate","hash":{},"data":data}) : helper)))
    + " index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input matching-date-slider-1\" oninput=\"outputUpdate(value, 'matching-date-box-1')\">\n            <input type=\"text\" class=\"matching-date-box-1\" value=\""
    + alias3(((helper = (helper = helpers.newestDate || (depth0 != null ? depth0.newestDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"newestDate","hash":{},"data":data}) : helper)))
    + "\" size=\"5\" oninput=\"outputUpdate(value, 'matching-date-slider-1')\">\n        </div>\n        <script>\n            function outputUpdate(date, identifier) {\n                $('.' + identifier)[0].value = date;\n            };\n        </script>\n    </div>\n    <div class=\"subtypes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subtypes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['matching-id'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div>\n                <input type=\"checkbox\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"subtype\" subtype=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" checked=\"checked\">\n                <span>"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "<span>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"filter\">\n    <h4>Filter by unique ID</h4>\n    <div class=\"inputs\">\n        <input type=\"text\" index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\">\n    </div>\n    <div class=\"subtypes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subtypes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['matching-type'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div>\n                <input type=\"checkbox\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"subtype\" subtype=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" checked=\"checked\">\n                <span>"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "<span>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"filter\">\n    <h4>Filter by type</h4>\n    <div class=\"inputs\">\n        <input type=\"text\" index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\">\n    </div>\n    <div class=\"subtypes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subtypes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['text-attribute'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div>\n                <input type=\"checkbox\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"subtype\" subtype=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" checked=\"checked\">\n                <span>"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "<span>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"filter\">\n    <h4>Filter by text</h4>\n    <div class=\"inputs\">\n        <input type=\"text\" index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\">\n    </div>\n    <div class=\"subtypes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subtypes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
})();