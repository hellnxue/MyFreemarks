 var page = 1, flag = false,type=2;
 var beforeScrollStart = 0,  beforeScrollTop = 0; 
   $(document).ready(function(){
	   
	   $("#lishi_list").find("div[data-type="+type+"]").show().siblings("div").hide();
	   
	   loadData("1", 1); 
	   loadData("1", 2);
	   
	   $(".lishi_title > a").bind("click", function(){
		  
		   $(this).addClass("current").siblings("a").removeClass("current");
		   type = $(this).attr("type");
		   $("#lishi_list").find("div[data-type="+type+"]").show().siblings("div").hide();
		   page = 1;
		   flag = false;
		   console.log(type);
	   });
	   
	  
	   $(document).on("scrollstart",function(){
		   beforeScrollStart = document.body.scrollTop;
	   });
	   $(document).on("scrollstop",function(){
		   beforeScrollTop = document.body.scrollTop;
		   if((beforeScrollStart - beforeScrollTop) < 0){// 判断是否下滑
			   var callBack = function(){
				   flag = true;
				   page = page - 1;
			   }
			   if(flag){ //已经没有数据加载了
				   return false;
			   }
			   page = page + 1;
			 
			   loadData("2", type); //2 下拉分页
		   }
	   });
   });
   
   function loadData(times,type){
	   var $selector=$("#lishi_list").find("div[data-type="+type+"]");
	   $.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: "hisTranstion",
			data: {
				userId : userId,
				type : type,
				page : page,
				pageSize : '10'
			},
			success: function(data) {
				if(data.code == '0000'){
					if(data.result == null || data.result == ""){
						if(times==1){
							$selector.html("<center class='m-t-xxxl'>暂无数据！</center>");
							return;
						}
					
					}else {
						var	str	= "";
						$(data.result).each(function(i, obj){
							var	billStr = "";
							$(obj.bill).each(function(j, item){
								billStr += "<div class='lishi_text' orderId='" + item.orderId + "'>" +
													"<p>" +
														"<span class='lishi_1'>申请时间：" + item.repDate + "</span><span class='lishi_zt'>" + item.status + "</span>" +
													"</p>" +
													"<p>" +
														"<span class='lishi_2'>" + item.card + "</span><span class='lishi_e'>交易金额：" + item.amount + "</span>" +
													"</p>" +
												"</div>";
							});
							str	+=  "<div class='lishi_content'>" +
										"<div class='lishi_time'>" + obj.month + "</div>" +
										"<div class='lishi_text_box'>" +
										billStr + 
										"</div>" +
									"</div>";
						});
						
						var $html=$(str);
						$html.find(".lishi_text:last").css("border-bottom","0");
						if("1" == times){
							
							$selector.html($html);
						}else {
							$selector.append($html);
						}
					}
				}else {
					MessageWin(data.msg); 
				}
			}
		});
   }