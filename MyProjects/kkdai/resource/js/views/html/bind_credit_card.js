
mui.init();
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
 
//	if(code.length > 0 && code != "0000") {
//		MessageWin(msg,function(){
//			if(code=="4030"){
//				location.assign("index");
//			}
//		});
//	}
	
	$(".form-group>span").click(function(){
		
		var cityselFlag=true;
		if($(this).attr("id") == 'province'){
			$(this).siblings("div").html(createProvince());
			$(this).parent("div").next("div").find("span").removeClass("current").html("选择发卡行城市");
			 
		}else if($(this).attr("id") == 'city'){
			var str = $("input[name=province]").attr("data");
			if( undefined  == str || str.length == 0){
				
				cityselFlag=false;
				promt("请先选择省份");
				
			}
			$(this).parent().find("div").html(createCity(str));
		}
		
		var b=$(this).siblings(".subnav");
  		if(cityselFlag&&$(b).is(":hidden")){
  			$(this).siblings(".subnav").show();
  			$(this).siblings("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
  			$(this).siblings("i").attr("class","icon ico_arrow_up");
        } else {
        	$(this).siblings(".subnav").hide();
        	$(this).siblings("i").attr("class","icon ico_arrow_down");
        }
		
		$('.subnav a').click(function(){
			
			var $fmgp=$(this).parents('.form-group');
			
			$fmgp.find('span').html($(this).html()); //改变span文本内容
			$fmgp.find('input').val($(this).html()); //改变span文本内容
			$fmgp.find('input').attr("data", $(this).attr("data")); //改变span文本内容
			$fmgp.find('span').addClass("current");
			$(this).parent('.subnav').hide();
			$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		});
    });
	
	//下一步-校验银行卡信息
	$("#next_step").click(function(){
		
		 if(formValidation($(this).parents("form"))){
			 
			 var paramObj=$(this).parents().serializeObject();
			 ajaxUtil({
					url:"vefCard",
					data:paramObj,
					callback:function(data){
						if(data.code=="0000"){
							
							
							var bankInfoObj={
									bankName:data.result.bankName,
									cardAtt:data.result.cardAtt,
									type:data.result.type,
									
									cardNo:paramObj.cardNo,
									
									cardCity:paramObj.cardCity,
									
									name:paramObj.name
							};
							sessionStorage.setItem("bankInfo", JSON.stringify(bankInfoObj));
							location="bind_credit_card_info";//银行卡信息
						}else if(data.code=="4030"){
							location.assign("index");
						}
						
						promt(data.msg);
					},
					failCallback:function(data){
						
						mui.toast(data.msg,{ duration:'short', type:'div' }) ;
						
					}
					
				}); 
		 }
		
		
		
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