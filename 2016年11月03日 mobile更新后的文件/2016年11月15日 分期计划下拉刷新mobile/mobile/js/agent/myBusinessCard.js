$(function(){
	$("#subBut").bind("click",function(){
		window.location.href = "myBusinessCardEdit.html";
	});
	getMyBusCard();
});

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
		html += '<tr>';
		html += '<th colspan="2">微  信 号 ： '+agentCardInfo.weixinAccount+'</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th colspan="2">邮　　箱： '+agentCardInfo.email+'</th>';
		html += '</tr>';
		
		var html2 = '';
		for (var key in bizcardPic) {
		var code = bizcardPic[key];
		html2 += '<div class="wdmp_08_con_photo">';
		html2 += '<div class="img_div"><!--img_div只为js宽高相等使用-->';
		html2 += '<img class="grsrc"  cardId="'+code.cardId+'" style="width:100%" src="'+code.picUrl+'">';
		html2 += '</div>';
		html2 += '</div> ';
		}
		html2 += '<div class=" height_1"></div>';
		$("#visAct").text(agentCardInfo.visitNum||"0");
		$("#cardInfo").html(html);
		$("#bizPic").html(html2);
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
