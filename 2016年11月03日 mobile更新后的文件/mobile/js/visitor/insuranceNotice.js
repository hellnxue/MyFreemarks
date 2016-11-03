$(function(){
	
	 // 复选框
	 $(".check_blo2").toggle(
				function(){$(this).parent().find("span").attr("class","check_yes2")},
				function(){$(this).parent().find("span").attr("class","check_no2")}
	);
	
	// 复选框事件 
	$(".check_blo2").click(function(){
		
		// 选中的样式
		if ($(this).find("span").hasClass("check_yes2")) {
			// 我同意按钮高亮
			$("#agree").attr("class","btn_org width_wio_47 float_r");
			// 添加触发事件
			$("#agree").attr("onclick","location='insuredInfo.html'");
		} else {
			// 我同意按钮置灰
			$("#agree").attr("class","btn_gray width_wio_47 float_r");
			// 移除触发事件
			$("#agree").removeAttr("onclick");
		}
	});
});