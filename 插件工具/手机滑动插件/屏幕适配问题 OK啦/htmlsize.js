 
 
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
       
        //�ֶ����¼��㻬�������Ŀ��
         resetSwiperContainerWH({
            remWidth:6.72,                  //��Կ��
            remHeight:2.41,                 //��Ը߶�
            containerSelector:".swiper-container" , //��������
            firstInitPage:false              //�Ƿ��һ��ִ��
         });
        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

 