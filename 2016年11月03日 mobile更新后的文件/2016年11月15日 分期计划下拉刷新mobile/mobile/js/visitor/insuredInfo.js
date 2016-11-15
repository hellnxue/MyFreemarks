$(function(){
	
	// 出生日期
	timepicker("custBirth");
	
	// 确认页面返回
	var curInfo = getQueryUrlParamVal("curInfo");
	if (curInfo) {
		var policyInfo = eval('('+curInfo+')');
		$("#name").val(policyInfo.name); // 姓名
		$("#certType").val(policyInfo.certType); // 证件类型
		// 证件类型身份证情况
		if (policyInfo.certType == 'C') {
			// 性别事件屏蔽
			$(".radio_blo_m span").unbind('click');
			// 出生日期屏蔽
			$("#custBirth").mobiscroll("disable");
		}
		$("#cardNo").val(policyInfo.cardNo); // 证件号码
		// 性别 0:女 1:男
		if (policyInfo.sex == '0') {
			$(".radio_blo_m span:eq(0)").attr("class","span_m_no");
			$(".radio_blo_m span:eq(1)").attr("class","span_m_cur");
		} else if (policyInfo.sex == '1') {
			$(".radio_blo_m span:eq(0)").attr("class","span_m_cur");
			$(".radio_blo_m span:eq(1)").attr("class","span_m_no");
		}
		$("#custBirth").val(policyInfo.custBirth); // 出生日期
		$("#mobile").val(policyInfo.mobile); // 移动电话
		$("#occupation").val(policyInfo.occupation); // 行业
		$("#profession").val(policyInfo.profession); // 职业
		$("#vocation").val(policyInfo.vocation); // 工种
		$("#telephone").val(policyInfo.telephone); // 联系电话
		$("#email").val(policyInfo.email); // 电子邮箱
		$("#address").val(policyInfo.address); // 通讯地址
		$("#postCode").val(policyInfo.postCode); // 邮编
		// 受益人信息
		$("#relationship").val(policyInfo.relationship); // 与被保险人关系
		$("#beneficiaryName").val(policyInfo.beneficiaryName); // 受益人姓名
		$("#beneficiaryCardNo").val(policyInfo.beneficiaryCardNo); // 受益人的身份证号
		
	}
	
	// 证件类型
	$("#certType").change(function(){
		// 身份证情况
		if ($(this).val() == 'C') {
			// 性别事件屏蔽
			$(".radio_blo_m span").unbind('click');
			// 出生日期屏蔽
			$("#custBirth").mobiscroll("disable");
		} else {
			// 绑定性别事件
			$(".radio_blo_m").radioAll2();
			// 出生日期事件
			timepicker("custBirth");
		}
	});
	
	// 证件号码
	$("#cardNo").blur(function(){
		if ($("#certType").val() == 'C') {
			// 查出性别
			var cardNo = $(this).val();
			var sex = getGenderByIdCard(cardNo);
			// 0:女 1:男
			if (sex == '0') {
				$(".radio_blo_m span:eq(0)").attr("class","span_m_no");
				$(".radio_blo_m span:eq(1)").attr("class","span_m_cur");
			} else {
				$(".radio_blo_m span:eq(0)").attr("class","span_m_cur");
				$(".radio_blo_m span:eq(1)").attr("class","span_m_no");
			}
			
			// 查出出身日期
			$("#custBirth").val(getBirthdayFromIdCard(cardNo));
		}
	});
});

// 重置
function reset() {
	
	// 清空文本框和下拉框中的内容
	$("input").each(function(){
		$(this).val('');
	});
	
	$("select").each(function(){
		$(this).val('');
	});
}

// 确定
function commit() {
	
	// 校验
	// 姓名
	var name = trimStr($("#name").val());
	if (!name) {
		promt('姓名不能为空');
		return;
	}
	
	// 证件类型
	var certType = trimStr($("#certType").val());
	if (!certType) {
		promt('证件类型不能为空');
		return;
	} 
	
	// 证件号码
	var cardNo = trimStr($("#cardNo").val());
	if (!cardNo) {
		promt('证件号码不能为空');
		return;
	} 
	
	// 当证件类型为身份证时
	if (certType == 'C') {
		if (!checkedIdcard(cardNo)) {
			promt('请输入有效的证件号码');
			return;
		}
	} else {
		// 当证件类型为其他时
		var custBirth = trimStr($("#custBirth").val());
		if (!custBirth) {
			promt('出生日期不能为空');
			return;
		}
	}
	
	// 移动电话
	var mobile = trimStr($("#mobile").val());
	if (!mobile) {
		promt('移动电话不能为空');
		return;
	}
	
	// 职业
	var occupation = trimStr($("#occupation").val());
	var profession = trimStr($("#profession").val());
	var vocation = trimStr($("#vocation").val());
	if (!occupation || !profession || !vocation) {
		promt('职业不能为空');
		return;
	}
	
	// 页面信息
	var request = {};
	request.name = name; // 姓名
	request.certType = certType; // 证件类型
	request.cardNo = cardNo; // 证件号码
	// 身份证
	var sexual;
	if (certType == 'C') {
		sexual = getGenderByIdCard(cardNo);
	} else {
		// 0:女 1:男
		if ($(".radio_blo_m span:eq(0)").hasClass("span_m_cur")) {
			sexual = '1';
		} else if ($(".radio_blo_m span:eq(1)").hasClass("span_m_cur")) {
			sexual = '0';
		}
	}
	request.sex = sexual; // 性别
	request.custBirth = trimStr($("#custBirth").val()); // 出生日期
	request.mobile= mobile; // 移动电话
	// 职业
	request.occupation = occupation;
	request.profession = profession;
	request.vocation = vocation;
	request.telephone = trimStr($("#telephone").val()); // 联系电话
	request.email = trimStr($("#email").val()); // 电子邮箱
	request.address = trimStr($("#address").val()); // 通讯地址
	request.postCode = trimStr($("#postCode").val()); // 邮编
	// 受益人信息
	request.relationship = trimStr($("#relationship").val()); // 与被保险人关系
	request.beneficiaryName = trimStr($("#beneficiaryName").val()); // 受益人姓名
	request.beneficiaryCardNo = trimStr($("#beneficiaryCardNo").val()); // 受益人的身份证号
	
	// 转换成json串
	var curInfo = JSON.stringify(request);
	// 跳转到投保信息详细页面
	location = 'insuredDetail.html?curInfo='+curInfo;
}