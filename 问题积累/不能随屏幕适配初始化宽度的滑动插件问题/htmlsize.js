//����������־
var wiperObj={
		isWiper:false,						 //�������һ���
		wiperSelector:".swiper-container",	 //��������
		pagination: '.pagination',			 //��ҳ����
		onTouchEnd:function(){}	,		     //�����ص�
		index:0								 //Ĭ��ѡ��ҳ
};


//��ʼ�����һ����������
function initWiperParam(obj){
	wiperObj.isWiper=obj.isWiper;
	wiperObj.wiperSelector=obj.wiperSelector;
	wiperObj.pagination=obj.pagination;
	wiperObj.onTouchEnd=obj.onTouchEnd;
	wiperObj.index=obj.index;
}

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
       
        
        if(wiperObj.isWiper){
        	  
        	var wipers=new Swiper(wiperObj.wiperSelector,{
		   	    pagination: wiperObj.pagination,
  		   	    paginationClickable:true,
		   	    onTouchEnd: function(swiper){
		   	    	wiperObj.onTouchEnd(swiper);
		   	    } 
		    
   	        });
        	
        	
        	$(".swiper-container .pagination").find("span").eq(wiperObj.index).click();
            
//        	console.log(wipers);
//        	 
        	 var $curSelector=$(".swiper-container .pagination");
        	 
//        	// $curSelector.find("span").eq(1).click();
//			 console.log("=="+$curSelector.html());
//        	
//        	 console.log($(".swiper-container .pagination span").html());
        	/* $($curSelector[0].childNodes[1]).click();
         	 console.log( $curSelector[0].childNodes[1]  );
         	$($curSelector[0].childNodes[1]).trigger("click");
         	 console.log( $($curSelector[0].childNodes[1]));*/
        	 
        	/* console.log( $curSelector.find("span"));
        	 
        	$(".swiper-container .pagination").find("span").eq(1).click();*/
         
        }
        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

console.log(window.wiper);