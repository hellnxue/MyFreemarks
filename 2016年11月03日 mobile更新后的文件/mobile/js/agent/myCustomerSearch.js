$(function(){
	$(".agentName").text("张三");
	$(".agentCode").text("JX000001");
	dateInit();
	$("#email").bind("blur",function(){
		if($("#email").val()){
			var flag = CommonUtil.isEmail($("#email").val());
			if(!flag){
				$("#email").val("")
				promt("请输入一个有效的邮箱地址！");
			} 
		}
		
	})
});

function dateInit(){
	var maxDate = new Date();
	maxDate.setMonth(maxDate.getMonth()+1);
	var minDate = new Date();
	minDate.setMonth(minDate.getMonth()-1);
	var createDateOpt = {
			preset : 'date', // 日期
			theme : 'android-ics', // 皮肤样式android android-ics ios jqm sense-ui wp
			display : 'modal', // 显示方式
			mode : 'scroller', // 日期选择模式
			dateFormat : 'yyyy-mm-dd', // 日期格式
			setText : '确定', // 确认按钮名称
			cancelText : '取消',// 取消按钮名称
			dateOrder : 'yymmdd', // 面板中日期排列格式
			dayText : '日',
			monthText : '月',
			yearText : '年', // 面板中年月日文字
			maxDate : maxDate,
			minDate : minDate,
			onSelect : function(data) {
				if($("#createDate").val()>$("#endDate").val()){
					promt("“创建日期起”不能晚于“创建日期止”");
					$("#createDate").val("")
					return;
				}
			}
		};
	
	var endDateOpt = {
			preset : 'date', // 日期
			theme : 'android-ics', // 皮肤样式android android-ics ios jqm sense-ui wp
			display : 'modal', // 显示方式
			mode : 'scroller', // 日期选择模式
			dateFormat : 'yyyy-mm-dd', // 日期格式
			setText : '确定', // 确认按钮名称
			cancelText : '取消',// 取消按钮名称
			dateOrder : 'yymmdd', // 面板中日期排列格式
			dayText : '日',
			monthText : '月',
			yearText : '年', // 面板中年月日文字
			maxDate : maxDate,
			minDate : minDate,
			onSelect : function(data) {
				if($("#createDate").val()>$("#endDate").val()){
					promt("“创建日期起”不能晚于“创建日期止”");
					$("#endDate").val("")
					return;
				}
			}
		};
	
	var birthDateOpt = {
			preset : 'date', // 日期
			theme : 'android-ics', // 皮肤样式android android-ics ios jqm sense-ui wp
			display : 'modal', // 显示方式
			mode : 'scroller', // 日期选择模式
			dateFormat : 'yyyy-mm-dd', // 日期格式
			setText : '确定', // 确认按钮名称
			cancelText : '取消',// 取消按钮名称
			dateOrder : 'yymmdd', // 面板中日期排列格式
			dayText : '日',
			monthText : '月',
			yearText : '年', // 面板中年月日文字
			maxDate : new Date(),
			onSelect : function(data) {
				var age = ages($("#birthDate").val());
				if (age) $("#age").val(age);
				}
			}
	
	$("#createDate").scroller(createDateOpt);
	$("#endDate").scroller(endDateOpt);
	$("#birthDate").scroller(birthDateOpt);
	
}

function ages(str)   
{   
      var   r   =   str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);     
      if(r==null)return   false;     
      var   d=   new   Date(r[1],   r[3]-1,   r[4]);     
      if   (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])   
      {   
            var   Y   =   new   Date().getFullYear();   
            return Y-r[1];  
      }   
      return false;
}   

function searchCustomer(){
	
}