$(function(){
	
	// 获取保单基本信息
	var policyInfo = eval('('+getQueryUrlParamVal("policyInfo")+')');
	var policyHtml = '';
	if (policyInfo) {
		policyHtml += '<div class="kdjh_03_con_div">';
		policyHtml += '<p class="top_tit txt_org">保单基本信息</p>';
		policyHtml += '<div class="pad_w_1">';
		policyHtml += '<div class="height_1"></div>';
		policyHtml += '<table class="kdcx_04_table_xs">';
		policyHtml += '<tr>';
		policyHtml += '<td colspan="2">保险单号：'+policyInfo.policyNo+'</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<td colspan="2">保险产品：'+policyInfo.policyName+'</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<th>保险期间：</th>';
		policyHtml += '<td>自从'+policyInfo.effectiveDate+'起<br>至 '+policyInfo.end_date+'止</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<th>适用条款：</th>';
		policyHtml += '<td><i>《'+policyInfo.applicableTerms+'》</i></td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<th>保证内容：</th>';
		policyHtml += '<td>'+policyInfo.securityContent+'</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<td colspan="2">保险合计：'+policyInfo.insurancePremium+'元</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<td colspan="2">被保险人数：'+policyInfo.InsuredNum+'人</td>';
		policyHtml += '</tr>';
		policyHtml += '<tr>';
		policyHtml += '<th>销售单位：</th>';
		policyHtml += '<td>'+policyInfo.salesUnit+'</td>';
		policyHtml += '</tr>';
		policyHtml += '</table>';
		policyHtml += '<div class="height_1"></div>';
		policyHtml += '</div>';
		policyHtml += '</div>';
		policyHtml += '<div class="height_05"></div>';
	}
	
	// 被保人信息
	var insuredInfo = eval('('+getQueryUrlParamVal("insuredInfo")+')');
	var insuredHtml = '';
	if (insuredInfo) {
		insuredHtml += '<div class="kdjh_03_con_div">';
		insuredHtml += '<p class="top_tit txt_org">投保人信息</p>';
		insuredHtml += '<div class="pad_w_1">';
		insuredHtml += '<div class="height_1"></div>';
		insuredHtml += '<table class="kdcx_04_table_xs">';
		insuredHtml += '<tr>';
		insuredHtml += '<th style="vertical-align:middle">投保姓名：'+insuredInfo.name+'</th>';
		insuredHtml += '<td>证件类型：'+insuredInfo.certType+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '</table>';
		insuredHtml += '<table class="kdcx_04_table_xs">';
		insuredHtml += '<tr>';
		insuredHtml += '<td>证件号码：'+insuredInfo.certNum+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '<tr>';
		insuredHtml += '<td>投保地区：'+insuredInfo.InsuredArea+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '<tr>';
		insuredHtml += '<td>投保电话：'+insuredInfo.phoneNum+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '<tr>';
		insuredHtml += '<td>移动电话：'+insuredInfo.mobileNum+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '<tr>';
		insuredHtml += '<td>电子邮件：'+insuredInfo.email+'</td>';
		insuredHtml += '</tr>';
		insuredHtml += '</table>';
		insuredHtml += '<div class="height_1"></div>';
		insuredHtml += '</div>';
		insuredHtml += '</div>';
	}
	
	// 受益人信息
	var beneficiaryInfo = eval('('+getQueryUrlParamVal("beneficiaryInfo")+')');
	var beneficiaryHtml = '';
	if (beneficiaryInfo) {
		beneficiaryHtml += '<div class="kdjh_03_con_div">';
		beneficiaryHtml += '<p class="top_tit txt_org">被保险人信息</p>';
		beneficiaryHtml += '<div class="pad_w_1">';
		beneficiaryHtml += '<div class="height_1"></div>';
		beneficiaryHtml += '<table class="kdcx_04_table_xs">';
		beneficiaryHtml += '<tr>';
		beneficiaryHtml += '<th style="vertical-align:middle">投保姓名：'+beneficiaryInfo.name+'</th>';
		beneficiaryHtml += '<td>证件类型：'+beneficiaryInfo.certType+'</td>';
		beneficiaryHtml += '</tr>';
		beneficiaryHtml += '</table>';
		beneficiaryHtml += '<table class="kdcx_04_table_xs">';
		beneficiaryHtml += '<tr>';
		beneficiaryHtml += '<td>证件号码：'+beneficiaryInfo.certNum+'</td>';
		beneficiaryHtml += '</tr>';
		beneficiaryHtml += '<tr>';
		beneficiaryHtml += '<td>行业：'+beneficiaryInfo.industry+'</td>';
		beneficiaryHtml += '</tr>';
		beneficiaryHtml += '<tr>';
		beneficiaryHtml += '<td>职业：'+beneficiaryInfo.occupation+'</td>';
		beneficiaryHtml += '</tr>';
		beneficiaryHtml += '<tr>';
		beneficiaryHtml += '<td>工种：'+beneficiaryInfo.job+'</td>';
		beneficiaryHtml += '</tr>';
		beneficiaryHtml += '</table>';
		beneficiaryHtml += '<div class="height_1"></div>';
		beneficiaryHtml += '</div>';
		beneficiaryHtml += '</div>';
	}
	
	// 投保人信息
	var policyHolderInfo = eval('('+getQueryUrlParamVal("policyHolderInfo")+')');
	var policyHolderHtml = '';
	if (policyHolderInfo) {
		policyHolderHtml += '<div class="kdjh_03_con_div">';
		policyHolderHtml += '<p class="top_tit txt_org">受益人信息</p>';
		policyHolderHtml += '<div class="pad_w_1">';
		policyHolderHtml += '<div class="height_1"></div>';
		policyHolderHtml += '<table class="kdcx_04_table_xs">';
		policyHolderHtml += '<tr>';
		policyHolderHtml += '<td>身故保险金受益人姓名：'+policyHolderInfo.name+'</td>';
		policyHolderHtml += '</tr>';
		policyHolderHtml += '<tr>';
		policyHolderHtml += '<td>身故保险金受益人与被保险人的关系：'+policyHolderInfo.relation+'</td>';
		policyHolderHtml += '</tr>';
		policyHolderHtml += '</table>';
		policyHolderHtml += '<div class="height_1"></div>';
		policyHolderHtml += '</div>';
		policyHolderHtml += '</div>';
	}
	
	// 所有信息拼接
	var allHtml = '<div>';
	allHtml += policyHtml + insuredHtml + beneficiaryHtml + policyHolderHtml;
	allHtml += '<div class="height_2"></div>';
	allHtml += '<div class="pad_w_1 txtC">';
	allHtml += '<span class="btn_w_black width_wio_47">返回</span>';
	allHtml += '<div class=" clear"></div>';
	allHtml += '</div>';
	allHtml += '<div class="height_2"></div>';
	allHtml += '</div>';
	$("#wrapper").html(allHtml);	
	
	// 返回
	$(".btn_w_black").click(function(){
		location = 'insuranceOnline.html?back=policyDetailInfo';
	});
});