<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<script type="text/javascript" src="resource/js/json.js"></script>
<title>银行卡绑定</title>
<script type="text/javascript">

function createProvince(){
	var province = "";
	$(data.root.province).each(function(i, obj){
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

$(document).ready(function(){
	//调用卡宾校验后提示
	var code = "${code}"; var msg = "${msg}";
	if(code.length > 0 && code != "0000") {
		MessageWin(msg, function(){})
	}
	
	$(".form-group>span").click(function(){
		if($(this).attr("id") == 'province'){
			$(this).parent().find("div").html(createProvince())
		}else if($(this).attr("id") == 'city'){
			var str = $("input[name=province]").attr("data");
			if('undefined' == str || str.length == 0){
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
</script>
</head>
<body>
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		银行卡绑定
	</div>
	<div class="maincontainer">
	<form action="saveCard" method="post">
		<div class="tips_info gray_bg">请绑定本人银行卡</div>
		<div class='form_wrap mt20_no'>
			<div class="form-group">
				<label class="control-label">持卡人：</label>
			    <input class="form-control" name="name" placeholder="请输入姓名" type="text" required="required">
			</div>
			<div class="form-group">
				<label class="control-label">省份</label>
			    <span id='province'>选择发卡行省份</span>
				<input type='hidden' name='province' class='validate' msg='选择发卡行省份'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='201'>在校</a>
					<a href="javascript:void(0)" code='202'>在职</a>
					<a href="javascript:void(0)" code='203'>自由职业</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">城市</label>
				<span id='city'>选择发卡行城市</span>
			    <input type='hidden' name='cardCity' class='validate' msg='选择发卡行城市'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='201'>在校</a>
					<a href="javascript:void(0)" code='202'>在职</a>
					<a href="javascript:void(0)" code='203'>自由职业</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">卡号</label>
			    <input class="form-control" name="cardNo" placeholder="银行卡号" type="text" required="required">
			</div>
		</div>
		<div class="tips_info gray_bg">认证通过后，该卡将成为购买理财产品的<bdo class="font_red_color">安全卡</bdo>!<br></br></div>
		<div class="tips_info gray_bg">
		    <button id='next_step' class="btn_new" type="button">下一步</button>
		</div>
		<input type='hidden' name='reqType' value='1'/>
	</form>
	</div>
	
	<div class="mask_outer none"></div>
	<div class="layer-wrap none">
		<div class="bd">
		    <center>&nbsp;</center>
			<center>您的信息填写有误，</center>
			<center>请核对后再输入，</center>
			<center>谢谢！</center>
		</div>
		<div class="btn-wrap">
			<!-- <button class="btn_new" type="button" onclick="javascript:window.location.href='./bind_credit_card_info.html'">下一步</button> -->
			<button class="btn_new" type="button" onclick="javascript:window.location.href='./bind_credit_card'">下一步</button>
		</div>
	</div>
</body>
</html>