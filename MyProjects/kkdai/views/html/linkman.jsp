<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-联系人</title>
<script type="text/javascript">
	$(document).ready(function(){
		$(".form-group>span").click(function(){
			var b=$(this).parent().find(".subnav").css("display")
	  		if( b=="none"){
	        	$(this).parents().find(".subnav").hide();
	  			$(this).parent().find(".subnav").show();
	  			$(this).parents().find("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
	        	$(this).parent().find("i").attr("class","icon ico_arrow_up")
	        } else {
	        	$(this).parent().find(".subnav").hide()
	        	$(this).parent().find("i").attr("class","icon ico_arrow_down")
	        }
	    });
	    $('.subnav a').click(function(){
			$(this).parents('.form-group').find('span').html($(this).html()); //改变span文本内容
			$(this).parents('.form-group').find('input').val($(this).attr("code")); //改变span文本内容
			$(this).parents('.form-group').find('span').addClass("current")
			$(this).parents().find('.subnav').hide();
			$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		});
	});
	
	function checkNull(){
		var validate = true;
		$(".validate").each(function(){
			if('' == $(this).val() || 'undefined' == $(this).val()){
				MessageWin($(this).attr('msg'), function(){});
				validate = false;
				return false;
			}
		});	
	}
</script>
</head>
<body>
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		联系人
	</div>
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
	<form action='linkman_submit' id='formid' method="post" >
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">与本人关系</label>
				<span>请选择</span>
				<input type='hidden' name='relation1' class='validate' msg='请选择与本人关系' >
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='301'>配偶</a>
					<a href="javascript:void(0)" code='302'>父母</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">姓　名：</label>
				<input type="text" name="relationName1" value="" placeholder="联系人姓名" class="form-control" required="required"/>
				<i class="icon ico_linkman"></i>
			</div>
			<div class="form-group">
				<label class="control-label">电　话：</label>
				<input type="text" name="relationMobile1" value="" placeholder="联系人电话" class="form-control" required="required"/>
			</div>
		</div>
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">与本人关系</label>
				<span>请选择</span>
				<input type='hidden' name='relation2' class='validate' value='' msg='请选择与本人关系'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='101'>姐妹</a>
					<a href="javascript:void(0)" code='102'>兄弟</a>
					<a href="javascript:void(0)" code='103'>亲属</a>
					<a href="javascript:void(0)" code='104'>朋友</a>
					<a href="javascript:void(0)" code='105'>同学</a>
					<a href="javascript:void(0)" code='106'>同事</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">姓　名：</label>
				<input type="text" name="relationName2" value="" placeholder="联系人姓名" class="form-control" required="required"/>
				<i class="icon ico_linkman"></i>
			</div>
			<div class="form-group">
				<label class="control-label">电　话：</label>
				<input type="text" name="relationMobile2" value="" placeholder="联系人电话" class="form-control" required="required"/>
			</div>
		</div>
		<center>${msg}</<center>
		<div class="btn-wrap">
			<button id='linkman_form' type="submit" class="btn l_wd btn-white"  onclick="return checkNull()">下一步</button>
		</div>
		<div class="tips">
			<bdo class="c_orange">*</bdo>为必填信息
		</div>
	</form>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
	$.ajax({
		async: false,
		type: "POST",
		dataType: 'json',
		url: 'getLoad',
		success: function(data) {
			if(data.code == '0000'){
				var relation1 = $("input[name=relation1]");
				relation1.val(data.result.resultRelation.relation1)
				relation1.parent().find("span").html(data.result.resultRelation.relation1Name).attr("class", "current");
				
				var relationName1 = $("input[name=relationName1]").val(data.result.resultRelation.relationName1)
				var relationMobile1 = $("input[name=relationMobile1]").val(data.result.resultRelation.relationMobile1)
				
				var relation2 = $("input[name=relation2]");
				relation2.val(data.result.resultRelation.relation2)
				relation2.parent().find("span").html(data.result.resultRelation.relation2Name).attr("class", "current");
				
				var relationName2 = $("input[name=relationName2]").val(data.result.resultRelation.relationName2)
				var relationMobile2 = $("input[name=relationMobile2]").val(data.result.resultRelation.relationMobile2)
				
			}
		}
	});
})
</script>
</html>
