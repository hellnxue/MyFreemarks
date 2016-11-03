var parentId = 0;

$(function(){
	getProductList(0);
});

function getProductList(parId){
	if(!parId&&parId!=0){
		promt("系统繁忙，请稍后再试！");
		return;
	}
	var request = {};
	request.parentId = parId;
	CommonUtil.executeAjax("0100005",request,function(data) {
		
		var productTypeList = data.responseBody.productTypeList;
		if (productTypeList&&productTypeList.length>0) {
			if(parId==0){
				var html ="";
				html += '<ul class="cpfl_06_ul_fz">';
				for (var key in productTypeList) {
					var code = productTypeList[key];
					html += '<div id="product'+code.id+'" onclick="showSub('+code.id+')" class="proTitle cs'+code.parentId+'">';
					html += '<li class="cpfl_06_ul_fz_li" >'+code.categoryName+'<span></span></li>';
					html += '</div>';
					html += ' <div class="height_05"></div>';
				}
				html += '</ul>';
				
			}else{
				var html ="";
				html += '<ul class="cpfl_06_ul">';
				for (var key in productTypeList) {
					var code = productTypeList[key];
					if(code.isLast==1){
						html += '<div id="product"'+code.id+'" class="cs'+code.parentId+'">';
						html += '<li >'+code.categoryName+'</li>';
					}else{
						html += '<div id=product"'+code.id+'" onclick="showSub('+code.id+')" class="cs'+code.parentId+'">';
						html += '<li >'+code.categoryName+'<span></span></li>';
					}
					
					
					html += '</div>';
				}
				html += '</ul>';
			}
			
			$("#product"+parId).append(html);
			
		} else {
			promt("未加载到产品信息");
		}
	}, false);
}

/**
 * 显示下一级菜单
 */
function showSub(id){
	//判断是否是标题菜单
	if($("#product"+id).hasClass("proTitle")){
		//判断是否已经加亮
		if($("#product"+id).children("li:first").hasClass("cpfl_06_ul_fz_li_cur")){
			$("#product"+id).children("li:first").removeClass("cpfl_06_ul_fz_li_cur");
			$(".cs"+id).hide();
		}else{
			$("#product"+id).children("li:first").addClass("cpfl_06_ul_fz_li_cur");
			
			if($("#product"+id).find(".cs"+id).length>0){
//			if($("#product"+id).find("div")){
				$(".cs"+id).show();
			}else{
				getProductList(id);
			}
		}
	}else{
		//判断二级以下菜单是否已展开
		if($("#product"+id).children("span:first").hasClass("li_span_cur")){
			$("#product"+id).children("span:first").removeClass("li_span_cur");
			$(".cs"+id).hide();
		}else{
			$("#product"+id).children("span:first").addClass("li_span_cur");
			if($("#product"+id).find(".cs"+id).length>0){
				$(".cs"+id).show();
			}else{
				getProductList(id);
			}
		}
	}
}
