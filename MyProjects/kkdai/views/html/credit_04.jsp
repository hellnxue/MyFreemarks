<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-获取查询码</title>
</head>
<body>

	<!-- <header class="ctm-header ctm-header-default">
		<a href="#" class="nav-left-icon" data-type="1"> <em></em>
		</a> 
		<h1 class="ctm-header-title">获取查询码</h1>
	</header> -->
	
	<div class="maincontainer " style="margin-top:60px;">

		   <form action="credit_04" method="post" id="cdForm" data-step="getCreditQuestion" class="show">
			<input type="hidden" name="userId" value="${userSession.userId}">
			<input type="hidden" name="date">
			<input type="hidden" name="cookieString">
			<div class="form_wrap m-t-none p-t-none" >
				<div class="form-group hm-form-group">
					<label class="control-label" id="hh">授权账号</label>
					<input type="text" name="userName" value="" placeholder="请输入授权账号" class="form-control validate" required="required" msg='征信账号不能为空'/>
				</div>
				<div class="form-group hm-form-group">
					<label class="control-label">授权密码</label>
					<input type="password" name="userPwd" value="" placeholder="请输入授权密码" class="form-control validate" required="required" msg='征信密码不能为空'/>
				</div>
			</div>
			<div class="form_wrap" >
				<div class="form-group hm-form-group">
					<label class="control-label"><!-- <bdo class="c_orange">*</bdo> -->验证码</label> 
					<input type="text" name="verifyCode" value="" placeholder="请输入验证码" class="form-control validate" required="required" msg='验证码不能为空' style="width:55%;"/>
					<div class="ImageCode" id="getMobileCode"><img src="" alt="请点击重新获取"  /></div>
				</div>
			</div>
			  
			<div class="btn-wrap">
				<!-- <button type="button" class="btn l_wd btn-orange ctm-box-shadow" data-confirm>确认</button> -->
				<button type="button" class="btn  btn-orange ctm-box-shadow" id="regNext" >下一步</button>
			</div>
			
		</form>    
		
		<form action="verifyCreditQuestion"  method="post" id="qnForm" data-step="questions" class="none">
			<div id="questionsItems">
				<!-- <ul class="mui-table-view">
				<li class="mui-table-view-cell hm-t-v-cell">
					 1、2014年01月至2016年10月期间，您所有尚未还清的贷款中，最近办理的一笔贷款何时到期？
				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a>
						<label class="pull-left">A、个人经营性贷款</label>
						<i class="pull-right checked"></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a>
						<label class="pull-left">B、个人经营性贷款</label>
						<i class="pull-right "></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a>
						<label class="pull-left">C、个人经营性贷款</label>
						<i class="pull-right "></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a>
						<label class="pull-left">D、个人经营性贷款</label>
						<i class="pull-right "></i>					
					</a>

				</li>	
				<li class="mui-table-view-cell hm-t-v-cell">
					<a>
						<label class="pull-left">E、个人经营性贷款</label>
						<i class="pull-right "></i>					
					</a>

				</li>												
			</ul> -->
			</div>
			
			<div class="btn-wrap">
				<button type="button" class="btn  btn-orange ctm-box-shadow"  id="checkQuestions">下一步</button>
			</div>
			
		</form>

	</div>
	
<!-- 数据渲染模板 -->	
<script id="questionItems" type="text/html">
		  
		{{if result&&result.questions}}
			  {{each result.questions as value index}}
				<ul class="mui-table-view ">
				<input type="hidden" name="{{value.orderNo}}" class="validate" msg='有未回答的问题'/>
				<li class="mui-table-view-cell hm-t-v-cell caption">
					 {{index+1}}、{{value.question}}
				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a data-option="1">
						<label class="pull-left">A、{{value.options1}}</label>
						<i class="pull-right "  ></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a data-option="2">
						<label class="pull-left">B、{{value.options2}}</label>
						<i class="pull-right "  ></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a data-option="3" >
						<label class="pull-left">C、{{value.options3}}</label>
						<i class="pull-right "  ></i>					
					</a>

				</li>
				<li class="mui-table-view-cell hm-t-v-cell">
					<a data-option="4" >
						<label class="pull-left">D、{{value.options4}}</label>
						<i class="pull-right "  ></i>					
					</a>

				</li>	
				<li class="mui-table-view-cell hm-t-v-cell">
					<a data-option="5" >
						<label class="pull-left">E、{{value.options5}}</label>
						<i class="pull-right "  ></i>					
					</a>

				</li>												
			</ul>
			  {{/each}}
		{{/if}}
					
	</script>
	
	<script>
		var  userId= '${userSession.userId}';
		var path="<%=request.getContextPath()%>";
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_04.js" type="text/javascript" ></script>  
  
</body>
</html>
