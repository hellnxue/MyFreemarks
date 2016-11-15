var user;
// 判断用户是否已绑定
$(function(){
	user={};
	//判断是否已注册
	isRegiste();
	user = isAuthority();
});

function isRegiste(){
	//alert("sessionStorage.merUserId="+sessionStorage.merUserId);
	if (sessionStorage.merUserId && sessionStorage.merCode) {
		return;
	}
	//获取参数
	var checkobj = getQueryUrlParamVal("obj");
	if(checkobj){
		//解密
		var checkdesss =  getEncriptParams(checkobj,null);
		if(checkdesss){
			var checkneedAddLocalStorage =  checkdesss.needAddLocalStorage;
			if(checkneedAddLocalStorage){
				//判断用户是否正确
				//isAuthority();
				sessionStorage.merUserId = checkdesss.merUserId;
				sessionStorage.merCode = checkdesss.merCode;
				sessionStorage.mobileNo = checkdesss.mobileNo;
			}
		}
	}
	
	// 获取用户信息
	if (!sessionStorage.merUserId || !sessionStorage.merCode) {
		CommonUtil.showLoading();
		jAlert("对不起，该用户未登陆授权！");
	}
}

// 判断当前用户是否已授权
function isAuthority() {
	var localMerUserId = sessionStorage.merUserId ;
	var localMerCode = sessionStorage.merCode
	var request = {};
	var result = {};
	request.merUserId = localMerUserId;
	request.merCode = localMerCode;
	var url = "/emploan/credit/queryCrmRegUserInfoByParams";
	$.ajax({
		url: url,
		data:request,
		type:"post",
		cache: false,
		async: false,
		success:function(data){
			if(data){
				result = data;
			}else{
				CommonUtil.showLoading();
				jAlert("对不起，该用户为未授权用户，请检测您的登陆账号！");
			}
		},
		complete : function(){
			//CommonUtil.closeLoading();
		},
		error:function(data){
			jAlert("网络不给力，请耐心等待下吧！");
			if($("#loading_cen"))
				CommonUtil.closeLoading();
		}
	});
	
	return result;
}

//查询开通产品
function findProducts(needQueryMercode){
	var result;
	if(!needQueryMercode){
		needQueryMercode = '1000000';
	}
	var url = "/emploan/credit/findProducts";
	$.ajax({
		url: url,
		data:{merCode:needQueryMercode},
		type:"post",
		cache: false,
		async: false,
		success:function(data){
			codeList = JSON.parse(data).result;
			if (codeList&&codeList.length>0) {
				for (var key in codeList) {
					var code = codeList[key];
					result = code;
					break;
				}
			}
		}
	});
	return result;
}
