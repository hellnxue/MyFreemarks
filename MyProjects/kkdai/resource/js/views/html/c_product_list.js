 hasIframe=true;

$(document).ready(function(){
	 
	 
	 initData();
	 
	 
	   
   });
 
 
 function initData(){
	 $.ajax({
			type: 'post',
			dataType: 'json',
			url: 'getProduct'
			
		}).
		done(function(data){
				if(data.code == "0000"){
					var html=template("productList",data);
					var $html=$(html);
					$("div[data-product]").empty().append($html);
					
					$html.find("[data-code]").on("click",function(){
						window.location.assign('c_product?productCode=' +$(this).data("code"));
						
					});
					
					
					$html.find("[data-code]").each(function(index){
						this.addEventListener("tap",function(e){
							mui.openWindow({
							    url:'c_product?productCode=' +$(this).data("code"),
							    id:'c_product'  
							    
							});
						},false);
						
					});
					
				}else {
					MessageWin(data.msg ); 
				}
		});;
	 
 }