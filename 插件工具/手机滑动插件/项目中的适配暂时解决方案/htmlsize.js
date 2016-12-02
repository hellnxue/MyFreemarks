//����������־
var wiperObj={
		isWiper:false,						 //�������һ���
		wiperSelector:".swiper-container",	 //��������
		pagination: '.pagination',			 //��ҳ����
		onTouchEnd:function(){}	,		     //�����ص�
		onPaginationClickEnd:null,	 //��ҳ����ص�
		index:0								 //Ĭ��ѡ��ҳ
};


//��ʼ�����һ����������
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
        	 
        	
        	//����Ĭ��ѡ����
        	$(wiperObj.wiperSelector+" "+wiperObj.pagination).find("span").eq(wiperObj.index).click();
        	$(wiperObj.wiperSelector+" "+wiperObj.pagination).find("span").off();
        	
        	//��ҳ���������
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