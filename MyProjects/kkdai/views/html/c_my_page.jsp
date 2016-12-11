<%@ page language="java" import="java.util.
*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>产品详情</title>
<script type="text/javascript">
   (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
       
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
  
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
   
   $(document).ready(function(){
	   $("div.footer>a").removeClass("footer_current");
	   $("i.foot_ico_3").parent().parent().addClass("footer_current");
	   
   })
</script>
</head>

<body>
    <div class="me_top">15989987899</div>
    <ul class="me_ul">
      <li><div class="me_li1"></div>历史交易<a  href="c_history_list" class="me_go_ico"></a></li>
      <li><div class="me_li2"></div>银行卡管理<a  href="credit_card_01" class="me_go_ico"></a></li>
      <li><div class="me_li3"></div>发现<a  href="c_product_list" class="me_go_ico"></a></li>
      <li><div class="me_li4"></div>安全信息修改<a  href="#" class="me_go_ico"></a></li>
      <li><div class="me_li5"></div>帮助中心<a  href="#" class="me_go_ico"></a></li>
      <li><div class="me_li6"></div>设置<a  href="#" class="me_go_ico"></a></li>
    </ul>
<jsp:include page="foot.jsp"></jsp:include>
</body>
</html>
