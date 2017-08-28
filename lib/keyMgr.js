var keyMgr = module.exports = {};

var mainInput = document.querySelector(cosDefine.mainInput);

var focus_main_input = function(e) {
    if (e.keyCode === cosDefine.ENTER_CODE && e.ctrlKey) {
        mainInput.focus();
    }
};

keyMgr.init = function(routerMgr) {
    window.urlStateChange = false;
    window.onload = routerMgr.refresh;
    window.onpopstate = routerMgr.refresh;

    mainInput.addEventListener("keyup", routerMgr.entry);
    document.addEventListener("keydown", focus_main_input);
};
