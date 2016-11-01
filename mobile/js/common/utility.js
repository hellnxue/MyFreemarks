var CommonUtil = {};		
CommonUtil.generateParams = function(transCode,requestBodyJson){
	var request = {};
	request["clientId"]=String(Math.random()).substring(2,8);//设备号
	request["transCode"]=transCode;//交易代码
	request["channelCode"]="accessTest";//请求来源
	request["requestNo"]=request["clientId"]+""+(new Date()).getTime();//请求号  要保证每一次，
	request["encryptValue"]="c9f41b31fd5531f514535ba731cbd014"; //请求号+MAN  要保证每一次，
	request["sessionToken"]="";
	request["sessionRandom"]="";
	request["businessparams"]="";
	var reqHeader = {};
	reqHeader["clientSource"] = "2";
	sessionStorage.tokenId ? reqHeader["tokenId"] = sessionStorage.tokenId : reqHeader["tokenId"] = '111';
	var obj = requestBodyJson;
	obj["reqHeader"] = reqHeader;
	var text = JSON.stringify(obj);
	request["requestBodyJson"]=text;
	return request;
}

$.ajax._reuqestsCache = {};
$.ajax.abortCount = 0;
CommonUtil.executeAjax = function (transCode,requestParams,callback,asyn){
	CommonUtil.showLoading();
	var request = CommonUtil.generateParams(transCode,requestParams);
	var url = "/emploan/access/doSubmit";
	if(asyn === false){
		asyn = false;
	}else{
		asyn = true;
	}
	$.ajax({
		url: url,
		type:"post",
		data:request,
		cache: false,
		async: asyn,
		timeout: 600000,
		beforeSend : function(xhr){
			var req = $.ajax._reuqestsCache[transCode];
			var nowTime = new Date().getTime();
			if(req){
				if(req.request["requestBodyJson"] === request["requestBodyJson"] && nowTime - req.time < 1000){
					xhr.abort();
					$.ajax.abortCount ++;
					setTimeout(CommonUtil.closeLoading,1000);
				}else{
					req.time = new Date().getTime();
					req.request = request;
					req.xhr = xhr;
					$.ajax._reuqestsCache[transCode] = req;
				}
			}else{
				req = {};
				req.time = new Date().getTime();
				req.request = request;
				req.xhr = xhr;
				$.ajax._reuqestsCache[transCode] = req;
			}
		},
		complete : function(){
			CommonUtil.closeLoading();
		},
		success:function(data){
			if(typeof data == "string")
				data = eval("("+data+")");
			if(data.responseBody==null){
				if(data.errorMsg!=null&&data.errorMsg!=""){
					var msg = data.errorMsg;
					if(msg=="ERROR_MESSAGE")
						msg="系统繁忙";
//					jAlert("系统异常,请联系管理员！");
					alert(data.errorMsg);
					CommonUtil.closeLoading();
				}else{
					jAlert("系统繁忙！");
					CommonUtil.closeLoading();
				}
			}else{
				try{
					callback(data);
				}finally{
					CommonUtil.closeLoading();
				}
			}
		},
		error:function(data){
			jAlert("网络不给力，请耐心等待下吧！");
			if($("#loading_cen"))
				CommonUtil.closeLoading();
		}
	});
}

CommonUtil.showLoading = function(){
	$("body").append("<div id='loading_cen' class='loading_cen'></div>");
	createSelectBg();
	var select_content = $("#loading_cen");
	var top = ($(window).height()- select_content.height())/2;
	var left = ($(window).width()-select_content.width())/2;
	select_content.css("top",top);
	select_content.css("left",left);
	select_content.css("z-index",10001);
	select_content.show();
}

function createSelectBg() {
	if ($("#lock_select_bg").is(".lock_select_bg")) {
		$("#lock_select_bg").show();
	} else {
		$("body").append("<div id='lock_select_bg' class='lock_select_bg' style='position:absolute;left: 0px; top: 0px;display:none'></div>");
		$("#lock_select_bg").show();
		var lock = $("#lock_select_bg");
		var height = $(document).height();
		var width = $(document).width();
		lock.css("height", height);
		lock.css("width", width);
		lock.css("opacity", 0.5);
		lock.css("z-index", 10000);
		lock.css("background", "#000");
	}
}

CommonUtil.closeLoading = function(){
	if($("#loading_cen")){
		$("#loading_cen").remove();
		$("#lock_select_bg").remove();
	}
}

function renderJson(json){
	var params = "";
	for(var p in json){
		params +=',"'+p+'":"'+json[p]+'"';
	}
	return '{'+params.substring(1)+'}';
}
/*
 * 获取url指定的参数 @param name-指定的参数
 */
function  getQueryUrlParamVal (name) {
	// 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
	if (location.href.indexOf("?") == -1 || location.href.indexOf(name + '=') == -1) {
		return '';
	}
	// 获取链接中参数部分
	var queryString = location.href.substring(location.href.indexOf("?") + 1);
	queryString = decodeURI(queryString);
	 
	// 分离参数对 ?key=value&key2=value2
	var parameters = queryString.split("&");
	var pos, paraName, paraValue;
	for (var i = 0; i < parameters.length; i++) {
		// 获取等号位置
		pos = parameters[i].indexOf('=');
		if (pos == -1) { continue; }
	    // 获取name 和 value
	    paraName = parameters[i].substring(0, pos);
	    paraValue = parameters[i].substring(pos + 1);
	    // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
		if (paraName == name) {
			return unescape(paraValue.replace(/\+/g, " "));
	    }
	}
	return '';
}
/*******************************************************************************
 * //根据传入的param（字符串）、splitCode（分隔符）、splitlength（分割长度） //把该param分割成
 * xx,xxx,xxx的字符串。 //例如 把字符串：abc123ed用分隔符： , 分割长度为3 分割，则分割后的字符串为：ab,c12,3ed
 ******************************************************************************/
function splitColumnOfString(param,splitCode,splitlength){
	if (param.length == 0 || $.trim(param).length == 0) {
		return param;
	}else{
		var intNum = "";
		var deciNum = "";
		var columnValue = param;// 得到要分隔的值
		if(param.indexOf(".")>0){
			intNum = param.split(".")[0];
			deciNum = "."+param.split(".")[1];
			columnValue = intNum;
		}
		var a = columnValue;
		
		var sb = "";
		var sb2 = "";
		var f = splitlength;// 长度
		var amount = 1;
		// 分隔
		for (var  m = a.length-1; m >= 0 ; m--) {
			sb = sb + a.charAt(m);
			if (amount%f == 0 && m!=0) {
				sb = sb + splitCode;
			}
			amount ++;
		}
		for (var k =sb.length-1; k >=0  ; k--) {
			sb2 = sb2 + sb.charAt(k);
		}
		return sb2.toString()+deciNum;
	}
}
//js过滤HTML标签以及&nbsp;
function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
    return trimStr(str);
}
//获得html5 localstorage存储
function getItemFromLocalStorage(id){
	var jsonStr = localStorage.getItem(id);
	return eval('(' + jsonStr + ')');
}
//html5 localstorage存储
function saveItem2LocalStorage(id,obj){
	var jsonStr = JSON.stringify(obj);
	localStorage.setItem(id,jsonStr);
}
//html5 localstorage删除
function removeItemFromLocalStorage(id){
	localStorage.removeItem(id);
}

function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}

//判断身份证有效性
function checkedIdcard(value) {
	var idcard = value;
	if(idcard==""){
		return false;
	}
	var regex1 = /^[1-9][0-7]\d{4}((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229))\d{3}(\d|X|x)?$/;
	
	switch (idcard.length) {
	  case 15:
		if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
			var regex2 = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
		} else {
			var regex2 = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
		}

		if(regex2.test(idcard)) 
			return true;
		else 
			return false;
		break; 
	  case 18:
	 	 if(regex1.test(idcard)){
	 		idcard = idcard.split("");
			var S = (parseInt(idcard[0]) + parseInt(idcard[10])) * 7 + (parseInt(idcard[1]) + parseInt(idcard[11])) * 9 + (parseInt(idcard[2]) + parseInt(idcard[12])) * 10 + (parseInt(idcard[3]) + parseInt(idcard[13])) * 5 + (parseInt(idcard[4]) + parseInt(idcard[14])) * 8 + (parseInt(idcard[5]) + parseInt(idcard[15])) * 4 + (parseInt(idcard[6]) + parseInt(idcard[16])) * 2 + parseInt(idcard[7]) * 1 + parseInt(idcard[8]) * 6 + parseInt(idcard[9]) * 3;
			var Y = S % 11;
			var M = "F";
			var JYM = "10X98765432";
			M = JYM.substr(Y, 1);
			/*判断校验位*/
			if (M == idcard[17].toUpperCase()) {
				return true;
			} else {
				return false;
			}
		}else{
			return false;
		}
		break;
	  default:
		return false;
	}
}

// 身份证查出生日
function getBirthdayFromIdCard(idcard){
	var birthdayFromIdcard="";
	if(idcard.length==18){
		birthdayFromIdcard=isValidityBrithBy18IdCard(idcard);
	}else if(idcard.length==15){
		birthdayFromIdcard="19"+isValidityBrithBy15IdCard(idcard);
	}
	return birthdayFromIdcard;
}
function isValidityBrithBy18IdCard(idCard18){   
	var year = idCard18.substring(6, 10);   
	var month = idCard18.substring(10, 12);   
	var day = idCard18.substring(12, 14); 
	return year+"-"+month+"-"+day;
}
function isValidityBrithBy15IdCard(idCard15){   
	var year = idCard15.substring(6, 8);   
	var month = idCard15.substring(8, 10);   
    var day = idCard15.substring(10, 12);   
	return year+"-"+month+"-"+day;
}

// 身份证号查出性别
function getGenderByIdCard(idCard) {
	idCard = $.trim(idCard.replace(/ /g, ""));// 对身份证号码做处理。包括字符间有空格。
	if (idCard.length == 15) {
		if (idCard.substring(14, 15) % 2 == 0) {
			return '0';
		} else {
			return '1';
		}
	} else if (idCard.length == 18) {
		if (idCard.substring(16, 17) % 2 == 0) {
			return '0';
		} else {
			return '1';
		}
	} else {
		return "";
	}
}

//日期控件
function timepicker(id){
	// 生日
	var minDate = new Date(new Date().getFullYear()-100,'00','01');
	var maxDate = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
	var dateopt = {
        preset: 'date', // 日期
        theme: 'android-ics', // 皮肤样式android android-ics ios jqm sense-ui wp
        display: 'modal', // 显示方式
        mode: 'scroller', // 日期选择模式
        dateFormat: 'yy-mm-dd', // 日期格式
        setText: '确定', // 确认按钮名称
        cancelText: '取消',// 取消按钮名称
        dateOrder: 'yymmdd', // 面板中日期排列格式
        dayText: '日', monthText: '月', yearText: '年', // 面板中年月日文字
        maxDate: maxDate,
        minDate: minDate,
        onSelect:function(){$(this).blur();},
		onChange:function(){
        	$(this).blur();
        }
    };
	$("#"+id).mobiscroll(dateopt);
}

//验证手机号码
CommonUtil.getMobilePhone = function(str){
	var reg = /^0?(13[0-9]|15[0-9]|18[0-9]|14[0-9]|17[0-9])[0-9]{8}$/ ;
	return reg.test(str);
}

// 邮箱的校验
CommonUtil.isEmail = function(str){ 
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	return reg.test(str); 
} 

// 验证是否为整数  
CommonUtil.checkNumber = function(str){
	 var reg = /\D/; 
	return reg.test(str);
};

// 银行账号每四位用空格进行分割
CommonUtil.splitNumber = function(str){
	 var reg = str.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
	return reg;
};

function promt(obj) {
	
	// 浮动层打开
	$(".tips_main").attr("style","display:block;");
	$(".tips_main p").html(obj);
	// 设定定时器的时间值
	setTimeout(tip,3000);
}

function tip(){
	$(".tips_main").slideUp();
}

// 判断性别
var genderMap = {"0":"女","1":"男"};
// 证件类型
var cardMap = {"C":"身份证","D":"驾驶执照","E":"返乡证","H":"护照","K":"身份证（香港）","M":"军官证","O":"其他","R":"户口薄"};