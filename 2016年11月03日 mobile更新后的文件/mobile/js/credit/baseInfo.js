// 基本信息验证
//var idCardMd5;
//var merCode;
$(function(){
	//获取参数
	var content = getQueryUrlParamVal("obj");
	//解密
	var desss =  getEncriptParams(content,null);
	
	var customerName = decodeURI(desss.customerName);
	var merCode = desss.merCode;
	var idCardMd5 = desss.md5IdCard;
	var mobileNo = desss.mobileNo;
	if(customerName){
		$("#userName").html(customerName);
	}
	if(merCode){
		$("#merCode").val(merCode);
	}
	if(idCardMd5){
		$("#idCardMd5").val(idCardMd5);
	}
	if(mobileNo){
		$("#mobileNo").val(mobileNo);
	}
	//加载机构
	findOffice("branch");
});
function f_commit(){
	
	var userName = trimStr($("#userName").html());
	if (!userName) {
		promt("姓名不能为空");
		return;
	}
	
	var idCard = trimStr($("#idCard").val());
	if (!idCard) {
		promt("身份证号码不能为空");
		return;
	}
	
//	if(!checkedIdcard(idCard)){
//		promt("身份证号码无效");
//		return;
//	}
	
	var branch = $("#branch").val();
	if (!branch || $("#branchH4").html()=='请选择公司名称') {
		promt("所属公司不能为空");
		return;
	}
	
	var jobLevel = $("#jobLevel").val();
	if (!jobLevel || $("#jobLevelH4").html()=='请选择职级') {
		promt("职级不能为空");
		return;
	}
	
	var monSalary = trimStr($("#monSalary").val());
	if (!monSalary) {
		promt("每月收入不能为空");
		return;
	}
	
	var merCode = trimStr($("#merCode").val());
	var idCardMd5 = trimStr($("#idCardMd5").val());
	var request = {};
	request.customerName = userName; // 姓名
	request.idCard = idCard; // 身份证号码
	request.companyName = branch; // 所属公司
	request.rank = jobLevel; // 职级
	request.monthlySalary = monSalary; // 月收入
	request.merCode = merCode;  // 商户号
	request.md5IdCard = idCardMd5;
	alert(request);
	CommonUtil.executeAjax("0100001",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 基本信息是否正确 0:不正确 1:正确
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			var obj = JSON.stringify(data.responseBody);
			location = 'cardValidator.html?obj='+obj;
		}
	}, false);
}

function findOffice(type){
	var parentCode = "";
	if(type == 'branch'){
		parentCode = '1000000';
	}
	if(type == 'jobLevel'){
		parentCode = $("#branch").val();
	}
	var url = "/emploan/credit/findOffice";
	$.ajax({
		url: url,
		data:{code:parentCode},
		type:"post",
		cache: false,
		async: true,
		success:function(data){
			codeList = JSON.parse(JSON.stringify(data));
			if (codeList&&codeList.length>0) {
				var html = '';
				for (var key in codeList) {
					var code = codeList[key];
					html += '<option value='+code.codeValue+'>'+code.codeName+'</option>';
				}
				$("#" + type).html(html);
				
				if(type == 'jobLevel' && $("#jobLevelH4").html()!='请选择职级'){
					$("#jobLevel option:first").selected;
					$("#jobLevelH4").html($("#jobLevel option:first").text());
					//alert($("#jobLevel").val());
				}
			}
		}
	});
}
