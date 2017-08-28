/*
 *		View(
 *			
 *			option,		{}
 * 			Title,		Plugin
 * 			Contain,
 * 			Author,
 * 			Time,
 *
 *		)
 *
 * */

var Dom = module.exports = function(option) {
    this.tag = option.tag || "div";

    this.prop = {};
    this.prop.id = option.id || "";
    this.prop.name = option.name || "";
    this.prop.class = option.className || "";
    this.prop.text = option.text || "";

    this.styles = !!option.styles ? option.styles : {};

    this.childNodes = [];

    this.rendered = false;
}

Dom.prototype.include = function() {
    var _domlist = Object.keys(arguments),
        len = _domlist.length,
        _dom;

    for (var i = 0; i < len; i++) {
        _dom = arguments[i];

        if (this.rendered && _dom.rendered) this.dom.appendChild(_dom.dom);

        if (!(_dom instanceof Dom)) {

            Log.warn("Not instance of Dom");

            continue;
        }

        this.childNodes.push(_dom);
    }
}

Dom.prototype.render = function() {

    var that = this;
    if (this.rendered) return this;

    this.dom = document.createElement(this.tag);

    var _dom = this.dom;

    for (var k in this.prop) {
        if (!!this.prop[k]) _dom.setAttribute(k, this.prop[k]);

        if (k === "text") _dom.innerHTML = this.prop[k]

    }
    var _styles = Object.keys(this.styles),
        l = _styles.length,
        _style, _value;

    for (var i = 0; i < l; i++) {
        _style = _styles[i];
        _value = this.styles[_style];

        _dom.style[_style] = _value;

    }

    this.childNodes.forEach(function(_vm) {
        _dom.appendChild(_vm.render().dom);
    });

    this.rendered = true;

    return this;
}

Dom.prototype.query = function(tag) {

    let c = [];
    let len = this.childNodes.length;

    for (let i = 0; i < len; i++) {
        let child = this.childNodes[i];

        if (child.dom === this.dom.querySelector(tag)) c.push(child);
    }

    return c;
}

Dom.prototype.text = function(str) {
    this.dom.innerText = str;

    return this;
};

Dom.prototype.remove = function(){
	var that = this;
	that = null;
};

