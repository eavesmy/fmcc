var programMgr = function(o) {
    this.program = o;
    this.parma = null;
};

/*
 *	Deal program likes pipe -> last result is next parma
 * */
programMgr.prototype.deal = function(parmas) {

    var r = this
        .format(parmas)
        .check()

    if (!r) return;

    for (let i = 0; i < this.list_programs.length; i++) {
        let handler = this.list_programs[i];

        if (!handler) continue;

        this.parma = this.run(handler, this.parma, this.list_parmas);

    }

};

programMgr.prototype.format = function(parmas) {

    this.list_programs = [];
    this.list_parmas = [];

    for (let i = 0; i < parmas.length; i++) {
        let parma = parmas[i];

        let handler = this.program[parma]

        if (!!handler) this.list_programs.push(handler);
        else this.list_parmas.push(parma);
    }

    if (!this.list_programs.length) this.list_programs.push(this.program.default);

    return this;
};

programMgr.prototype.check = function() {
    if (this.list_parmas.length > 1) {
        return;
    }

    this.list_parmas = this.list_parmas[0];
    return this;
};

programMgr.prototype.run = function(program, result, parma) {
    var result = program(result, parma);

    if (window.urlStateChange) this.updateUrl();

    window.urlStateChange = false;
};

programMgr.prototype.updateUrl = function() {

	var parmas = !!this.list_parmas ? "/" + this.list_parmas : "";

	var state = {
		url: "/" + this.program.name + parmas
	}
	history.pushState(state,"EAVES",state.url);
};

module.exports = programMgr;
