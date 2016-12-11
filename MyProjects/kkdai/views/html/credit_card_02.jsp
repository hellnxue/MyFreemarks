<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-银行卡信息2</title>
<script type="text/javascript" src="resource/js/jquery.js"></script>
<script src="resource/js/htmlsize.js"></script>
<script src='resource/js/My97DatePicker/WdatePicker.js'/></script>
<script type="text/javascript">
	/* var param = undefined;
	var periods="";
    //获取后台回传的参数
	if(!!"${param.param}") {
		if(window.atob) {
			var decode = window.atob("${param.param}");
			if(!!decode) {
				console.log(decode);
				param = $.parseJSON(decode);
			} else {
				alert("参数为空!");
			}
			
		} else {
			alert("解析参数失败");
		}
	}
    var jsonFromRequest = {
    		md5CardNo: "${card.md5CardNo}",
    		identityNo: "${userSession.idCard}",
    		bankKey: "${credit.bankKey}",
    		creditNo: "${credit.creditNo}",
    		depositsCardNo: "${card.cardNo}",
    		creditBank: "${credit.creditBank}",
    		md5CreditNo: "${credit.md5CreditNo}",
    		cardBankKey: "${card.cardBankKey}" 
    }
	$(document).ready(function(){
		$(".form-group>span").click(function(){
			var b=$(this).parent().find(".subnav").css("display")
	  		if( b=="none"){
	        	$(this).parents().find(".subnav").hide()
	  			$(this).parent().find(".subnav").show()
	  			$(this).parents().find("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
	        	$(this).parent().find("i").attr("class","icon ico_arrow_up")
	        } else {
	        	$(this).parent().find(".subnav").hide()
	        	$(this).parent().find("i").attr("class","icon ico_arrow_down")
	        }
	    });
	    $('.subnav a').click(function(){
			$(this).parents('.form-group').find('span').html($(this).html()); //改变span文本内容
			$(this).parents('.form-group').find('span').addClass("current")
			$(this).parents().find('.subnav').hide();
			$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
			
			dotail.call($("#amount"),$(this).parents('.form-group').find('span').text());
		});
	    $("#amount").blur(function(){
	    	var periodStr = $('.subnav a').parents('.form-group').find('span').text();
	    	if(periodStr != "") {
	    		dotail.call(this,periodStr);
	    	}
        });
	    function dotail(periodStr) {
	    	var period = 0;
	    	if(periodStr.indexOf("月") > 0) {
	    		period=periodStr.replace("个月","");
	    		periods=period;
	    	}
	    	var creditAmount = document.getElementById("creditAmount").value;
	    	var userId = document.getElementById("userId").value;
        	if($(this).val()%100==0 && $(this).val()>=1000 && $(this).val()<=creditAmount){
        		//alert("试算");
        		$.post('kakadai/order/trial',{userId:userId,amount:$(this).val(),period:period,account:'baifutianxia'},function(data,status){
        			//alert(data);
        			if(status == 'success') {
        				var resdata = typeof data == 'string' ? $.parseJSON(data) : data;
        				if(resdata.code == "0000") {
            				$("#poundage").text(Number(resdata.result.poundage).toFixed(2));
            				$("#capital").text(Number(resdata.result.capital).toFixed(2));
            				$("#repaymentDate").val(resdata.result.repaymentDate);
        				} else {
        					alert(resdata.msg);
        				}
        				
        			}
        			
        		});
        	} else if(creditAmount < 1000) {
        		alert("授信额度小于1000");
        	}else{
        		alert("金额需大于1000且为100的整倍数并小于授信额度");
        	}


	    $("#signlink").on("click",function(){
	    	if(window.btoa) {
	    		//base64编码参数
	    		var param = window.btoa(JSON.stringify({
	    			applyAmount:$("#amount").val(),
	    			amount:$("#amount").val(),
	    			period:periods,
	    			userId:$("#userId").val(),
	    			md5CreditNo: jsonFromRequest.md5CreditNo,
	    			poundage:$("#poundage").text(),
	    			repaymentDate:encodeURI($("#repaymentDate").val()),
	    			makeLoanDay:$("#makeLoanDay").val(),
	    			capital:$("#capital").text()
	    		}));
	    		
    			$("#applyAmount").val($("#amount").val());
    			$("#applyPeriods").val("3");
    			$("#md5CreditNo").val(jsonFromRequest.md5CreditNo);
    			$("#creditCardBankName").val(jsonFromRequest.bankKey);
	    			
	    		$("#creditCard03Param").val(param);
	    		//表单post提交
	    		$("#creditCard03Param").parents("form").submit();
	    	} else {
	    		alert("参数传递失败");
	    	}
	    });
        
        if(param != undefined) {
        	$("#userId").val(param.userId);
    		$("#amount").val(param.amount);
    		$("div.subnav").children().each(function(i,ele){
    			if($(ele).text().indexOf(param.period) >= 0 || i == 3) {
    				$(ele).parents(".form-group").find("span").html($(ele).text());
    				return false;
    			} 
    		});
    		$("#poundage").text(param.poundage);
    		$("#repaymentDate").val(decodeURI(param.repaymentDate));
    		$("#makeLoanDay").val(param.makeLoanDay);
    		$("#capital").text(param.capital);
    		//选中checkbox
    		$("#signlink").find("i").addClass("ico_check_current");
    		
    		var data = {
        			userId: $("#userId").val(),
        			md5CreditNo:jsonFromRequest.md5CreditNo,
        			md5CardNo: jsonFromRequest.md5CardNo,
        			userSignature: param.sign,
        			creditCardNo: jsonFromRequest.creditNo,
        			repaymentPeriod: param.period,
        			loanAmt: param.amount,
        			makeLoanDay: param.makeLoanDay,
        			bankKey: jsonFromRequest.bankKey,
        			cardBankKey: jsonFromRequest.cardBankKey,
        			identityNo: jsonFromRequest.identityNo,
        			depositsCardNo: jsonFromRequest.depositsCardNo
        	}
        	var isEmpty = false;
        	for(var k in data)  {
        		if(!data[k]) {
        			isEmpty = true;
        			break;
        		}
        	}
        	//输入项没有填写完毕，“确认代换”按钮不可点击
        	if(!isEmpty) {
        		$("#btnSubmit").disabled=false;
        	}
        
	        $("#btnSubmit").on("click",function(){
	        	
	        	$.post("kakadai/order/submitOrder",data, function(res){
	        		var resjson = typeof res == 'string' ? $.parseJSON(res) : res;
	        		if(resjson.code != '0000') {
	        			alert(resjson.msg);
	        			return;
	        		}
	        		var payedParam =  {
	        			   userId: $("#userId").val(),
	        			   loanAmt: param.amount, 
		        		   creditCardNo: jsonFromRequest.creditNo,
		        		   creditBank: encodeURI(jsonFromRequest.creditBank),
		        		   makeLoanDay: data.makeLoanDay,
		        		   repaymentPeriod: param.period,
		        		   capital: $("#capital").text(),
		        		   repaymentDate: encodeURI($("#repaymentDate").val()),
		        		   orderId: resjson.result.orderId,
		        		   bankKey: data.bankKey,
		        		   cardBankKey:data.cardBankKey
	        		 }
	        		if(window.btoa) {
	        			$("#creditCard04Param").val(window.btoa(JSON.stringify(payedParam)));
	            		$("#creditCard04Param").parents("form").submit();
	        		} else {
	        			alert("参数传递失败");
	        		}
	        		
	        	});
	        }).removeClass("disabled");
        }
	}); */
	
</script>
 
</head>
<body>
	<div class="header">
		<a href="javascript:void(0);" class="icon ico_back" id="proBack"></a>
		银行卡信息
	</div>
	
	
	<div class="maincontainer">
	
	<form action="productList" method="post" id="productList">
         <input name="loanAmt" value="" type="hidden">
         <input name="productCode" value="" type="hidden">
    </form>        
            
	<form action="./credit_card_04.html" method="post">
		<div class="tips_info">
			<i class="icon ico_sign"></i>亲，您申请的金额需大于1000小于您的授信额度哦~~
		</div>
		<div class="box_circle circle_not_b">
			<div class="hd">${credit.creditBank}丨${credit.creditNo}</div>
			<input type="hidden" name="creditBank" value=""/>
			<input type="hidden" name="creditCardNo" value=""/>
			<input type="hidden" name="md5CreditNo" value=""/>
			<input type="hidden" name="productCode" value="<%=request.getParameter("productCode")%>"/>
			<input type="hidden" id="creditAmount" value="${userSession.creditAmount}"/>
			<input type="hidden" id="userId" name='userId' value="${userSession.userId}"/>
			<input type="hidden" id="bankKey" name='bankKey' value="${credit.bankKey}"/>
			<div class="form_wrap">
				<div class="form-group">
					<label class="control-label">申请代还金额</label>
					<input type="text" name='loanAmt' value="<%=request.getParameter("loanAmt")%>" id="amount" placeholder="最低1000且为100整数倍" class="form-control form_ipt_right" readonly="readonly"/>
				</div>
				<div class="form-group">
					<label class="control-label">还款期数</label>
					<span style="text-align:right;margin-right:0.6rem;"><%=request.getParameter("repaymentPeriod")%></span>
					<input type="hidden" name="repaymentPeriod" value="<%=request.getParameter("repaymentPeriod")%>" />
					<!-- <i class="icon ico_arrow_down" style="right:0.45rem ;"></i>
					<div class="subnav none">
						<a href="javascript:void(0)">6个月</a>
						<a href="javascript:void(0)">12个月</a>
						<a href="javascript:void(0)">18个月</a>
						<a href="javascript:void(0)">24个月</a>
					</div> -->
				</div>
				<div class="form-group">
					<label class="control-label">手续费</label>
					<bdo class="form_text_right c_orange fs36" id="poundage"><%=request.getParameter("poundage")%></bdo>
					<input type="hidden" name="poundage" value="<%=request.getParameter("poundage")%>" />
				</div>
				<div class="form_hint">注：手续费需从代还金额中扣除</div>
				<div class="form-group">
					<label class="control-label">放款日期</label>
					<input required="required" type="date" name="makeLoanDay" value="<%= request.getParameter("makeLoanDay") == null  ? "" : request.getParameter("makeLoanDay") %>" class="form-control form_ipt_right_ico" id="makeLoanDay" style="background:url(resource/images/day@3x.png) no-repeat scroll 83% 42% / 8% 42%"/>
					<!-- <i class="icon ico_date"></i> -->
				</div>
				<div class="form_hint">注：放款成功后，预计1-2个工作日到账</div>
			</div>
		</div>
		<div class="from_line"></div>
		<div class="box_circle circle_not_t">
			<div class="form_wrap">
				<div class="form-group">
					<label class="control-label">每月还款</label>
					<bdo class="form_text_right c_orange" id="capital"><%=request.getParameter("capital")%></bdo>
					<input type="hidden" name="capital" value="<%=request.getParameter("capital")%>" />
				</div>
				<div class="form-group">
					<label class="control-label">还款日</label>
					<input type="text" id="repaymentDate" name="repaymentDate" value="" placeholder="放款成功后查看“还款详情”" class="form-control form_ipt_right" readonly="readonly" />
				</div>
				<div class="form-group">
					<label class="control-label">绑定借记卡</label>
					<input type="text" name="depositsCardNo" value="${card.cardNo}" placeholder="${card.cardNo}" readonly="readonly" class="form-control form_ipt_right"/>
					<input type="hidden" name="md5CardNo" value="${card.md5CardNo}" />
					<input type="hidden" name="cardBankKey" value="${card.cardBankKey}" />
				</div>
			</div>
		</div>
		<div class="btn-agree"><a id="signlink" href="javascript:void(0)"><i class="icon ico_check"></i>同意并签署<bdo class="c_orange">《合同套件》</bdo></a></div>
		<div class="btn-wrap">
			<button type="button" class="btn btn-orange disabled" onclick="javascript:void(0)" id="btnSubmit">确认代还</button>
		</div>
		<input type="hidden" name="userSignature" value="<%=request.getParameter("userSignature")%>" />
	</form>
	</div>
	
	<div class="mask_outer none"></div>
	<div class="layer-wrap none window_credit">
		<div class="credit_title">请选择代还信用卡号</div>
		<div class='credit_list'>
		<c:forEach items="${userSession.credit}" var="card">
	        <div class='list_item'>
		        <label creditBank="${card.creditBank}"> ${card.creditBank} </label> | 
		        <span 
		            creditCity="${card.creditCity}"
		            bankKey="${card.bankKey}"
		            md5CreditNo="${card.md5CreditNo}"
			        creditNo="${card.creditNo}"> 
			        ${card.creditNo} 
			    </span>
	        </div>
		</c:forEach>
	    </div>
	    <div class='credit_close'>关闭</div>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
	
	//隐藏域
	$("input[name=productCode]").val("${param.productCode}");
	$("input[name=loanAmt]").val("${param.loanAmt}");
	
	$("#proBack").on("click",function(){
		
		$("#productList").submit();
	 
	   	
	});
	 
 
	var dom = $(".credit_list").children(":first");
	var creditBank = dom.find('label').attr("creditBank");
	var creditNo = dom.find('span').attr("creditNo");
	var md5CreditNo = dom.find('span').attr("md5CreditNo");
	var bankKey = dom.find('span').attr("bankKey");
	$("#bankKey").val(bankKey);
	$(".hd").html(creditBank + " | " + creditNo + "<i class='more_crieds'><i/>");
	$("input[name=md5CreditNo]").val(md5CreditNo);
	$("input[name=creditCardNo]").val(creditNo);
	$("input[name=creditBank]").val(creditBank);
	
 
	
	
	$("#signlink").bind("click", function(){
		$("form").attr("action", "credit_card_03").submit();
	})
	
	var userSignature = $("input[name=userSignature]").val();
	if('null' != userSignature && userSignature.length > 0){
		$("#btnSubmit").removeClass("disabled");
		$("#signlink").find("i").addClass("ico_check_current");
		$("#btnSubmit").bind("click", function(){
			if($("input[name=makeLoanDay]").val() == ""){ 
				MessageWin("放款时间不能为空", function(){}); 
				return false;
			}
			$("form").attr("action", "kakadai/order/submitOrder").submit();
		})
	}
	
	$(".more_crieds").bind("click", function(){
		$(".mask_outer").removeClass("none");
		$(".window_credit").removeClass("none");
	})
	$(".credit_list").bind("click", function(){
		var creditBank = $(this).find('label').attr("creditBank");
		var creditNo = $(this).find('span').attr("creditNo");
		var md5CreditNo = $(this).find('span').attr("md5CreditNo");
		var bankKey = $(this).find('span').attr("bankKey");
		$("#bankKey").val(bankKey);
		$(".hd").html(creditBank + " | " + creditNo + "<i class='more_crieds'><i/>");
		$("input[name=md5CreditNo]").val(md5CreditNo);
		$("input[name=creditCardNo]").val(creditNo);
		$("input[name=creditBank]").val(creditBank);
		$(".mask_outer").addClass("none");
	    $(".window_credit").addClass("none");
	    $(".more_crieds").bind("click", function(){
			$(".mask_outer").removeClass("none");
			$(".window_credit").removeClass("none");
		})
	})
	
	$(".credit_close").bind("click", function(){
	    $(".mask_outer").addClass("none");
	    $(".window_credit").addClass("none");
    })

})
</script>
</html>
