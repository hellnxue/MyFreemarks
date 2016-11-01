$(function(){
	getAgentInfo();
});

function getAgentInfo(){
	var request = {};
	var agentCode = sessionStorage.agentCode;
	agentCode = 1;
	if(!agentCode){
		prompt("系统异常，请稍后再试！");
		return;
	}
	request.agentCode = agentCode;
	CommonUtil.executeAjax("0200008",request,function(data) {
		var userInfoVo = data.responseBody.userInfoVo;
		var cardFlag = data.responseBody.cardFlag;
		if(cardFlag == 1){
			$("#busCard").text("我的名片");
			//进入名片页
		}else{
			$("#busCard").text("生成名片");
			//生成名片
		}
		var headImgURL = sessionStorage.headimgurl;
//		var headImgURL = "../../img/img_tx.jpg";
		if (headImgURL) $("#headImg").attr("src",headImgURL);
		$(".agentCode").text(userInfoVo.agentCode);
		$(".agentName").text(userInfoVo.name);
		$(".birthDate").text(userInfoVo.birthday);
		$(".sex").text(userInfoVo.sex);
		$(".certType").text(userInfoVo.certType);
		$(".certNum").text(userInfoVo.certNum);
		$(".mobileNum").text(userInfoVo.mobileNum);
		$(".bankName").text(userInfoVo.bankName);
		$(".bankAccount").text(userInfoVo.bankAccount);
		$(".referee").text(userInfoVo.referee);
		$(".raisePerson").text(userInfoVo.raisePerson);
		$(".rank").text(userInfoVo.rank);
		$(".saleOrg").text(userInfoVo.saleOrg);
		$(".orgName").text(userInfoVo.orgName);
	});
}


