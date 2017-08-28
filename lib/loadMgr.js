 // var animate = require("velocity-animate");

 var PLUGIN_STATE = [];

 var mainView = document.querySelector(cosDefine.mainView);

 var uninstallPlugin = function(name) {

     var dom = document.getElementById(name);

     if (!dom) return; //Log.warn("No this dom",name);

     // dom.remove();

     // dom = null;

     mainView.innerHTML = "";

     return true;
 };

 var loadPlugin = function(name) {

     var _dom = require("../plugin/" + name);

     var vm_dom = new _dom();

     if (!vm_dom) return; //Log.warn("No this vm dom ->",name);

     mainView.appendChild(vm_dom.dom);

     PLUGIN_STATE.push(name);

     return vm_dom;
 };

 module.exports = function(pluginName) {

     var len = PLUGIN_STATE.length,
         inStateDom;

     for (var i = 0; i < len; i++) {
         inStateDom = PLUGIN_STATE[i];

         if (!inStateDom) continue;

         var uninstallSuccess = uninstallPlugin(inStateDom);

         if (uninstallSuccess) {
             PLUGIN_STATE.splice(i, 1);

             i--;
         }
     }

     return loadPlugin(pluginName);
 };
