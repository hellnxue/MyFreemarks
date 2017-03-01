mui.init({
		gestureConfig:{
			doubletap:true
		},
		subpages:[{
			url:'credit_04',
			id:'credit_04',
			styles:{
				top: '0',
				bottom: '0',
			}
		}]
	});
	
	 
	 function changeCaption(){
		  
		 $("a[data-type]").data("type",2).siblings().html("问题验证");
		}
	 
	 
	 $(function(){
		 
		 //动态导航
		 $("a[data-type]").on("click",function(){
			 if($(this).data("type")==1){
				 history.go(-1);
			 }else{
				 $(this).siblings().html("获取查询码");
				// $('form[data-step="getCreditQuestion"]').removeClass("none").addClass("show").siblings("form").removeClass("show").addClass("none");
				window.credit_04.changeContent();
				window.credit_04.getImageCode();
			 }
			 
		 });
	 });