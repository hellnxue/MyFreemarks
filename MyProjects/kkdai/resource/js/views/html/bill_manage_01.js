	var wait = 60;
	var sendCodeFlag=false;
	var cTip01="success";
	var cTip02="tipOnly";
	var lyIndex;//layer层标记
	
	//分页
	var pageIndex=1,
	pageSize=10,
	moreInfo=true,
	pullrefresh='#pullrefresh',
	pullBottomTextSelector=".mui-scroll .mui-pull-bottom-pocket",
	pullBottomMTop="m-t-xxxl" ;

	
	mui.init({ 
		pullRefresh: {
			container:  pullrefresh,
			down: {
				callback:  pulldownRefresh,
				contentdown : "下拉刷新", 
			    contentover : "释放更新", 
			    contentrefresh : "加载中...", 
			},
			up: {
				contentrefresh: '加载更多...',
				callback:  pullupRefresh
			}
		}
	});
		
		
	 
	if (mui.os.plus) {
		mui.plusReady(function() {
			setTimeout(function() {
				mui( pullrefresh).pullRefresh().pullupLoading();
			}, 1000);

		});
	} else {
		mui.ready(function() {
			mui( pullrefresh).pullRefresh().pullupLoading();
		});
	}
	
	
 
	
	//数据初始化渲染 
	function postDate(status){
		 
		var flag=false;//是否有数据结果标示
		setTimeout(function() {
			 $.post("kakadai/order/orderInfo",
				   {
				 	userId: sessionUserId,
				 	account:'baifutianxia',
				 	pageSize:pageSize,
				 	pageIndex:pageIndex
				 	},
				 	function(res){
					  
					 	 if(res.code != '0000') {
					 		 
					 		 mui.toast("获取账单列表失败！"+res.msg,{ duration:'short', type:'div' }) ;
					 		 
					 		if(status=="pullDown"){ 
					 			
					 			//停止刷新
								mui(pullrefresh).pullRefresh().endPulldownToRefresh();
								
							}else{//禁用上拉加载
								
						 		 mui(pullrefresh).pullRefresh().endPullupToRefresh(true); 
							}
					 		
					 		 $(pullBottomTextSelector).addClass(pullBottomMTop);
					 		 
					 		 return;
					 	 }
					 	 
					 	 if(res.result&&res.result.length>0){
					 		
					 		if( $(pullBottomTextSelector).hasClass(pullBottomMTop)){
					 			
					 			 $(pullBottomTextSelector).removeClass(pullBottomMTop);
					 		}
					 		
					 		

							 
							 var $maincontainer = $("ul[data-bill-items]");
						 		 
					 		 var html=template("billManageTemplate",res);
					 		 var $html=$(html);
						 		 
					 		if(pageIndex==1){
					 			
					 			$maincontainer.empty().append($html);
					 			
					 			
							}else{
								 
								$maincontainer.append($html);
								
							}
					 		
					 		pageIndex++;
	
							//取消订单 	
						 	$html.find('[data-type="cancel"]').each(function(){
						 		this.addEventListener("tap",function(){
						 			orderCancel(this);
						 		});
						 	});
						 	
						 	//账单详情
							$html.find('[data-href]').each(function(){
						 		this.addEventListener("tap",function(){
						 			mui.openWindow({
									    url:$(this).data("href"),
									    id:$(this).data("href"),
									});
						 		});
						 	});
							
							 
						 }else{
							 
							flag=true;

						 } 
					 	
					 	 //停止下拉刷新或上拉加载更多
					 	if(status=="pullDown"){
					 		
							flag=false;
							mui(pullrefresh).pullRefresh().endPulldownToRefresh();//stop下拉刷新
							mui(pullrefresh).pullRefresh().refresh(true);//重置之前禁用掉的上拉加载更多
							
						}else{
							
							mui(pullrefresh).pullRefresh().endPullupToRefresh(flag);//stop上拉加载更多
						}
						
						//当没有更多数据时，禁用上拉加载更多
						if(flag){
							
							setTimeout(function(){
								
							    mui(pullrefresh).pullRefresh().disablePullupToRefresh();
							    
							    //启用上拉加载更多
//							    setTimeout(function(){
//							    	mui(pullrefresh).pullRefresh().enablePullupToRefresh();
//								}, 5000);
								
							}, 1000);
							
						}
						
						 //暂无账单信息
						 if(pageIndex==1&&res.result.length==0){
							 $("ul[data-bill-items]").html( $("#noMessage").clone().removeClass("none"));
							 return;
						 }
				 		
					 	

				  }) .fail(function(){
					  mui.alert("账单获取失败！", '提示',"确认");
		  		  });
			
		},1500);
		 
		
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
//			 location.href="bill_cancel_01?flag="+cTip02;
			 var href="bill_cancel_01?flag="+cTip02;
			 mui.openWindow({
				    url:href,
				    id:href,
				});
			 return; 
			 
			 
		   }else{ //执行取消账单操作
			   
			     lyIndex=layer.open({
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
		  		  layer.close(lyIndex);
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
//			  				 location.href="bill_cancel_01?flag="+cTip01;
			  				 var cHref= "bill_cancel_01?flag="+cTip01;
			  				 mui.openWindow({
			 				    url:cHref,
			 				    id:cHref,
			 				});
			  				   
			  			   }else{
			  				 
			  				 layer.close(lyIndex);
			  				 MessageWin(data.msg);
			  				 
			  			   }
		  				   
		  			   
		  		   });
	  		  
		  	   });
			   
			   
		   }
	  	  
	  
  }
  
  /**
	 * 下拉刷新具体业务实现
	 */
	function pulldownRefresh() {
		
	    pageIndex=1;//页面数据重置
		postDate("pullDown");
	}

	/**
	 * 上拉加载具体业务实现
	 */
	function pullupRefresh() {
		
		postDate("pullUp");
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
			wait--;
			setTimeout(function() {
				time(o);
			}, 1000);
		}
	}

	function dynamic() {
		sendCodeFlag=true;
		var th=this;
		var $selector=$(this).parents(".custom-code-wrapper");
		$selector.find("button[data-confirm]").removeAttr("disabled"); //验证码
		
	    $.post("phoneDynCode",{verifyKind:"JY"},function(data){ 
	    	
	    	if(data.result&&data.result.firendlyRem){
	    		
	    		$selector.find("p[data-friendly]").html(data.result.firendlyRem+"！&nbsp;");
	    	}
	    	
	    	if(data.code=="0000"){
	    		 
	    		time(th);
	    	}else{
	    		 layer.close(lyIndex);
	    		 MessageWin(data.msg);
	    		 
	    	}
	    });
	}
  