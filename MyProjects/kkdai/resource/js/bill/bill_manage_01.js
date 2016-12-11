$(document).ready(function(){
	$.ajax({
		async: false,
		type: 'POST',
		dataType: 'json',
		url: 'bill_manage_01_list',
		data: {},
		success: function(data) {
			var str = '';
			$(data).each(function(i,obj) {
				alert(obj.aa);
				alert(obj.bb);
				if(i == 0){
					str +=  "<div class='box_wrap2 mt20'>";
				}
				str +=  "<div class='box_wrap2'>" +
							"<div class='title2'>" +
								"订单日期：2016-09-09" +
								"<div class='pos_a_r'>订单编号：20200202</div>" +
							"</div>" +
							"<div class='form_wrap form_noborder'>" +
								"<div class='form-group hd'>" +
									"<label class='control-label'>代还金额：</label>" +
									"1000元" +
								"</div>" +
								"<div class='form-group'>" +
									"<label class='control-label'>代还卡号：</label>" +
									"62226 6226 2020 2232" +
								"</div>" +
								"<div class='form-group'>" +
									"<label class='control-label'>预约代扣日期：</label>" +
									"2016-06-12" +
								"</div>" +
								"<div class='form-group'>" +
									"<label class='control-label'>应还日期：</label>" +
									"2016-06-12" +
								"</div>" +
								"<div class='form-group'>" +
									"<label class='control-label'>每月应还：</label>" +
									"245.00元" +
								"</div>" +
								"<a href='./bill_manage_02.html' class='icon ico_next pos_a_r'></a>" +
							"</div>" +
							"<div class='form_ft'><bdo class='c_orange'>状态：成功</bdo></div>" +
						"</div>";
			});
			$('.maincontainer').html(str);
		}
	});
});