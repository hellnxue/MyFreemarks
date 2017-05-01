<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-征信验证</title>
</head>
<body>
	<header class="ctm-header ctm-header-default">
		<a href="index" class="nav-left-icon"> <em></em>
		</a> 
		<h1 class="ctm-header-title">征信验证</h1>
	</header>
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
		<ul class="ul_list">
			<li class="title">您曾在以下哪家机构办理过信用卡，并且正在使用？</li>
			<li><i class="icon ico_radio"></i>浦发银行，上海银行 </li>
			<li><i class="icon ico_radio"></i>中国工商银行，交通银行</li>
			<li><i class="icon ico_radio"></i>浦发银行，上海银行</li>
			<li><i class="icon ico_radio"></i>中国工商银行，交通银行</li>
			<li><i class="icon ico_radio"></i>以上都不是</li>
		</ul>
		<ul class="ul_list">
			<li class="title">您曾在以下哪家机构办理过信用卡，并且正在使用？</li>
			<li><i class="icon ico_radio"></i>浦发银行，上海银行 </li>
			<li><i class="icon ico_radio"></i>中国工商银行，交通银行</li>
			<li><i class="icon ico_radio"></i>浦发银行，上海银行</li>
			<li><i class="icon ico_radio"></i>中国工商银行，交通银行</li>
			<li><i class="icon ico_radio"></i>以上都不是</li>
		</ul>
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-orange" onclick="javascript:window.location.href='./credit_02.html'">提交</button>
		</div>
	</div>
<input type="hidden" name="vcodeToken" value=<%=request.getParameter("vcodeToken")%> >
</body>
<script type="text/javascript">
$(document).ready(function(){
	$.ajax({
		async: false,
		type: "post",
		dataType: 'json',
		url: 'getQuestionAnswers',
		success: function(data) {
			var str = '';
			$(data).each(function(i, obj){
				str += 
				"<ul class='ul_list' value='" + obj.questionNo + "'>"+
					"<li class='title'>" + obj.question + "</li>";
				var item = obj.answer.split("&&");
				for (j = 0; j < item.length ; j++ ){
					str += "<li><i class='icon ico_radio' value='" + item[j].split(":")[0] + "'></i>" + item[j] + " </li>";
				}
				str +=  "</ul>";
			});
			str +=	"<div class='btn-wrap'>" +
					    "<button type='submit' class='btn l_wd btn-orange'>提交</button>"+
				    "</div>";
			$(".maincontainer").html(str);
			
			$(".ul_list li").click(function(){
				var _this = $(this);
				var _ul = $(this).parent();
				$(_ul).find("li").children("i").removeClass("ico_radio_current");
				$(_this).find("i").addClass("ico_radio_current");
			});
			
			$("button[type=submit]").bind("click", function(){
				var ans = "";
				var vcodeToken = $("input[name=vcodeToken]").val();
				$(".maincontainer>ul").each(function(i, obj){
					var dn = $(this).find(".ico_radio_current").attr("value");
					if("" == dn || undefined ==dn){
						MessageWin("答案不完整", function(){})
						return false;
					}
					if(i == ($(".maincontainer>ul").length - 1)){
						ans += $(this).attr("value") + ":" + dn;
					}else{
						ans += $(this).attr("value") + ":" + dn + ",";
					}
					
				});
				$.ajax({
					async: false,
					type: "POST",
					dataType: 'json',
					url: "verifyCreditQuestion",
					data: {answer: ans,
						   vcodeToken : vcodeToken},
					success: function(data) {
						if("0000" == data.code){
							window.location.href='credit_03'; 
						}else {
							MessageWin(data.msg, function(){});
							window.location.href='credit_03'; 
						}
					}
				});
			})
			
		}
	});
});
</script>

</html>
