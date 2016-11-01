$(function(){
	getCustomerDetail();
});


function getCustomerDetail(){
var request = {};
	
	// 代理人编号
	request.custId = getParam("custId");
	
	// 客户类型 0-访客，1-获客
	request.custType = getParam("custType");

//	if(!request.custId||!request.custType) promt("系统异常，请稍后再试！") return;
	
	//测试用数据
//	request.userId = 1;
//	request.activityId = ;
//	request.type = 0;
	//测试完毕
	CommonUtil.executeAjax("0200024",request,function(data) {
		var customerInfo = data.responseBody.customerInfo;
		if (customerInfo) {
			var html = '' ;
			var html2 = '';
			html += '<tr>';
			html += '<td width="1%">姓　　名：</td>';
			html += '<td>'+customerInfo.name+'</td>';
			html += '<th>微 信 号 ：</th>';
			html += 'td width="1%">'+customerInfo.openid+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td>移动电话：</td>';
			html += '<td>'+customerInfo.mobileNum+'</td>';
			html += '<th>证件类型：</th>';
			html += '<td>'+customerInfo.certType+'</td>';
			html += '</tr>';
			html += '<tr>';
			html += '<td colspan="4">证件号码：'+customerInfo.certNum+'</td>';
			html += '</tr>';
			
			html2 += '<tr>';
			html2 += '<td>职       业：'+customerInfo.occupationCodeName+'</td>';
			html2 += '</tr>';
			html2 += '<tr>';
			html2 += '<td>地       址：'+customerInfo.addProvince+customerInfo.addCity+customerInfo.addDistrict+customerInfo.addDetail+'</td>';
			html2 += '</tr>';
			html2 += '<tr>';
			html2 += '<td>邮       箱：'+customerInfo.email+'</td>';
			html2 += '</tr>';
			html2 += '<tr>';
			html2 += '<td>是否为代理人：否</td>';
			html2 += '</tr>';
			
			$("#cusDetailTB2").html(html);
			
			
			myScroll.refresh();
		} else {
			promt("系统异常，请稍后再试！");
		}
	}, false);
}


