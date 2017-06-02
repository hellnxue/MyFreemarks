<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>产品详情</title>

</head>

<body style=" background-color:#efeff4;">

	<div id="main-wrapper" style="margin-top:60px;">	
		<!-- <header class="ctm-header ctm-header-default">
			<a href="c_my_page" class="nav-left-icon"> <em></em>
			</a>
			<h1 class="ctm-header-title">借贷产品</h1>
		</header> -->
		<div class="ctm-container pro_list" data-product  style="margin-bottom:80px;"> </div>
	</div>	
	 
	<script type="text/html" id="productList">
		{{if result}}
		<div>
		  {{each result as obj index}}
			<div class="m-t pro_list_bg" data-code="{{obj.productCode}}" >
			  <div class="ctm-row">
				<div class="custom-col-2" >
				 	<span class="tag">Hot</span>
				</div> 
				<div class="custom-col-8  m-t-xl text-center" >
				 	<h1 class="pro_title">{{obj.productName}}</h1>
				 	<p class="pro_info1 m-t-sm">{{obj.handingRateDesc}}<span> | {{obj.periodDesc}}</span></p>
				 	<p class="pro_info2 m-t-md"> {{obj.rateDesc}}</p>
				 	<button type="button" class="btn btn-white ctm-box-shadow m-t-xl" >点我查看详情</button>
				</div> 				
			  </div>
			</div>			
		  {{/each}}
		</div>
		{{/if}}	

	</script>
	
    <script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script> 
	<script src="<%=request.getContextPath()%>/resource/js/views/html/c_product_list.js" type="text/javascript" ></script>  
     
</body>
</html>