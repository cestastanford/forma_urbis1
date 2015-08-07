(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['feature-detail'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " style=\"color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"feature-detail\" title=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"field-name\">"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + ":</span>\n    <span class=\"field-value\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
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
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"result\">\n    <span class=\"layer\" style=\"color: "
    + alias3(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\">"
    + alias3(((helper = (helper = helpers.layer || (depth0 != null ? depth0.layer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"layer","hash":{},"data":data}) : helper)))
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
    var helper;

  return "<span class=\"layer-type-marker vector\" style=\"color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\">ⓥ</span>\n";
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

  return "<div class=\"filter\">\n    <h4>Filter by date</h4>\n    <div class=\"inputs\">\n        <div style=\"padding-bottom: 70px;\">\n            <div index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" id=\"timeline\"></div>\n        </div>\n        <span>\n            <input type=\"number\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\" id=\"start-date\">\n            <span style=\"padding: 10px;\">to</span>\n            <input type=\"number\" index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\" id=\"end-date\">\n        </span>\n        <script>\n            (function(undefined) {\n                var slider = $('#timeline')[0];\n                var fields = [$('#start-date')[0], $('#end-date')[0]];\n\n                noUiSlider.create(slider, {\n                    start: [-1000, 2015],\n                    step: 1,\n                    margin: 1,\n                    connect: true,\n                    direction: 'ltr',\n                    orientation: 'horizontal',\n                    behaviour: 'drag-tap',\n                    range: {\n                        min: -1000,\n                        max: 2015,\n                    },\n                    pips: {\n                        mode: 'values',\n                        density: 3,\n                        values: [-1000, 0, 500, 1000, 1500, 2000],\n                        format: wNumb({\n                            decimals: 0,\n                            negative: 'BCE ',\n                        }),\n                    },\n                });\n\n                slider.noUiSlider.on('update', function(values, handle) {\n                    fields[0].value = Math.floor(values[0]);\n                    fields[1].value = Math.floor(values[1]);\n                    $('button[type=\"submit\"]').click();\n                });\n\n                $(fields).change(function(event) {\n                    if (event.target.value === '') return;\n                    var handle = 0;\n                    if (event.target.id === 'end-date') handle = 1;\n                    var array = [null, null];\n                    array[handle] = event.target.value;\n                    slider.noUiSlider.set(array);\n                });\n\n                fields[0].value = '';\n                fields[1].value = '';\n\n            })()\n        </script>\n    </div>\n    <div class=\"subtypes\">\n"
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

  return "                <option value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(this.lambda(depth0, depth0))
    + ")</option>\n";
},"3":function(depth0,helpers,partials,data) {
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

  return "<div class=\"filter\">\n    <h4>Filter by type</h4>\n    <div class=\"inputs\">\n        <select index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"input\">\n            <option value=\"\" selected></option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n    </div>\n    <div class=\"subtypes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subtypes : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
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