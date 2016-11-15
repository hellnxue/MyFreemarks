$(function(){
	
	// 初期化加载证件类型
	var request = {};
	
	// 枚举值类型--证件类型
	request.codeType = '01';
	
	CommonUtil.executeAjax("0400002",request,function(data) {
		var codeList = data.responseBody.codeList;
		if (codeList&&codeList.length>0) {
			var html = '<option value="">--请选择--</option>';
			for (var key in codeList) {
				var code = codeList[key];
				html += '<option value='+code.codeValue+'>'+code.codeName+'</option>';
			}
			$("#certType").html(html);
		} else {
			promt("未加载到证件类型信息");
		}
	}, false);
});

// 身份核实
function validateCard(){
	
	// 姓名
	var name = trimStr($("#name").val());
	if (!name) {
		promt("姓名不能为空");
		return;
	}
	
	// 代理人编号
	var dlrNo = trimStr($("#dlrNo").val());
	if (!dlrNo) {
		promt("代理人编号不能为空");
		return;
	}
	
	// 证件类型
	var certType = $("#certType").val();
	if (!certType) {
		promt("证件类型不能为空");
		return;
	}
	
	// 证件号码
	var certNum = trimStr($("#certNum").val());
	if (!certNum) {
		promt("证件号码不能为空");
		return;
	} else {
		// 证件类型是身份证的情况
		if (certType=='C') {
			if (!checkedIdcard(certNum)) {
				promt("证件号码不正确");
				return;
			}
		}
	}
	
	var request = {};
	request.userName = name; // 姓名
	request.agentCode = dlrNo; // 代理人编号
	request.certType = certType; // 证件类型
	request.certNum = certNum; // 证件号码
	
	CommonUtil.executeAjax("0200002",request,function(data) {
		var response = data.responseBody;
		// 身份核实结果 0:无效 1:有效 2:已绑定
		if (response.msgCode=='0') {
			promt(response.msg);
			return;
		} else if (response.msgCode=='1') {
			// 姓名
			sessionStorage.userName = name;
			// 代理人编号
			sessionStorage.dlrNo = dlrNo;
			// 代理人表ID(用户id)
			sessionStorage.userId = response.userId;
			
			// 跳转到短信验证页面
			location = 'mobileBinding.html?mobile='+response.mobileNum;
		} else if (response.msgCode=='2') {
			promt(response.msg);
			return;
		}
	}, false);
}