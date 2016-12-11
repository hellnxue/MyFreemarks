<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-合同套件</title>
<script type="text/javascript">
$(document).ready(function(){
	$(".btn-signature").bind("click", function(){
		if($(".signature-con").hasClass("none")){
			$(".signature-con").removeClass("none");
		}else {
			$(".signature-con").addClass("none");
		}
	})
	
	$("#tijiao_form").bind("click", function(){
		$("#imageData").val("data:image/png;base64,/00000")
		$("form").submit();  
	})
})
</script>
</head>
<body class="yellow_bg">
	<div class="header">
		<a href="credit_card_02.html" class="icon ico_back"></a>
		合同套件
	</div>
	<div class="maincontainer">
	<iframe name="Info1" id="iframepage" src="" wonload="this.height=Info1.document.body.scrollHeight" width="100%" height="6000%" scrolling="no" frameborder="0"></iframe>
		<div class="text-con">
			<div class="hd">特别提醒函</div>
			<p>尊敬的陈成客户：</p>
	    	<p> 为了完善”信用算”在线服务平台的服务质量，提供优质高效的服务，维护您的合法权益，作为贷款服务方，我司特去请您仔细阅读并确认一下内容：</p>
	    	<h2> 一、贷款详情</h2>
			<p>为了完善”信用算”在线服务平台的服务质量，提供优质高效的服务，维护您的合法权益，作为贷款服务方，我司特去请您仔细阅读并确认一下内容</p>
		    <h2>二、贷款详情</h2>
			<p>为了完善”信用算”在线服务平台的服务质量，提供优质高效的服务，维护您的合法权益，作为贷款服务方，我司特去请您仔细阅读并确认一下内容</p>
		</div>
	</div>

<div class="mask_outer none"></div>
<div class="layer-agreement">
    <button type="button" class="btn btn-orange" id="tijiao_form">确认</button>
	<div class="btn-signature"><a href="#"><i class="icon ico_arrow_down"></i>同意协议并签名</a></div>
	<div id='signature-content' class="signature-con none">
		<div class="bd" >
		  <div id="canvasDiv" class="form-control agreement-ipt" style="text-align: center;">
		      <canvas id="myCanvas" width="1400" height="1400"></canvas>
		      <img id='img' width="300" height="300" style="display: none;"/>
		  </div>
		</div>
		<div class="btn-wrap">
			<button type="button" onclick="clean();" class="btn s_wd btn-orange" id="btn_clear">重写</button>
			<button type="button" onclick="save();" class="btn s_wd btn-orange" id="btn_submit">保存</button>
		</div>
	</div>
</div>
<form action="credit_card_02" method="post" style="display:none">
   <input type="hidden" name="productCode" value="<%=request.getParameter("productCode")%>"/>
   <input type="hidden" name="creditNo" value="<%=request.getParameter("creditNo")%>" />
   <input type="hidden" name="creditBank" value="<%=request.getParameter("creditBank")%>" />
   <input type="hidden" name="md5CreditNo" value="<%=request.getParameter("md5CreditNo")%>" />
   <input type="hidden" name="loanAmt" value="<%=request.getParameter("loanAmt")%>" />
   <input type="hidden" name="repaymentPeriod" value="<%=request.getParameter("repaymentPeriod")%>" />
   <input type="hidden" name="poundage" value="<%=request.getParameter("poundage")%>" />
   <input type="hidden" name="makeLoanDay" value="<%=request.getParameter("makeLoanDay")%>" />
   <input type="hidden" name="capital" value="<%=request.getParameter("capital")%>" />
   <input type="hidden" name="makeLoanDay" value="<%=request.getParameter("makeLoanDay")%>" />
   <input type="hidden" name="userSignature" id="imageData" />
</form>
</body>
<script type="text/javascript">
     var canvas,board,img;
     canvas = document.getElementById('myCanvas');
     img= document.getElementById('img');
     board = canvas.getContext('2d');
     var mousePress = false;
     var last = null;
     <!--开始绘图-->
     function beginDraw(){
         mousePress = true;
     }
     <!--绘图监听-->
     function drawing(event){
         event.preventDefault();
         if(!mousePress)return;
         var xy = pos(event);
         if(last!=null){
             board.beginPath();
             board.moveTo(last.x,last.y);
             board.lineTo(xy.x,xy.y);
             board.stroke();
         }
         last = xy;

     }
     <!--停止绘图-->
     function endDraw(event){
          mousePress = false;
          event.preventDefault();
          last = null;
     }
     <!--触摸屏幕的坐标-->
     function pos(event){
         var x,y;
         if(isTouch(event)){
             x = event.touches[0].pageX;
             y = event.touches[0].pageY;
         }else{
             x = event.offsetX+event.target.offsetLeft;
             y = event.offsetY+event.target.offsetTop;
         }
         return {x:x,y:y};
     }
     <!--触摸屏幕的事件-->
     function isTouch(event){
         var type = event.type;
         if(type.indexOf('touch')>=0){
             return true;
         }else{
             return false;
         }
     }
     <!--生成图片-->
     function save(){
    	 $("#imageData").val(canvas.toDataURL("image/png"))
    	 $("form").submit();  
     }
     <!--清空图片-->
     function clean(){
         board.clearRect(0,0,canvas.width,canvas.height);
         img.src = null;
     }
     board.lineWidth = 2;//设置画笔线条粗细
     //board.strokeStyle="#0000ff";//设置字体颜色
     canvas.onmousedown = beginDraw;
     canvas.onmousemove = drawing;
     canvas.onmouseup = endDraw;
     canvas.addEventListener('touchstart',beginDraw,false);
     canvas.addEventListener('touchmove',drawing,false);
     canvas.addEventListener('touchend',endDraw,false);


</script>
</html>
