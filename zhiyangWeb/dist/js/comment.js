//comment.js
(function($){
	'use strict'
	//nav下拉菜单 
	$('[data-toggle="dropdown"]').each(function(index, el) {
		$(this).on('click', function(event) {
			event.stopPropagation();
			var $getAllDropdownMenu = $('.dropdown-menu'),
		    	$getNextSiblingEle = $(this).next();

		    $getAllDropdownMenu.removeClass('show').hide();
		    $getNextSiblingEle.addClass('show').show();
		});
	});
	$(document).on('click',function(event){
		event.preventDefault();
		$('.show').hide();
	})
	//nav a标签点击事件
	$('.nav > ul > li > a').off('click').on('click', function(event) {
		event.preventDefault();
		var getAllEleA = $(this).parent().siblings('li').children('a')
		getAllEleA.removeClass('active');
		$(this).addClass('active');
	});
})(jQuery)


//返回顶部
var pageScroll =  function(){
	//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',10);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(scrollTop == 0) clearTimeout(scrolldelay);
}