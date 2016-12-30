<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>提额法宝</title>

</head>

<body style=" background-color:#efeff4;">
	<div id="main-wrapper">	
	
		<header class="ctm-header ctm-header-default">
			<a href="index" class="nav-left-icon"> <em></em>
			</a> 
			<!-- <a href="#" class="nav-right-icon"> <span>返回首页</span>
			</a> -->
			<h1 class="ctm-header-title">运营商验证</h1>
		</header>
		
		<div class="ctm-container withdraw_list " data-withdraw-list >
 			<!-- <div class="ctm-row  m-t-xxl withdraw_list_bg"  >
				<div class="custom-col-10" >
					<div class="ctm-row"  >
						<div class="custom-col-5" >
						 	 <h1 class="wd_title">个人征信</h1>
						</div> 
						<div class="custom-col-5" >
						 	 <p class="wd_star">法力提升：<i></i><i></i><i></i><i></i><i></i></p>
						</div> 					 		
				    </div>	
					<div class="ctm-row  wd_date">
						<div class="custom-col-5 text-left" >
						 	 <p class=" ">上次提交时间</p>
						</div> 
						<div class="custom-col-5 text-right" >
						 	 <p class=" ">2016/12/12</p>
						</div> 					 		
				    </div>
					<div class="ctm-row m-t-xl text-center wd_btn">
						<div class="custom-col-10 " >
						 	 <button type="button" class="btn btn-white ctm-box-shadow ">不可提交</button>
						</div> 
				    </div>					    				    
				</div> 
				 		
			</div>		


			<div class="ctm-row  m-t-xxxl withdraw_list_bg operator_bg"  >
				<div class="custom-col-10" >
					<div class="ctm-row"  >
						<div class="custom-col-5" >
						 	 <h1 class="wd_title">运营商</h1>
						</div> 
						<div class="custom-col-5" >
						 	 <p class="wd_star">法力提升：<i></i><i></i><i></i><i></i><i></i></p>
						</div> 					 		
				    </div>	
					<div class="ctm-row  wd_date">
						<div class="custom-col-5 text-left" >
						 	 <p class=" ">上次提交时间</p>
						</div> 
						<div class="custom-col-5 text-right" >
						 	 <p class=" ">2016/12/12</p>
						</div> 					 		
				    </div>
					<div class="ctm-row m-t-xl text-center wd_btn">
						<div class="custom-col-10 " >
						 	 <button type="button" class="btn btn-white ctm-box-shadow usable">可提交</button>
						</div> 
				    </div>					    				    
				</div> 
				 		
			</div> -->	  		
		 </div>
	</div>	
	<script type="text/html" id="withdraw">
		
		{{if result}}
			<div>
			{{each result as wdw index}}
				{{if wdw.processCode==40}}
				   <div class="ctm-row  m-t-xxl withdraw_list_bg"  >				
			    {{else}}
			       <div class="ctm-row  m-t-xxl withdraw_list_bg operator_bg"  >
				{{/if}}
				<div class="custom-col-10" >
					<div class="ctm-row"  >
						<div class="custom-col-5" >
						 	 <h1 class="wd_title">{{wdw.processDesc.processName}}</h1>
						</div> 
						<div class="custom-col-5" >
						 	 <p class="wd_star">法力提升：<i></i><i></i><i></i><i></i><i></i></p>
						</div> 					 		
				    </div>	
					<div class="ctm-row  wd_date">
						<div class="custom-col-5 text-left" >
						 	 <p class=" ">上次提交时间</p>
						</div> 
						<div class="custom-col-5 text-right" >
						 	 <p class=" ">{{wdw.processDesc.processDate}}</p>
						</div> 					 		
				    </div>
					<div class="ctm-row m-t-xl text-center wd_btn">
						<div class="custom-col-10 ">
							{{if wdw.processDesc.status==0}}
						 	   <button type="button" class="btn btn-white ctm-box-shadow " data-process-code="{{wdw.processCode}}" data-status="{{wdw.processDesc.status}}">不可提交</button>
							{{else}}
								<button type="button" class="btn btn-white ctm-box-shadow usable" data-process-code="{{wdw.processCode}}" data-status="{{wdw.processDesc.status}}">可提交</button>
							{{/if}}
						</div> 
				    </div>					    				    
				</div> 
				 		
			</div>		
		 
		{{/each}}	
		</div>
		{{/if result}}		 

	</script>
	
    <script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script> 
	<script src="<%=request.getContextPath()%>/resource/js/views/html/withdraw_cash.js" type="text/javascript" ></script>  
     
</body>
</html>
