var bindCardBeforeFlag="";	
var authentication_02='authentication_02';	//身份验证信息page
var linkman='linkman';						//联系人page
var zhimaxinyong='zhimaxinyong';			//芝麻信用page

var promoteQuota=sessionStorage.promoteQuota;
var processCode=sessionStorage.processCode;
var credit=sessionStorage.credit;
var card=sessionStorage.card;


$(document).ready(function() {
	
	    initData();
		
	});

function initData(){
	$.ajax({
		type : 'post',
		dataType : 'json',
		url : 'getProduct',
		data : {
			productCode : productCode
		} 
	}).
	done(function(data){
		
		if(data.code == "0000"){
			if(data.result&&data.result.length>0){
				var html=template("productDetail",data.result[0]);
				var $html=$(html);
				$("#content_dom").empty().append($html);
				borrowMoney($html);
				
			}

		}
		
//		$.each(data.result, function(i, obj) {
//			$.each(obj, function(key, val) {
//				var str = $("#content_dom").html();
//				str = str.replace("#" + key + "#", val);
//				$("#content_dom").html(str);
//			});
//		});
		
	});
	
}


/*立即代换信用卡*/
function borrowMoney($selector){
	
	$selector.find("#hcredit").on("click",function(e){
		if(promoteQuota==0){ 
			
			if(processCode == '00' || processCode == ""){
				
				bindCardBeforeFlag=authentication_02;
				
			}else if(processCode == '10'){
			
				bindCardBeforeFlag=linkman;
				
			}else if (processCode == '20'){
				
				bindCardBeforeFlag=zhimaxinyong;
			}

		}
		
		var proSel=$(this).data("href");
		var cardHref=$(this).data("cardHref");
		
		 
		if(bindCardBeforeFlag){
			
			MessageWin("请先申请额度！", function(){
				
				location.assign(bindCardBeforeFlag);
			});
			
		}else{
			if(credit==1&&card==1){//借钱还信用卡
				
				window.location.href=proSel+"?productCode="+productCode;
				
			}else{ //银行卡绑定
				if(credit==0&&card==0){
					$("#cardType").val("J");
				}else if(credit==1&&card==0){
					$("#cardType").val("J");
				}else if(credit==0&&card==1){
					$("#cardType").val("X");
				}
				$("#cardForm").attr("action",cardHref).submit();
			}
			
		}
		 
	});
}