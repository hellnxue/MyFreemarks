 	mui.init();

	$(document).ready(function(){
		
		  initData();
	});
	
	function initData(){
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: 'refreshCard',
			data: {
				userId:userId,
				 
			}
		}).done(function(data){
			 
			if(data.code == "0000"){
				if(data.result){
					
					var html=template("ccList",data.result);
					var $html=$(html);
					$(".maincontainer").empty().append($html);
					
					$html.find(".dl_item").click(function(){
						$(this).siblings().removeClass("selected");
						$(this).addClass("selected");
					});
					$html.find("#b1").click(function(){
						var md5CreditNo = $(".selected").find('input').val();
						if(md5CreditNo!=null && md5CreditNo!=""){
							window.location.href="credit_card_02?md5CreditNo="+md5CreditNo; 
						}else{
//							MessageWin("请先选择代还信用卡!");
							promt("请先选择代还信用卡!");
						}
						
					});
					
					delCreditOrBankHandel($html);
					

				}
				
				 
			}else{
//				MessageWin(data.msg);
				mui.alert(data.msg, '提示',"确认");
			}
		 
			
		});
		
	}
	
	/*银行卡滑动删除*/
	function delCreditOrBankHandel($selector){
		
		var btnArray = ['确认', '取消'];
		
		$selector.find("ul").on('tap', '.mui-btn', function(event) {
			
			var $elem = $(this);
			var li = this.parentNode.parentNode;
			var type=$elem.parents("ul").data("type");
			var md5CardNo= $elem.parent().siblings("div").find('input[name="md5CreditNo"]').val();
			var msgType="确认要删除该信用卡吗？";
			
			if(type=="card"){
				
				 msgType="确认要替换该银行卡吗？";
				
			}
			mui.confirm(msgType, '提示', btnArray, function(e) {
				if (e.index == 0) {
					//信用卡删除
					if(type=="credit"){
						ajaxUtil({
							url:"deleteCard",
							data:{
								userId:userId,
								md5CardNo:md5CardNo
								
							},
							callback:function(data){
								if(data.code=="0000"){
									
									mui.alert("信用卡删除成功！", '提示',"确认",function(e){
										if(data.code=="0000"){
											//location="bind_credit_card_info";//银行卡信息
											 
											//当信用卡只有一张且删除以后，给出提示
											if($elem.parents("ul").find("li").length==1){
													$elem.parents("ul").html('<li class="mui-table-view-cell">'
															+'<div class="dl_tips">请绑定信用卡</div>'
															+'</li>');
											}else{
												$(li).remove();
											}
											
										}
								    });
								}else{
									mui.toast(data.msg,{ duration:'short', type:'div' }) ;
								}
								
								
							},
							failCallback:function(data){
								mui.toast(data.msg,{ duration:'short', type:'div' }) ;					
							}
						});
						
					}else{//借记卡替换
						
						location="bind_credit_card?type=J&from=replace";//银行卡信息
					}
					
					
				} else {
					setTimeout(function() {
						mui.swipeoutClose(li);
					}, 0);
				}
			});
		});
	}
	
	
	