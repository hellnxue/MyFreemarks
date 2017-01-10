$(document).ready(function(){
	
	
	if(hFrom&&hType&&hFrom=="replace"){//借记卡替换
		$("input[name='type']").val(hType);
	}else{//绑卡提示
		if(hType&&hType=="J"){
			
			MessageWin("请绑定您的借记卡！",function(){
				$("input[name='type']").val(hType);
			});
			
		}else if(hType&&hType=="X"){
			MessageWin("请绑定您的信用卡！" ,function(){
				$("input[name='type']").val(hType);
			});
		}
	}
	

	
	
	//调用卡宾校验后提示
 
	if(code.length > 0 && code != "0000") {
		MessageWin(msg,function(){
			if(code=="4030"){
				location.assign("index");
			}
		});
	}
	
	$(".form-group>span").click(function(){
		if($(this).attr("id") == 'province'){
			$(this).parent().find("div").html(createProvince());
			$(this).parent("div").next("div").find("span").removeClass("current").html("选择发卡行城市");
			 
		}else if($(this).attr("id") == 'city'){
			var str = $("input[name=province]").attr("data");
			if( undefined  == str || str.length == 0){
				MessageWin("请选择省份", function(){});
			}
			$(this).parent().find("div").html(createCity(str))
		}
		var b=$(this).parent().find(".subnav")
  		if($(b).is(":hidden")){
        	$(this).parents().find(".subnav").hide()
  			$(this).parent().find(".subnav").show()
  			$(this).parents().find("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
  			$(this).parent().find("i").attr("class","icon ico_arrow_up")
        } else {
        	$(this).parent().find(".subnav").hide()
        	$(this).parent().find("i").attr("class","icon ico_arrow_down")
        }
		
		$('.subnav a').click(function(){
			$(this).parents('.form-group').find('span').html($(this).html()); //改变span文本内容
			$(this).parents('.form-group').find('input').val($(this).html()); //改变span文本内容
			$(this).parents('.form-group').find('input').attr("data", $(this).attr("data")); //改变span文本内容
			$(this).parents('.form-group').find('span').addClass("current")
			$(this).parents().find('.subnav').hide();
			$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		});
    });
	
	$("#next_step").click(function(){
		var cardNo = $('input[name=cardNo]').val();
		var name = $('input[name=name]').val();
		var cardCity = $('input[name=cardCity]').val();
		if("" == name || "" == cardNo || "" == cardCity){
			$(".mask_outer").show();
			$(".layer-wrap").show();
			return false;
		}
		$("form").submit();
		
		/* $.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'saveCard',
			data: {
				reqType:"1",
				cardNo:cardNo,
				name:name,
				cardCity: cardCity
			},
			success: function(data) {
				if(data.code == "0000"){
					window.location.href='bind_credit_card_info';
				}else{
					$(".mask_outer").show();
					$(".layer-wrap").show();
					return false;
				}
			}
		}); */
    });
	
});

function createProvince(){
	var province = "";
	$(areaData.province).each(function(i, obj){
	    var city = "";
	    $(obj.city).each(function(j, item){
	    	if($(obj.city).length == (j+1)){
	    		city += item.name.trim()
	    	}else{
	    		city += item.name.trim() + ","
	    	}
	    });
		province += "<a href='javascript:void(0)' data='" + city + "'>" + obj.name + "</a>"
	});
	return province;
}

function createCity(str){
	if(!str){
		return;
	}
    var city = "";
    var arr = str.split(",");
    $.each(arr, function(i){
    	if(arr.length == (i+1)){
    		city += "<a href='javascript:void(0)'>" + arr[i] + "</a>";
    	}else{
    		city += "<a href='javascript:void(0)'>" + arr[i] + "</a>";
    	}
    });
	return city;
}