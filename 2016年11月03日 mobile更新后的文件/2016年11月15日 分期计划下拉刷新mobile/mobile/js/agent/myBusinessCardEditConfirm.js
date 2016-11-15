$(function(){
	var obj = sessionStorage.agentCard;
	obj = eval('(' + obj + ')');
	$("#visAct").text(obj.visitAccount);
	$("#head").attr("src",obj.imgURL);
	$("#cardInfo").html(obj.cardInfo);
	$("#bizPic").html(obj.bizPic);
	$("#honor").text(obj.honor);
	$("#email").val(obj.email);
	$("#email").attr("readonly","readonly");
	$("#wxNum").val(obj.wxNum);
	$("#wxNum").attr("readonly","readonly");
	$("#honor").attr("readonly","readonly");
	$(".wdmp_08_con_photo_close").remove();
	$("#addFc").remove();
	$(".close_span").remove();
	
	$("#updateBt").bind("click",updateCard);
});


function updateCard(){
	var userId = sessionStorage.dlrNo;
	var headPhoto = $("#head").attr("src");
	var weixinAccount = $("#wxNum").val();
	var email = $("#email").val();
	var honor = $("#honor").val()
	var bizcardPic = new Array();
	var bizcardPicVo = {};
	for(var i=0;i<$(".grsrc").length;i++){
		bizcardPicVo.picUrl = $(".grsrc").eq(i).attr("src");
		bizcardPicVo.cardId = $(".grsrc").eq(i).attr("cardId");
		bizcardPic[i] = bizcardPicVo;
	}
	var request = {};
	
	// 代理人编号
	request.userId = userId;
	// 状态
	request.headPhoto = headPhoto;
	
	request.weixinAccount = weixinAccount;
	
	request.email = email;
	
	request.honor = honor;
	
	request.bizcardPic = bizcardPic;
	
	//测试用
	request.userId = 1;
	
	
	CommonUtil.executeAjax("0200012",request,function(data) {
		var msg = data.responseBody.msg;
		var msgCode = data.responseBody.msgCode;
		if(msgCode == 0){
			promt("修改失败，请稍后再试！");
			return;
		}else{
			window.location.href = "myBusinessCardEditPreview.html";
		}
	}, false);
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