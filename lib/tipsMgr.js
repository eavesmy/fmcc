var tipsMgr = module.exports = {};

var list = [];

tipsMgr.doing = false;

// hook -> finish one then start one.
tipsMgr.add = function(tip) {
    list.push(tipsMgr.show(tip))
};

tipsMgr.show = function(tip) {
	
    return new Promise(function(resolve) {
		tipsMgr.doing = true;
        tip.render();
        setTimeout(tipsMgr.hidden(resolve, tip), cosDefine.Tips.Timeout)
    });

};

tipsMgr.hidden = function(resolve, tip) {

    return function() {

		tipsMgr.doing = false;
        console.log("This is hidden");

        tip.remove();
        resolve();
		
		list.splice(0,1);

        var p = tipsMgr.hook();

        if (!!p) p();
    }
};

tipsMgr.hook = function() {

    var gen = function*() {
        for (let i = 0; i < list.length; i++) {
            yield list[i];
        }
    }

    var g = gen();

    return g.next().value;
};

tipsMgr.start = function(){
	
	var todo = list[0];

	if (!!todo && !tipsMgr.doing) todo();

	setTimeout(tipsMgr.start,cosDefine.Tips.Timeout)
};
