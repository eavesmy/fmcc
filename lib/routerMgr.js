var inputMgr = require("./inputMgr.js");
var programMgr = require("./programMgr.js");

var RouterMgr = {};

RouterMgr.dir = {};

RouterMgr.in = function(name, handler) {
    RouterMgr.dir[name] = new programMgr(handler);
};

RouterMgr.refresh = function() {
    var _path = location.pathname.split("/");

    var list = [];
    for (let i = 0; i < _path.length; i++) {
        let _opt = _path[i];

        if (!_opt) continue;

        list.push(_opt);
    }

    var program = list[0] || "home";

    program = RouterMgr.dir[program];

    if (!program) return RouterMgr.dir["home"].deal([]);

    program.deal(list.slice(1, list.length));

};

RouterMgr.entry = function(e) {
    if (!inputMgr.isEnter(e)) return;

    var main = inputMgr.format();

    var program = RouterMgr.dir[main.program];

    if (!program) return;

    program.deal(main.parmas);

	document.querySelector(cosDefine.mainInput).value = "";
};

module.exports = RouterMgr;
