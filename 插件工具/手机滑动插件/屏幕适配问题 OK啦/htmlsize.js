 
 
var num;
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
            docEl.style.fontSize = '100px';
              num = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
             num= 100 * (clientWidth / 750) + 'px';
        }
       
        //手动重新计算滑动容器的宽高
         resetSwiperContainerWH({
            remWidth:6.72,                  //相对宽度
            remHeight:2.41,                 //相对高度
            containerSelector:".swiper-container" , //滑动容器
            firstInitPage:false              //是否第一次执行
         });
        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

 