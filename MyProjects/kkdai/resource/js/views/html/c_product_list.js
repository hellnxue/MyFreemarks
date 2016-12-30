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
					
					
//					var str = "";
//					$(data.result).each(function(i, obj){
//						var jsonStr = "{";
//						/* $.each(obj, function(key, val) { 
//							alert("key" + key); 
//							alert("val" + val);  
//							jsonStr += '"' + key +  '":' + '"' + val + '",'
//						}); 
//						jsonStr = jsonStr.substring(0,jsonStr.length-1) + "}";*/
//						str	+= "<li productCode=" + obj.productCode + ">"+
//									"<div class='j_ul_text'>"+
//										"<span>" + obj.productName + "</span><span class='jie_int'>" + obj.periodDesc + "</span>"+
//									"</div>"+
//									"<p class='j_ul_p1'>" + obj.rateDesc + "</p>"+
//									"<p class='j_ul_p2'>" + obj.handingRateDesc + "</p>"+
//									"<div class='jie_hot_ico'></div>"+
//								"</li>";
//					})
//					$(".j_ul").html(str);
//					
//					$(".j_ul > li").bind("click", function(){
//						window.location.href='c_product?productCode=' + $(this).attr("productCode")
//					});
				}else {
					MessageWin(data.msg ); 
				}
		});;
	 
 }