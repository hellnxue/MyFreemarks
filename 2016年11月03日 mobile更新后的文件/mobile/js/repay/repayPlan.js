var pageIndex=1,total=5,myScroll,pageSize=3;
var i=0;
$(function(){
	 
		if (myScroll){
		  myScroll.destory();
		}
		
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:pullTo});
	
	// 保单信息
	// 默认第一页
	 policyInfo();
});

//分页
function pullTo(){
	
	if(this.y<=this.maxScrollY){
	      
		 pageIndex++;
		if(pageIndex<=total){
			alert(11);
			setTimeout( function(){
				policyInfo();
				 
			},1000);
		} 
		 
	}
}

// 保单信息
function policyInfo() {
	    
	  var   html;
		html= '<div class="ct">'
   	  		+
            '<div style="position:absolute;bottom:0;right:0;margin:0 6% 20px 0;"><span style="color:red;">已逾期</span></div>'
   	  		 
            
            +'<p>期数：3/20</p>'
            +'<p>应还日期：12-12日</p>'
            +'<p>本金：300.00元</p>'
            +'<p>利息：1000元</p>'
            +'<p>逾期天数：2天</p>'
            +'<p>逾期金额：10.00元</p>'
            +'<p>应还金额：1300.00元</p> </div>';
				 
			 
			$("#scroller").append(html).append(html).append(html);
			 
			
			i++;
			
			myScroll.refresh(); 
 
} 

 