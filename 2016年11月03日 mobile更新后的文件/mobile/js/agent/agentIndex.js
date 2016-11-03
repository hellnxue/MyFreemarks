$(function(){
	
	//测试用
	
	sessionStorage.wxInfo='{"headimgurl":"http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0"}';
	getAgentInfo();
});

function getAgentInfo(){
	 //以下为塞值动作
	 var agentName = sessionStorage.userName;
	 var agentId = sessionStorage.dlrNo;
	 $("#agentInfo").html("<p>"+agentName+"</p><p>"+agentId+"</p>");
	 var wxInfo = eval('('+sessionStorage.wxInfo+')');
	 //测试用
	 if(wxInfo){
		 $("#head").attr("src",wxInfo.headimgurl);
	 }else{
		 $("#head").attr("src","");
	 }
	 
}