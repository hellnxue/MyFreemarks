
var wait = 60;


$(document).ready(function(){
	 
	if("" != code && code != '0000') {
	 	function passFun(){
			window.location.href = 'bind_credit_card';
		}
		MessageWin(msg, passFun);  
		MessageWin(msg);
	}
	//填写完手机号码后的下一步
	$("#next_type").bind("click", function(){
		
		getCode("inputMobiles");
		 
	}) ;
	
	initData();
	
});

/*数据初始化*/
function initData(){
	var bankInfo=sessionStorage.getItem("bankInfo");
	if(bankInfo){
		var paramObj=JSON.parse(bankInfo);
		
//		console.log(paramObj);
		$("#bankInfo bdo:first").html(paramObj.bankName).siblings().html(paramObj.cardAtt);
		$("#hidden_dom :input[name=type]").val(paramObj.type)
		.next(":input[name=cardNo]").val(paramObj.cardNo)
		.next(":input[name='cardBank']").val(paramObj.bankName)
		.next(":input[name=cardCity]").val(paramObj.cardCity)
		.next(":input[name=name]").val(paramObj.name);
	}
}



//获取验证码
function getCode(status){
	var telephone = $('input[name=telephone]').val();
	if("" == telephone ){
//		MessageWin("手机号不能为空");
		promt("手机号不能为空!");
		return ;
	} else if(!isValidityMobile(telephone)){
		promt("请输入正确的手机号码!");
		return ;
	}
	
	$.ajax({
		async: false,
		type: 'post',
		dataType: 'json',
		url: 'phoneDynCode',
		data: {
			verifyKind:"BK",
			mobileNo: telephone
		} 
	}).done(function(data){
		if(data.code == '0000'){
			
			if(status=="inputMobiles"){
				initSendCodeHandel(telephone);
				
			}else{
				$("#checkcode").css({"background-color":"#ccc","border-color":"ccc"});
			} 
			time($("#checkcode").get(0));
			
		}else {
			MessageWin(data.msg);
		
		}
		
	}).fail(function(data){
		 
			MessageWin(data.msg);
		
	});
}

//填写完验证码-下一步
function toNext(ts){
	var $sel=$(ts);
	var verifyCode=$sel.parents("form").find("input[name='verifyCode']").val();
	if(verifyCode==""){
		promt("请输入验证码！");
		return;
	}
	var jsonObj=$sel.parents("form").serializeObject();
	ajaxUtil({
		url:"saveCard",
		data:jsonObj,
		callback:function(data){
			 
			if(data.code&&data.code=="0000"){
				location.assign("bind_credit_card_success");
			}else{
				promt(data.msg);
			}
			
		},
		failCallback:function(data){
			
			MessageWin(data.msg);
		}
	});
	
}

//输入完手机号码后更换DOM
function initSendCodeHandel(telephone){
	var dom = $("#hidden_dom").html();
	var str = "" + 
  	 
	 '<div class="tips_main" style="display:none;">'+
			'<p class="lead"></p>'+
	 '</div>'+
	"<div class='header'>" + 
		"<a href='javascript:history.go(-1);' class='icon ico_back'></a>" + 
		"填写验证码" + 
	"</div>" + 
	"<div class='maincontainer'>" + 
	"<form action='saveCard' method='post'>"+
	    "<div class='tips_info gray_bg'>请输入手机"+telephone.replace(telephone.substring(3,7),"****")+"收到的短信验证码</div>" + 
		"<div>" + 
			"<input class='form-control-border mt20 input_boder_style' name='verifyCode' value='' placeholder='请输入验证码' type='text' required='required'>" + 
			"<input class='form-control-border mt20 button_boder_style' value='59秒后重发' type='button' id='checkcode'>" + 
		"</div>" + 
		"<div class='btn-wrap'>" + 
		    dom + 
		    "<input type='hidden' name='telephone' value='" + telephone + "'/>" +
		    "<button class='btn_new' type='button' onclick='toNext(this);' >下一步</button>" + 
		"</div>" + 
	"</form>" + 
	"</div>";
	
	var layer="<div class='shade_outer none'></div>"+
	"<div class='shade_outer_ajax none'></div>"+
	"<div class='shade_window none'>"+
		"<div class='w_title'>提示</div>"+
		"<div class='w_content m-t-lg'></div>"+
		"<div class='btn-wrap '>"+
			"<button id='shade_window_close' class='btn s_wd btn-orange ctm-box-shadow' type='button'>确定</button> </div> </div>";
	$("body").html(str).append(layer);
}




function time(o) {
	 
	if (wait == 0) {
		
		o.onclick = dynamic;
		$(o).val("获取验证码");
		$(o).css({"background-color":"#fff","border-color":"orange"});
		wait = 60;
		
	} else {
		
		o.onclick = null;
		$(o).val("(" + wait + ")重获验证码");
		wait--;
		setTimeout(function() {
			time(o);
		}, 1000);
	}
}

function dynamic() {
	
	getCode("dynamic");
	
}