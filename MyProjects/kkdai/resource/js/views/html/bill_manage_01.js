var wait = 60;
var sendCodeFlag=false;
var cTip01="success";
var cTip02="tipOnly";
var json = {
	  userId: sessionUserId,
  };

function ttest(){
	location.href="bill_cancel_01?flag="+cTip01;
	
}
  
  var beforeScrollStart = 0,  beforeScrollTop = 0, page = 1, flag = false;
  $(document).ready(function(){
	   
	  $(document).on("scrollstart",function(){
		   beforeScrollStart = document.body.scrollTop;
	  });
	  $(document).on("scrollstop",function(){
		   beforeScrollTop = document.body.scrollTop;
		   if((beforeScrollStart - beforeScrollTop) < 0){// 判断是否下滑
			   page = page + 1;
			   var callBack = function(){
		    	   page = page - 1;
				   flag = true;
		       };
			   if(flag){
				   return false;
			   }
			    postDate("2", callBack);
		   }
	  });
	   postDate("1");
	  
	  
	 
  });
  
  function time(o) {
		if (wait == 60) {
			//sendVerifyCode('verifyCode','');
		}
		if (wait == 0) {
			$(o).get(0).onclick = dynamic;
			$(o).html("获取验证码");
			$(o).removeAttr("style").addClass("catch");
			wait = 60;
		} else {
			$(o).get(0).onclick = null;
			$(o).html("(" + wait + ")重获验证码");
			//$(o).css("color", "#FF0000");
			wait--;
			setTimeout(function() {
				time(o);
			}, 1000);
		}
	}

	function dynamic() {
		sendCodeFlag=true;
		var $selector=$(this).parents(".custom-code-wrapper");
		$selector.find("button[data-confirm]").removeAttr("disabled"); //验证码
		time(this);
		
//		var orderId= $(this).data("orderid"); //订单编号
//		$("#orderId").val(orderId);
//		console.log(orderId);
	    $.post("phoneDynCode",{verifyKind:"JY"},function(){ });
	}
	
	//数据初始化渲染 
	function postDate(times, callBack){
		 
		 $.post("kakadai/order/orderInfo",
			  {userId: json.userId,account:'baifutianxia',pageSize:10,pageIndex:page},
			  function(res){
				 if(res.result){
					 if(res.result.length == 0 || "" == res.result || null == res.result){
						 if(callBack){
							 callBack();
							 
						  }
						 };
					 var statusJson = {10: "订单申请中", 11: "已签约", 12: "已结清", 20: "解约"};
					 
					 var $maincontainer = $("div.maincontainer");
				 	 var resdata = typeof res == 'string' ? $.parseJSON(res) : res;
				 	 
				 	 if(resdata.code != '0000') {
				 		 MessageWin(resdata.msg );
				 		 return;
				 	 }
				 	 if(resdata.result) {
				 		 
				 		 var html=template("billManageTemplate",resdata);
				 		 var $html=$(html);
				 		 
					 	if("1" == times) {
					 		
					 		$maincontainer.empty().append( $html);
					 		
					 	}else {
					 		$maincontainer.append( $html);
					 	}
					 	
					 	//$(".box_wrap2").first().addClass("mt20");
					 	//取消订单
					 	$html.find('[data-type="cancel"]').on("click",function(){
					 		
					 		orderCancel(this);
					 		
					 	});
					 	
					 	//还款状况
					 	$html.find('[data-href]').on("click",function(){
					 		 
					 		location.href=$(this).data("href");
					 		
					 	});
					 	
				 	 } 
					 
				 }

			  }) .error(function(){
				  MessageWin("ajax异常" );
				  var $maincontainer = $("div.maincontainer");   
				  /* $maincontainer.html($maincontainer.html().replace(/#\w+#/g,""));
				  $maincontainer.find("a").attr("href","javascript:void(0)").removeClass("ico_next");
				  $maincontainer.find(".box_wrap2").show(); */
	  		  });
	}    
  
  
  //取消订单
  function orderCancel(th){
	  var orderId= $(th).data("orderid"); //订单编号
	  var appointDate= $(th).data("appointdate");//预约代还日期
	  $("#orderId").val(orderId);
	  $("#appointDate").val(appointDate);
		 // $(".layer-wrap").show();
		 
		  //弹框输入验证码
	    $("#ctCode >div").attr("data-code","phone");
	  	  var html=$("#ctCode").html();
	  	 
	  	   var appointDate=$("input[data-appointDate]").val(); //验证码
		   var currentDate=getHandleDate(new Date().getTime());
		   
		   //预约代还日期为当天，给出提示
		   if(appointDate==currentDate){
			 location.href="bill_cancel_01?flag="+cTip02;
			 return; 
			 
			 
		   }else{ //执行取消账单操作
			   
			   var index=layer.open({
		  			anim: 'up',
		  			area: '500px' ,
		  			closeBtn:1,
		  			content: html,
		  			shadeClose:false
		  		});
		  	  
		  	  //获取验证码
		  	  $(".layui-m-layercont").find("#checkcode").get(0).onclick = dynamic; 
		  	  
		  	  //取消
		  	  $(".layui-m-layercont").find("button[data-cancel]").on("click",function(){
		  		  layer.close(index);
		  		 sendCodeFlag=false;
		  		  
		  	  });
		  	  
		  	  //确认-解约
		  	  $(".layui-m-layercont").find("button[data-confirm]").on("click",function(){
		  		  
		  		  if(!sendCodeFlag){
		  			     MessageWin("请点击获取验证码！" );
			  			 return;
			  		  }
		  		   var $selector=$(this).parents(".custom-code-wrapper ");
		  		   var orderId=$selector.find("input[data-order]").val(); //订单编号   
		  		   var phoneCode=$selector.find("input[data-input]").val(); //验证码
		  		   
		  		   if($.trim(phoneCode)==""){
		  			    MessageWin("请输入验证码！");
		  			   return;
		  		   }
		  		   $.post("surrender",{orderId:orderId, vefCode: phoneCode},function(data){
		  			   
		  			   if(data &&data.code&&data.code=="0000"){
			  				  //页面跳转
			  				   location.href="bill_cancel_01?flag="+cTip01;
			  				   
			  			   }else{
			  				 
			  				 layer.close(index);
			  				 MessageWin(data.msg);
			  				 
			  			   }
		  				   
		  			   
		  		   });
	  		  
		  	   });
			   
			   
		   }
	  	  
	  
  }
  
  /*获取当前日期*/
  function getHandleDate(ms){
	   var date=new Date(ms);
	   var month= date.getMonth()+1 +"";
	   if(month.length<2){
	 	 month="0"+month;
	  }
	   var day= date.getDate() +"";
	   if(day.length<2){
	 	 day="0"+day;
	  }
	   
	  var handleDate=date.getFullYear()+"-"+month+"-"+day;
	  return handleDate;
	}
  