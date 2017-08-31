# fmcc 前端框架
> 一个低性能不完善的前端框架

### Func:
1. 前端路由
2. VM Dom
3. 样式管理

### Info:
前期项目，现在在整理，部分呢功能要rebuild。    
大部分功能都不完善，具体见[这篇文章](http://eaves.in/blog/2017728435)

### Install:
    npm install --save-dev fmcc

### Usage:
    var app = require("fmcc");
	var Router = app.Router,
		Start = app.Start;
	
	var program = {
	
		name : "Func",
		
		/*
			@result String :This program parma
			@args Array : The args you input.
		*/
		default:function(result,args){
			// The program default function.
		},

		add : function(){
			//  /program/add
		},
		...
	}

	Router.in(program);

	Start(Router);

	Start.init();

