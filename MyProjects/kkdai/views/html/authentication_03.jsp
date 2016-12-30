<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>

<jsp:include page="../commen.jsp"></jsp:include>
<%-- <script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.mailAutoComplete-4.0.js"></script> --%>
<!-- <script type="text/javascript" src="resource/js/json.js"></script> -->
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/mobiscroll.2.13.2.css" rel="stylesheet" />

<title>信贷GUI-身份验证3</title>
</head>
<body>
  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
	<div class="header">
		<a href="authentication_02" class="icon ico_back"></a>
		身份验证信息
	</div>
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
		<form id='authenticationForm' action='authentication_03_submit' method="post" >
			<div class="form_wrap">
			
				<!-- 省份 -->
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>居住省份：</label>
					<span class='province'>请选择</span>
					<i class="icon ico_arrow_down"></i>
					
					<div id='province_dom' class="subnav none">
					</div>
				</div>
				
				<!-- 城市 -->
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>居住城市：</label>
					<span class='city'>请选择</span>
					<i class="icon ico_arrow_down"></i>
					<div id='city_dom' class="subnav none">
					
					</div>
				</div>
				
				<!-- 地区-->
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>居住地区：</label>
					<span class='district'>请选择</span>
					<input type='hidden' name='locality' value='' class='validate' msg='请选择居住地区'/><!-- district -->
					<i class="icon ico_arrow_down"></i>
					<div id='district_dom' class="subnav none">
					
					</div>
				</div>
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>详细地址：</label>
					<input type="text" name="address" value="" placeholder="峨山路91弄伟泰大厦B区4楼" class="form-control validate" required="required" msg='详细地址不能为空'/>
				</div>
				<div class="form-group">
					<label class="control-label">居住地固话：</label>
					<input type="text" name="homeTelephone" value="" placeholder="021-88888888" class="form-control validate" required="required" msg='居住地固话不能为空'/>
				</div>
 
			</div>
			<!-- <div class="form_wrap">
				  <div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q：</label>
					<input type="hidden" name="email" >
					<input type="text" name="oicq" value=""  class="form-control validate" required="required" msg='QQ不能为空'/>
				</div>  
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>QQ邮箱：</label>
					
					<input type="hidden" name="email" class="validate" msg='QQ邮箱不能为空'  >
					
					<input type="text" name="email" placeholder="00@163.com" class="form-control validate" required="required"  style="display:inline ; width: 66%" msg='QQ不能为空'><a>@qq.com</a>
				</div>
			</div> -->
			<div class="form_wrap">
			   <div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q：</label>
					<input type="hidden" name="email" >
					<input type="text" name="oicq" value=""  class="form-control validate" required="required" msg='QQ不能为空'/>
				</div> 
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>婚姻状况：</label>
					<span>请选择</span>
					<input type='hidden' name='marriage' class='validate' msg='请选择婚姻状况'/>
					<i class="icon ico_arrow_down"></i>
					<div class="subnav none">
						<a href="javascript:void(0)" data-code='1'>未婚</a>
						<a href="javascript:void(0)" data-code='2'>已婚未育</a>
						<a href="javascript:void(0)" data-code='3'>已婚已育</a>
						<a href="javascript:void(0)" data-code='4'>离异</a>
						<a href="javascript:void(0)" data-code='5'>其他</a>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>学 　　历：</label>
					<span>请选择</span>
					<input type='hidden' name='education' class='validate' msg='请选择学历'/>
					<i class="icon ico_arrow_down"></i>
					<div class="subnav none">
						<a href="javascript:void(0)" data-code='1'>高中以下</a>
						<a href="javascript:void(0)" data-code='2'>高中</a>
						<a href="javascript:void(0)" data-code='3'>中专</a>
						<a href="javascript:void(0)" data-code='4'>大专</a>
						<a href="javascript:void(0)" data-code='5'>本科</a>
						<a href="javascript:void(0)" data-code='6'>硕士</a>
						<a href="javascript:void(0)" data-code='7'>博士</a>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label"><bdo class="c_orange">*</bdo>当前状态：</label>
					<span class="curStatus">请选择</span>
					<input type='hidden' name='currentStatus' class='validate' msg='请选择当前状态'/>
					<i class="icon ico_arrow_down"></i>
					<div id="curStatus" class="subnav none">
					</div>
				</div>
			</div>
			<div class="form_wrap">
				<div class="form-group">
					<label class="control-label" data-cmp data-msg='请选择从事行业'><bdo class="c_orange">*</bdo>从事行业：</label>
					<label class="control-label none" data-stu data-msg='请选择专业类型'><bdo class="c_orange">*</bdo>专业类型：</label>
					<span>请选择</span>
					<input type='hidden' name='trade' class='validate' msg='请选择从事行业'/>
					<i class="icon ico_arrow_down"></i>
					<div class="subnav none">
						<a href="javascript:void(0)" data-code='A'>农，林，牧，渔业</a>
						<a href="javascript:void(0)" data-code='B'>采矿业</a>
						<a href="javascript:void(0)" data-code='C'>制造业</a>
						<a href="javascript:void(0)" data-code='D'>电力，热力，燃气及水生产和供应业</a>
						<a href="javascript:void(0)" data-code='E'>建筑业</a>
						<a href="javascript:void(0)" data-code='F'>批发和零售业</a>
						<a href="javascript:void(0)" data-code='G'>交通运输，仓储和邮政业</a>
						<a href="javascript:void(0)" data-code='H'>住宿和餐饮业</a>
						<a href="javascript:void(0)" data-code='I'>信息传输，软件和信息技术服务业</a>
						<a href="javascript:void(0)" data-code='J'>金融业</a>
						<a href="javascript:void(0)" data-code='K'>房地产业</a>
						<a href="javascript:void(0)" data-code='L'>租赁和商务服务业</a>
						<a href="javascript:void(0)" data-code='M'>科学研究和技术服务业</a>
						<a href="javascript:void(0)" data-code='O'>居民服务，修理和其他服务业</a>
						<a href="javascript:void(0)" data-code='P'>教育</a>
						<a href="javascript:void(0)" data-code='Q'>卫生和社会工作</a>
						<a href="javascript:void(0)" data-code='R'>文化，体育和娱乐业</a>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label" data-cmp data-msg='公司名称不能为空'><bdo class="c_orange">*</bdo>公司名称：</label>
					<label class="control-label none" data-stu data-msg='学校名称不能为空'><bdo class="c_orange">*</bdo>学校名称：</label>
					<input type="text" name="companyName" value="" placeholder="某某有限公司" class="form-control validate" msg='公司名称不能为空'  required="required"/>
				</div>
				
				<!--公司地址-省市区-->
				<div class="form-group">
					<label class="control-label" data-cmp data-msg='请选择公司地址'><bdo class="c_orange">*</bdo>公司地址：</label>
					<label class="control-label none" data-stu data-msg='请选择学校地址'><bdo class="c_orange">*</bdo>学校地址：</label>
					<span class="curStatus">请选择</span>
					<input type='hidden' name='caddress1' class='validate' msg='请选择公司地址'/>  
					<i class="icon ico_arrow_down"></i>
					<div id="cAddress" class="subnav none">
					   
					</div>
				</div>
				<!-- 详细地址 -->				
				<div class="form-group">
					<label class="control-label"  data-cmp  data-msg='详细地址不能为空'><bdo class="c_orange">*</bdo>公司详细地址：</label>
					<label class="control-label none" data-stu data-msg='详细地址不能为空'><bdo class="c_orange">*</bdo>学校详细地址：</label>
					<input type='hidden' name='companyAddr' class='validate' msg='详细地址不能为空'/>  
					<input type="text" name="caddress2" value="" placeholder="峨山路91弄伟泰大厦B区4楼" class="form-control validate m-l-xl"   required="required"/>
				</div>
				<div class="form-group">
					<label class="control-label cdate"  data-cmp data-msg='公司固话不能为空'><bdo class="c_orange">*</bdo>公司固话：</label>
					<input type="text" name="companyTelephone"  placeholder="021-88888888" class="form-control validate"  msg='公司固话不能为空'  required="required"/>
					
					<!--学生-入学年份  -->
					<label class="control-label none cdate" data-stu data-msg='请选择入学年份' ><bdo class="c_orange">*</bdo>入学年份：</label>
					<input type="text" data-datey="dateY" class="form-control none" placeholder="选择入学年份" > 
				</div>
				<div class="form-group">
				    <label class="control-label"><bdo class="c_orange">*</bdo>月 收 入：</label>
					<span>请选择</span>
					<input type='hidden' name='salary' class='validate' msg='请选择月收入'/>
					<i class="icon ico_arrow_down"></i>
					<div class="subnav none">
						<a href="javascript:void(0)" data-code='3000'>3000以下</a>
						<a href="javascript:void(0)" data-code='5000'>3000~5000</a>
						<a href="javascript:void(0)" data-code='8000'>5001~8000</a>
						<a href="javascript:void(0)" data-code='12000'>8001~12000</a>
						<a href="javascript:void(0)" data-code='15000'>12001~15000</a>
						<a href="javascript:void(0)" data-code='20000'>15001~20000</a>
						<a href="javascript:void(0)" data-code='20001'>20000以上</a>
					</div>
				</div>
			</div>
			<center>${msg}</center>
			<div class="btn-wrap">
				<!-- <button type="button" class="btn l_wd btn-white" onclick="javascript:window.location.href='./linkman.html'">下一步</button> -->
				<button id='authentication_03_form' type="button" onclick="submitInfo()" class="btn l_wd btn-white ctm-box-shadow">下一步</button>
			</div>
			<div class="tips">
				<bdo class="c_orange">*</bdo>为必填信息
			</div>
			<input name='name' type="hidden" value=<%=request.getParameter("name")%>>
			<input name='identityAddress' type="hidden" value=<%=request.getParameter("address")%>>
			<input name='identityNo' type="hidden" value=<%=request.getParameter("identityNo")%>>
			<input name='identityEffectiveDate' type="hidden" value=<%=request.getParameter("validity")%>>
			<input name='mobile' type="hidden" value='15221347803'>
		</form>
	</div>
	<script>
	   var returnInfo= '${map.json}';
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/common/mobiscroll.2.13.2.js" type="text/javascript" ></script>
	
 	<script src="<%=request.getContextPath()%>/resource/js/views/JSON/dataJSON.js" type="text/javascript" ></script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/authentication_03.js" type="text/javascript" ></script>

</body>
</html>
