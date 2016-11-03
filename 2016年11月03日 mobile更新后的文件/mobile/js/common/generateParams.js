function generateParams(transCode,requestBodyJson){
	var request = {};
	request["clientId"]=getClientId();//设备号
	request["transCode"]=transCode;//交易代码
	request["channelCode"]="accessTest";//请求来源
	request["requestNo"]=request["clientId"]+""+(new Date()).getTime();//请求号  要保证每一次，
	request["empNo"]=getEmpNo();
	request["encryptValue"]="4c5579b149d5c753884809ec74816b55"; //请求号+MAN  要保证每一次，
	request["sessionToken"]="";
	request["sessionRandom"]="";
	request["businessparams"]="";
	request["requestBodyJson"]=requestBodyJson;
	return request;
}

function getClientId(){//获取设备号
	return getParam("cid");
}

function getEmpNo(){//获取业务员工号
	return getParam("empno");
}

function getEmpProvince(){//获取业务员所在省
	return "上海";
}

//用来得到url地址里面的参数
function getParam(paras) {
	var url = location.href;
	url = url.charAt(url.length-1)=="#"?url.substring(0,url.length-1):url;
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paraObj = {};
	for (i = 0; j = paraString[i]; i++) {
		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j
				.indexOf("=") + 1, j.length);
	}
	var returnValue = paraObj[paras.toLowerCase()];
	if (typeof (returnValue) == "undefined") {
		return "";
	} else {
		return returnValue;
	}
}

function checkMarry(str){
	var params = {"已婚":"1","1":"已婚",
					"未婚":"0","0":"未婚",
					"离异":"2","2":"离异",
					"丧偶":"3","3":"丧偶"};
	if(params[str])
		return params[str];
	return str;
}

function checkGender(str){
	var params = {"男":"1","1":"男","女":"0","0":"女"};
	if(params[str])
		return params[str];
	return str;
}

function checkChild(str){
	var params = {"有":"1","1":"有","无":"0","0":"无"};
	if(params[str])
		return params[str];
	return str;
}

function checkCard(str){
	var params = {"A":"居民身份证","居民身份证":"A",
					"B":"护照","护照":"B",
					"C":"军官证","军官证":"C",
					"D":"港澳居民通行证","港澳居民通行证":"D",
					"E":"台湾居民通行证","台湾居民通行证":"E",
					"F":"内部证件","内部证件":"F"};
	if(params[str])
		return params[str];
	return str;
}

function checkIncome(str){
	var params = {"0":"0-6万元","0-6万元":"0",
					"1":"6-15万元","6-15万元":"1",
					"2":"15-30万元","15-30万元":"2",
					"3":"30万元以上","30万元以上":"3"};
	if(params[str])
		return params[str];
	return str;
}

function checkCar(str){
	var params = {"2":"私家车","私家车":"2",
					"1":"摩托车","摩托车":"1",
					"0":"无","无":"0"};
	if(params[str])
		return params[str];
	return str;
}

function checkEducation(str){
	var params = {"A":"博士","博士":"A",
			"B":"硕士研究生","硕士研究生":"B",
			"C":"大学本科","大学本科":"C",
			"D":"大学专科","大学专科":"D",
			"E":"中专及高中","中专及高中":"E",
			"F":"初中及以下","初中及以下":"F"};
	if(params[str])
		return params[str];
	return str;
}

function checkSource(str){
	var params = {"A":"陌生拜访","陌生拜访":"A",
					"B":"设点咨询","设点咨询":"B",
					"C":"缘故","缘故":"C",
					"D":"主动上门","主动上门":"D",
					"E":"网上客户","网上客户":"E",
					"F":"转介绍","转介绍":"F",
					"G":"其他","其他":"G"};
	if(params[str])
		return params[str];
	return str;
}

function checkRelation(str){
	var params = {"A1":"配偶","配偶":"A1",
					"A2":"父母","父母":"A2",
					"A3":"子女","子女":"A3",
					"A4":"其他亲属","其他亲属":"A4",
					"A5":"朋友","朋友":"A5",
					"A6":"同事","同事":"A6",
					"B1":"雇佣","雇佣":"B1",
					"B2":"团体成员","团体成员":"B2",
					"B3":"联系人","联系人":"B3",
					"B4":"财务联系人","财务联系人":"B4",
					"C1":"上下级机构","上下级机构":"C1"};
	if(params[str])
		return params[str];
	return str;
}

function checkMonth(str){
	var params = {"01":"一", 
			"02":"二", 
			"03":"三", 
			"04":"四", 
			"05":"五", 
			"06":"六", 
			"07":"七", 
			"08":"八", 
			"09":"九", 
			"10":"十", 
			"11":"十一", 
			"12":"十二"
			};
	if(params[str])
		return params[str];
	return str;
}

function checkResult(str){
	var params = {"0":"撤消","撤消":"0",
					"1":"已申请","已申请":"1",
					"2":"已复核","已复核":"2",
					"3":"已处理","已处理":"3"
				};
	if(params[str])
		return params[str];
	return str;
}

function checkWay(str){
	var params = {"CNT":"柜面","柜面":"CNT",
					"WEB":"网站","网站":"WEB",
					"TEL":"电话","电话":"TEL",
					"SMS":"短信","短信":"SMS",
					"GPS":"柜面亲办","柜面亲办":"GPS",
					"001":"服务人员代办","服务人员代办":"001",
					"002":"非服务人员代办","非服务人员代办":"002",
					"003":"银行柜面代办","银行柜面代办":"003",
					"004":"内部业务","内部业务":"004",
					"005":"信函保全","信函保全":"005",
					"006":"传真保全","传真保全":"006",
					"007":"移动保全","移动保全":"007",
					"008":"电话保全","电话保全":"008",
					"009":"网上保全","网上保全":"009",
					"010":"短信保全","短信保全":"010",
					"011":"电销保全","电销保全":"011",
					"012":"银保通保全","银保通保全":"012",
					"020":"移动保全","移动保全":"020",
					"021":"保险伴侣","保险伴侣":"021",
					"022":"摇钱树","摇钱树":"022",
					"SYS":"系统自动处理","系统自动处理":"SYS"
				};
	if(params[str])
		return params[str];
	return str;
}
  
function checkLipei(str){

	var params = {  "0":"不赔付",
					"1":"赔付"
				};
	if(params[str])
		return params[str];
	return str;

}

function checkXianZhong(str){
	var params = {	"1":"主险",
					"2":"附加险"
				};
	if(params[str])
		return params[str];
	return str;
}

function checkJiaoFei(str){
	var params = {	"01":"趸交",
			        "02":"不定期",
					"10":"月交",
					"11":"季交",
					"12":"半年交",
					"13":"年交"
				};
	if(params[str])
		return params[str];
	return str;
}

function checkPolicyStatus(str){
	var params = {	"1":"有效",
					"2":"失效",
					"3":"投保中" 				 
				};
	if(params[str])
		return params[str];
	return str;
}

function checkNorW(str){
	if(str == null || str == ''){
		str = '--';
		return str;
	} else {
		return str;
	}
}

function backToW(str){
	if($.trim(str) == '--' ){
		str = '';
		return str;
	} else {
		return str;
	}
}