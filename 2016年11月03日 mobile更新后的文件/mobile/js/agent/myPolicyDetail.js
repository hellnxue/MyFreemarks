$(function(){

	var request = {};
	// 保单号
	request.policyNo = getQueryUrlParamVal("policyNo");
	
	// 请求
	CommonUtil.executeAjax("0200019",request,function(data){
		var policyInfo = data.responseBody.policyInfo;
		if (policyInfo) {
			// 所有保单
			var html = '<div>';
			html += '<div class="bdmx_19_div">';
			html += '<div class="con_top">';
			html += '<div>';
			html += '<p>产品名称：<strong>'+policyInfo.productName+'</strong></p>';
			html += '<p>保 单 号 ：<strong class="txt_org">'+policyInfo.policyNo+'</strong></p>';
			html += '</div>';
			html += '</div>';
			html += '<div class="con_top">';
			html += '<div>';
			html += '<table class="bdmx_table">';
			html += '<tr>';
			html += '<td width="1%">投 保 人 ：</td>';
			html += '<td>'+policyInfo.insurer+'</td>';
			html += '<th>被保人：</th>';
			html += '<td width="1%">'+policyInfo.insured+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td>保单状态：</td>';
			html += '<td>'+policyInfo.status+'</td>';
			html += '<th>生效日期：</th>';
			html += '<td>'+policyInfo.effectiveDate+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td>保险期间：</td>';
			html += '<td>'+policyInfo.endDate+'</td>';
			html += '<th>身故受益人：</th>';
			html += '<td>'+policyInfo.beneficiaryOfDeath+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td>投保渠道：</td>';
			html += '<td>'+policyInfo.insureanceChannel+'</td>';
			html += '<th>佣金月：</th>';
			html += '<td class="txt_org">'+policyInfo.monthOfCommission+'元</td>';
			html += '</tr>';
			html += '</table>';
			html += '</div>';
			html += '</div>';
			html += '<div class="con_top">';
			html += '<div>';
			html += '<table class="bdmx_table">';
			html += '<tr>';
			html += '<td width="1%">签收日期：</td>';
			html += '<td>'+policyInfo.signDate+'</td>';
			html += '<th>回销日期：</th>';
			html += '<td width="1%">'+policyInfo.resoldDate+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td width="1%">犹 豫 期 ：</td>';
			html += '<td>'+policyInfo.hesitateDate+'</td>';
			html += '<th>回访日期：</th>';
			html += '<td width="1%">'+policyInfo.revisitDate+'</td>';
			html += '</tr>';
			html += '</table>';
			html += '</div>';
			html += '</div>';
			html += '<div class="con_top">';
			html += '<div>';
			html += '<p>续期交费日期：'+policyInfo.renewalPayDate+'</p>';
			html += '<p>投保所属机构：'+policyInfo.policyOrg+'</p>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			html += '<div class="height_05"></div>';
			// 附加险列表
			html += '<div class="bdmx_19_div">';
			html += '<div class="title_fjxlb">附加险列表</div>';
			for (var key in policyInfo.extra) {
				var extra = policyInfo.extra[key];
				html += '<div class="con_top">';
				html += '<div>';
				html += '<p>险种名称：'+extra.policyName+'</p>';
				html += '<p>保       费：<b class="txt_org">'+extra.policyFee+'元</b>&nbsp;&nbsp;&nbsp;&nbsp;';
				html += '<span>保额/档次/分数：<b class="txt_org">'+extra.insuredSum+'元</b></span></p>';
				html += '</div>';
				html += '</div>';
			}
			html += '</div>';
			html += '</div>';
			$("#wrapper").append(html);
			myScroll.refresh();
		}
	},false);
});
