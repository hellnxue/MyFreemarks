<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
 <link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/layer.css" rel="stylesheet" />
 
<jsp:include page="../commen.jsp"></jsp:include>


 <title>账单中心-取消订单</title>

</head>
<body>

	<div class="header">
		<a href="bill_manage_01" class="pull-right ctm-icon-txt "  >确认</a>
		我的账单
		
	</div>
	<div class="ctm-container m-t-xxxl">
	  
		<div class="ctm-img-wrapper none" data-success>
		   <img src="<%=request.getContextPath()%>/resource/images/main/b_ok@2x.png" width="30%"/>
		   <p class="m-t-lg p-t">该笔账单撤销成功！</p>
		</div>
		
		<div class="ctm-img-wrapper none" data-tip>
		   <img src="<%=request.getContextPath()%>/resource/images/main/cancel@2x.png" width="30%"/>
		   <p class="m-t-lg p-t m-l-md m-r-md">该笔账单预约放款日为当天，不能取消。如有疑问，请联系客服400-056-1212</p>
		</div>
	
	</div>
   <script type="text/javascript">
      var status="${param.flag}";
      if(status!=""){
    	  if(status=="success"){
    		  $("[data-success]").removeClass("none");
    		  $("[data-tip]").addClass("none");
    	  }else{
    		  $("[data-success]").addClass("none");
    		  $("[data-tip]").removeClass("none");
    	  }
      }
   </script>
</body>
</html>
