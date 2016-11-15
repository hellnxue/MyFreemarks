var curInfo;
var policyInfo = getQueryUrlParamVal("curInfo");
$(function(){
	
	// 获取投保信息
	curInfo = eval('('+policyInfo+')');
	
	// 被保人信息
	var insuredHtml = '<div class="height_1"></div>';
	insuredHtml += '<p class="p_xs">姓　　名：'+curInfo.name+'</p>';
	insuredHtml += '<p class="p_xs">证件类型：'+cardMap[curInfo.certType]+'</p>';
	insuredHtml += '<p class="p_xs">证件号码：'+curInfo.cardNo+'</p>';
	insuredHtml += '<p class="p_xs">性　　别：'+genderMap[curInfo.sex]+'</p>';
	insuredHtml += '<p class="p_xs">出生日期：'+curInfo.custBirth+'</p>';
	insuredHtml += '<p class="p_xs">移动电话： '+curInfo.mobile+'</p>';
	insuredHtml += '<p class="p_xs">行　　业：'+curInfo.occupation+'</p>';
	insuredHtml += '<p class="p_xs">职　　业：'+curInfo.profession+'</p>';
	insuredHtml += '<p class="p_xs">工　　种：'+curInfo.vocation+'</p>';
	insuredHtml += '<p class="p_xs">联系电话：'+curInfo.telephone+'</p>';
	insuredHtml += '<p class="p_xs">电子邮箱：'+curInfo.email+'</p>';
	insuredHtml += '<p class="p_xs">通讯地址：'+curInfo.address+'</p>';
	insuredHtml += '<p class="p_xs">邮　　编：'+curInfo.postCode+'</p>';
	insuredHtml += '<p class="p_xs">投保人是被保险人的：  本人</p>';
	insuredHtml += '<div class="height_1"></div>';
    $("#insuredInfo").html(insuredHtml);
    
    // 投保人信息
    var applicantHtml = '<div class="height_1"></div>';
    applicantHtml += '<p class="p_xs">姓　　名：'+curInfo.name+'</p>';
    applicantHtml += '<p class="p_xs">证件类型：'+cardMap[curInfo.certType]+'</p>';
    applicantHtml += '<p class="p_xs">证件号码：'+curInfo.cardNo+'</p>';
    applicantHtml += '<p class="p_xs">性　　别：'+genderMap[curInfo.sex]+'</p>';
    applicantHtml += '<p class="p_xs">出生日期：'+curInfo.custBirth+'</p>';
    applicantHtml += '<p class="p_xs">移动电话：'+curInfo.mobile+'</p>';
    applicantHtml += '<p class="p_xs">联系电话：'+curInfo.telephone+'</p>';
    applicantHtml += '<p class="p_xs">电子邮箱：'+curInfo.email+'</p>';
    applicantHtml += '<div class="height_1"></div>';
    $("#applicantInfo").html(applicantHtml);
    
    // 受益人信息
    var beneficiaryHtml = '<div class="height_1"></div>';
    beneficiaryHtml += '<p class="p_xs">与被保险人的关系： '+curInfo.relationship+'</p>';
    beneficiaryHtml += '<p class="p_xs">受益人姓名：'+curInfo.beneficiaryName+'</p>';
    beneficiaryHtml += '<p class="p_xs">受益人身份证号： '+curInfo.beneficiaryCardNo+'</p>';
    beneficiaryHtml += '<div class="height_1"></div>';
    $("#beneficiaryInfo").html(beneficiaryHtml);
});

// 返回修改
function back() {
	
	// 跳转到投保信息页面
	location = 'insuredInfo.html?curInfo='+policyInfo;
}

// 确认提交
function commit() {
	
	var request = {};
	request.name = curInfo.name; // 姓名
	request.certificateType = curInfo.certType; // 证件类型
	request.certificateNo = curInfo.cardNo; // 证件号码
	request.sex = curInfo.sex; // 性别
	request.birthday = curInfo.custBirth; // 出生日期
	request.Mobilephone= curInfo.mobile; // 移动电话
	// 职业
	request.occupation = curInfo.vocation;
	request.telphone = curInfo.telephone; // 联系电话
	request.eMail = curInfo.email; // 电子邮箱
	request.address = curInfo.address; // 通讯地址
	request.postcode = curInfo.postCode; // 邮编
	request.isInsured = '本人'; // 投保人是被保人的
	
	// ajax请求
	CommonUtil.executeAjax("0100002",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 投保结果 0:投保失败 1:投保成功
		if (msgCode=='0') {
			promt("投保失败");
			return;
		} else {
			// 跳转到投保成功页面
			location = 'insuredSucceed.html';
		}
	}, false);
	
}
