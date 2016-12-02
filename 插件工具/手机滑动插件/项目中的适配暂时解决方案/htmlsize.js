//滑动参数标志
var wiperObj={
		isWiper:false,						 //启用左右滑动
		wiperSelector:".swiper-container",	 //滑动容器
		pagination: '.pagination',			 //分页容器
		onTouchEnd:function(){}	,		     //滑动回调
		onPaginationClickEnd:null,	 //分页点击回调
		index:0								 //默认选中页
};


//初始化左右滑动所需参数
function initWiperParam(obj){
	wiperObj.isWiper=obj.isWiper;
	wiperObj.wiperSelector=obj.wiperSelector;
	wiperObj.pagination=obj.pagination;
	wiperObj.onTouchEnd=obj.onTouchEnd;
	wiperObj.onPaginationClickEnd=obj.onPaginationClickEnd;
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
  		   	    resizeReInit:true,
		   	    onTouchEnd: function(swiper){
		   	    	wiperObj.onTouchEnd(swiper);
		   	    } 
   	        });
        	console.log(wipers.paginationClick);
        	 
        	
        	//设置默认选中项
        	$(wiperObj.wiperSelector+" "+wiperObj.pagination).find("span").eq(wiperObj.index).click();
        	$(wiperObj.wiperSelector+" "+wiperObj.pagination).find("span").off();
        	
        	//分页器点击处理
        	if(wiperObj.onPaginationClickEnd){
        		$(wiperObj.wiperSelector+" "+wiperObj.pagination+" span").click(function(){
        			
            		wiperObj.onPaginationClickEnd(wipers,this);
            	    });
        		
        	};
        	
        }
        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);