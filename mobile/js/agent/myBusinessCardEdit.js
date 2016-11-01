var fcIndex = 0;
$(function(){
	getMyBusCard();
	$(".img_span").bind("click",function(){
		uploadPic(1);
	});
	$("#addFc").bind("click",function(){
		uploadPic(2);
	});
	$("#subButton").bind("click",function(){
		goConfirm();
	});
});

function removeFC(id){
	$("#grfc"+id).remove();
	if (myScroll) 
		myScroll.refresh();
}

function addFc(){
	var length = $(".grfc").length;
	if (length >=3){
		promt("个人风采最多只能添加3张");
		return;
	}
	//调用微信选照片 TODO	
}

function getMyBusCard(){
	// 初期化加载证件类型
	var request = {};
	
	// 枚举值类型--用户ID
	request.agentCode = sessionStorage.dlrId;
	
	//测试用
	request.agentCode = 1;
	
	CommonUtil.executeAjax("0200010",request,function(data) {
		var agentCardInfo = data.responseBody.agentCardInfo;
		var bizcardPic = data.responseBody.agentCardInfo.bizcardPic;
		//1-新建，2-审核中，3-待发布，4-已发布，5-审核不通过，6-已下线[mx1]   [mx1]自定义审核状态
		var status = agentCardInfo.reviewStatus;
		
		switch (status){
		
		case "1":
			initCardPageByStatus(1);
			break;
		case "2":
			initCardPageByStatus(2);
			break;
		case "3":
			initCardPageByStatus(3);
			break;
		case "4":
			initCardPageByStatus(3);
			break;
		case "5":
			initCardPageByStatus(1);
			break;
		}
		
		var html = '';
		html += '<tr>';
		html += '<th width="1%" colspan="2">姓　　名： '+agentCardInfo.name+'</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th colspan="2">职　　级： '+agentCardInfo.rank+'</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th colspan="2">手机号码： '+agentCardInfo.mobile+'</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th colspan="2">公司地址： '+agentCardInfo.address+'</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th colspan="2">展业证号： '+agentCardInfo.agentCertNum+'</th>';
		html += '</tr>';
		html += '<tr class="tr_border_bt">';
		html += '<th width="1%">微  信 号 ：</th>';
		if(agentCardInfo.weixinAccount){
			html += '<td><input id="wxNum" maxlength="30" class="input_none width_wio_98" value="'+agentCardInfo.weixinAccount+'"><span class="close_span"></span></td>';
		}else{
			html += '<td><input id="wxNum" maxlength="30" class="input_none width_wio_98"><span class="close_span"></span></td>';
		}
		html += '</tr>';
		html += '<tr class="tr_border_bt">';
		html += '<th>邮　　箱：</th>';
		if(agentCardInfo.email){
			html += '<td><input id="email" maxlength="40" class="input_none width_wio_98" value="'+agentCardInfo.email+'"><span class="close_span"></span></td>';
		}else{
			html += '<td><input id="email" maxlength="40" class="input_none width_wio_98"><span class="close_span"></span></td>';
		}
		html += '</tr>';
		
		var html2 = '';
		for (var key in bizcardPic) {
		var code = bizcardPic[key];
		html2 += '<div class="wdmp_08_con_photo_4 wdmp_08_con_photo_m_4 grfc" fcType="2" id="grfc'+fcIndex+'">';
		html2 += '<span class="wdmp_08_con_photo_close" onclick="removeFC('+fcIndex+')"></span>';
		html2 += '<div class="img_div">';
		html2 += '<img class="grsrc" cardId="'+code.cardId+'" style="width:100%" src="'+code.picUrl+'">';
		html2 += '</div>';
		html2 += '</div>';
		fcIndex++;
		}
		html2 += '<div class="wdmp_08_con_photo_4 wdmp_08_con_photo_m_4" id="addFc">';
		html2 += '<div class="img_div wdmp_08_con_new_photo"><!--img_div只为js宽高相等使用-->';
		html2 += '</div>';
		html2 += '</div>';
		html2 += '<div class=" height_1"></div>';
		
		$("#visAct").text(agentCardInfo.visitNum||"0");
		$("#cardInfo").html(html);
		$("#bizPic").html(html2);
		$(".wdmp_08_con_photo").height($(".wdmp_08_con_photo").width());
		$(".img_div").height($(".img_div").width());
		$("#head").attr("src",agentCardInfo.headPhoto);
		$("#honor").val(agentCardInfo.honor||"");
		if (myScroll) 
			myScroll.refresh();
	}, false);
	//累积访问人数
	
	
}


function initCardPageByStatus(status){
	// 新建或审核不通过，导航条“待提交”高亮，“审核中”，“已审核”显示为灰色，底部显示修改按钮，右上角屏蔽分享按钮
	if(status == 1){
		$(".card_status").removeClass("wdmp_08_top_div_con_yes");
		$("#sta1").removeClass("wdmp_08_top_div_con");
		$("#sta1").addClass("wdmp_08_top_div_con_yes");
		$("#subBut").show();
		wx.hideOptionMenu();
	// 状态为审核中，导航条“审核中”高亮，“待提交”，“已审核”显示为灰色，底部隐藏修改按钮，右上角屏蔽分享按钮		
	}else if(status == 2){
		$(".card_status").removeClass("wdmp_08_top_div_con_yes");
		$("#sta2").removeClass("wdmp_08_top_div_con");
		$("#sta2").addClass("wdmp_08_top_div_con_yes");
		$("#subBut").hide();
		wx.hideOptionMenu();
	// 状态为审核通过，导航条“已审核”高亮，“待提交”，“审核中”显示为灰色，底部显示修改按钮，右上角显示分享按钮	
	}else{
		$(".card_status").removeClass("wdmp_08_top_div_con_yes");
		$("#sta3").removeClass("wdmp_08_top_div_con");
		$("#sta3").addClass("wdmp_08_top_div_con_yes");
		$("#subBut").show();
		wx.showOptionMenu();
	}
	
}



function uploadPic(type){
	//上传头像
	if(type == 1){

		var request = {};
		request.url = window.location.href; // 当前的页面url
		CommonUtil.executeAjax("0400005",request,function(data) {
			var response = data.responseBody;
			wx.config({
				debug : false,
				appId : response.appid, // 公众号的唯一标识
				timestamp : response.timestamp, // 生成签名的时间戳
				nonceStr : response.nonceStr, // 生成签名的随机串
				signature : response.signature, // 签名
				jsApiList : ['checkJsApi','chooseImage','uploadImage'] 
			});
		},false);
		
		wx.ready(function() {
			 var images = {
		        localId: [],
		        serverId: []
		      };
			wx.checkJsApi({
				jsApiList : ['chooseImage','uploadImage'],
				success : function(res) {
					// 如果是ok的话，代表支持
					if (res.checkResult.chooseImage&&res.checkResult.uploadImage) {
						images.localId = [];
						wx.chooseImage({
						    count: 1, // 默认9
						    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						    success: function (res) {
						    	images.localId = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						        if (images.localId.length == 0) {
						            alert('请选择一张图片!');
						            return;
						         } else if(images.localId.length>1){
						        	 alert('个人头像只能选择一张图片!');
							            return;
						         }
						         
						          // 上传图片
								  i = 0 , i <images.localId.length-1;
						          function upload() {
						            wx.uploadImage({
						              localId: images.localId[i],
						              success: function (res) {
						            	
						                i++;
						                if (i < images.localId.length) {
						                  upload();
						                }
						              },
						              fail: function (res) {
						                alert(JSON.stringify(res));
						              }
						            });
						          }
						          upload();
						      	var html = '';
								for (var j in images.localId) {
						        	var picture = res.localIds[j];
						        	$("#head").attr("src",picture);
						        }
						    }
						});
					
					} else {
						alert('update your wechat version!');
					}
				}
			});
			
			// 错误处理！
			wx.error(function(res) {
			});
		});
	
	//上传个人风采	
	}else{
		var length = $(".grfc").length;
		if (length >=3){
			promt("个人风采最多只能添加3张");
			return;
		}
		var maxlength = 3-length;
		var request = {};
		request.url = window.location.href; // 当前的页面url
		CommonUtil.executeAjax("0400005",request,function(data) {
			var response = data.responseBody;
			wx.config({
				debug : false,
				appId : response.appid, // 公众号的唯一标识
				timestamp : response.timestamp, // 生成签名的时间戳
				nonceStr : response.nonceStr, // 生成签名的随机串
				signature : response.signature, // 签名
				jsApiList : ['checkJsApi','chooseImage','uploadImage'] 
			});
		},false);
		
		wx.ready(function() {
			 var images = {
		        localId: [],
		        serverId: []
		      };
			wx.checkJsApi({
				jsApiList : ['chooseImage','uploadImage'],
				success : function(res) {
					// 如果是ok的话，代表支持
					if (res.checkResult.chooseImage&&res.checkResult.uploadImage) {
						images.localId = [];
						wx.chooseImage({
						    count: 1, // 默认9
						    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						    success: function (res) {
						    	images.localId = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						        if (images.localId.length == 0) {
						            alert('请选择一张图片!');
						            return;
						         } else if(images.localId.length>maxLength){
						        	 alert('个人风采最多三张!');
							            return;
						         }
						         
						          // 上传图片
								  i = 0 , i <images.localId.length-1;
						          function upload() {
						            wx.uploadImage({
						              localId: images.localId[i],
						              success: function (res) {
						            	
						                i++;
						                if (i < images.localId.length) {
						                  upload();
						                }
						              },
						              fail: function (res) {
						                alert(JSON.stringify(res));
						              }
						            });
						          }
						          upload();
						          var html = '';
									for (var j in images.localId) {
							        	var picture = res.localIds[j];
							        	html2 += '<div class="wdmp_08_con_photo grfc" fcType="2" id="grfc'+fcIndex+'">';
							    		html2 += '<span class="wdmp_08_con_photo_close" onclick="removeFC('+fcIndex+')"></span>';
							    		html2 += '<div class="img_div">';
							    		html2 += '<img class="grsrc" style="width:100%" src="'+picture+'">';
							    		html2 += '</div>';
							    		html2 += '</div>';
							        }
									$("#addFc").prepend(html);  
									if (myScroll) 
										myScroll.refresh();
						    }
						});
						
					} else {
						alert('update your wechat version!');
					}
				}
			});
			
			// 错误处理！
			wx.error(function(res) {
			});
		});
	}
}

function goConfirm(){
	if(!$("#wxNum").val()||!$("#email").val()){
		promt("微信号与邮箱不可为空！");
		return;
	}
	var obj = {};
	obj.wxNum = $("#wxNum").val();
	obj.email = $("#email").val();
	obj.visitAccount = $("#visAct").text();
	obj.imgURL = $("#head").attr("src");
	obj.cardInfo = $("#cardInfo").html();
	obj.bizPic = $("#bizPic").html();
	obj.honor = $("#honor").val();
	obj.cardTop = $("#cardTop").html();
	sessionStorage.agentCard = JSON.stringify(obj);
	window.location.href = "myBusinessCardEditConfirm.html";
}