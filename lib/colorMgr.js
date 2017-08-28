var main = module.exports = {};

main.randomColor = function() {

    var randomTagStyleIndex = tools.Math.random(0, cosDefine.COLORS.length);

    return cosDefine.COLORS[randomTagStyleIndex];
};
