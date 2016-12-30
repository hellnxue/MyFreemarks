
var infoObj=null;
 if(returnInfo!=""){
	   infoObj=JSON.parse( returnInfo);
	   if(infoObj.msg){
		   MessageWin(infoObj.msg);
	   }
	  
 }

$(document).ready(function(){
		
		 
		 handelDateY();
	
		 initProvince();//初始化省市区
		 
		 initCurStatus();//初始化当前状态
		 
		 initCompanyAddress();//初始化公司地址-省市区
		 
		 initPageData();//页面数据加载
		 
		 selectItemUpDown(); //点击下拉
		
		 $(".form-group>span").click(handleItem); //下拉项选择处理
		 
			
	});

/*日期-年选择*/
function handelDateY(){
	var curr = new Date().getFullYear();
	 var opt = {  
				'default': {
					theme: 'default',
					mode: 'scroller',
					display: 'modal',
					animate: 'fade'
               },
				'dateY': {
                   preset: 'date',
					dateFormat: 'yyyy',
					defaultValue: new Date(new Date()),		
					invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] },	
					onBeforeShow: function (inst) { 
						if(inst.settings.wheels[0].length>1)
						{
							inst.settings.wheels[0].pop();
							inst.settings.wheels[0].pop();
						}else{
							null
						}
					}
               }
    };
	 
	 $('input[data-datey="dateY"]').scroller($.extend(opt['dateY'],opt['default']));
	
}

/*点击下拉*/
function selectItemUpDown(){
	 $(".subnav:not(#province_dom,#city_dom,#district_dom,#curStatus,#cAddress) a").on("click",function(){
		 
		    $(this).parent().siblings('span').html($(this).html()).addClass("current"); //改变span文本内容
		    $(this).parent().siblings('input').val($(this).data("code")); //改变span文本内容
			$(this).parent(".subnav").hide();
			
			$(this).siblings("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		 
	 });
	
}



/*
 * 选项下拉处理
*/
function handleItem(){
		
	var b=$(this).parent().find(".subnav");
	if($(b).is(":hidden")){
	    //$(this).parents().find(".subnav").hide();
		$(this).parent().find(".subnav").show();
		$(this).parents().find("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		$(this).parent().find("i").attr("class","icon ico_arrow_up");
    } else {
    	$(this).parent().find(".subnav").hide();
    	$(this).parent().find("i").attr("class","icon ico_arrow_down");
    }
	
}

/*页面数据加载*/
function initPageData(){
	
	 $.ajax({
			async: false,
			type: "POST",
			dataType: 'json',
			url: 'getLoad',
			success: function(data) {
				if(data.code == '0000'){
					var locality = $("input[name=locality]");
					locality.val(data.result.resultIdentity.locality);
					//locality.parent().find("span").html(data.result.resultIdentity.localityName).attr("class", "current");//???
					
					//省市区默认处理
					if(data.result.resultIdentity.locality){
						var pcdAry=data.result.resultIdentity.locality.split("|");
						if(pcdAry){
							if(pcdAry[0]){
								$("#province_dom").siblings(".province").html(pcdAry[0]).addClass("current");
								if(pcdAry[1]){
									$("#city_dom").siblings(".city").html(pcdAry[1]).addClass("current");
									initCity(pcdAry[0],1);
									initDistrict(pcdAry[0],pcdAry[1],1);
									if(pcdAry[2]){
										$("#district_dom").siblings(".district").html(pcdAry[2]).addClass("current");
									}
								}
							}
						}
					}
					
					//居住地固话
				    $("input[name=homeTelephone]").val(data.result.resultIdentity.homeTelephone);
				    
				    //详细地址
					$("input[name=address]").val(data.result.resultIdentity.address);
					
					//QQ
					$("input[name=oicq]").val(data.result.resultIdentity.oicq);
					
					//邮箱处理
					if(data.result.resultIdentity.email){
						$("input[name=email]").val(data.result.resultIdentity.email.split("@")[0]);
					}
					
					//婚姻状况
					var marriage = $("input[name=marriage]");
					marriage.val(data.result.resultIdentity.marriage).siblings("span").html(data.result.resultIdentity.marriageName).attr("class", "current");
					
					//学历
					var education = $("input[name=education]");
					education.val(data.result.resultIdentity.education).siblings("span").html(data.result.resultIdentity.educationName).attr("class", "current");
					
					//当前状态
					var currentStatus = $("input[name=currentStatus]");
					currentStatus.val(data.result.resultIdentity.currentStatus).siblings("span").html(data.result.resultIdentity.currentStatusName).attr("class", "current");
					
					//当前状态为学生时切换标签
					if(data.result.resultIdentity.currentStatus=="61"){
						
						changeForStudent(data.result.resultIdentity.currentStatus,true);
						
					}
					//从事行业
					var trade = $("input[name=trade]");
					trade.val(data.result.resultIdentity.trade).siblings("span").html(data.result.resultIdentity.tradeName).attr("class", "current");
					
					//公司名称
					$("input[name=companyName]").val(data.result.resultIdentity.companyName);
					  
					//公司地址
					var cdvalue=data.result.resultIdentity.companyAddr;
					var companyA=cdvalue.substring(cdvalue.lastIndexOf("|")+1);
					var caddressSpan=cdvalue.substring(0,cdvalue.lastIndexOf("|")+1).replace( new RegExp("\\|","g") ," ") ;
					var caddressInput=cdvalue.substring(0,cdvalue.lastIndexOf("|")) ;
					
					$("input[name=caddress1]").val(caddressInput).siblings("span").html(caddressSpan);
					//公司详细地址
					$("input[name=caddress2]").val(companyA);
					$("input[name=companyAddr]").val(cdvalue);
					
					
					//公司固话
					$("input[name=companyTelephone]").val(data.result.resultIdentity.companyTelephone);
					$("input[data-datey]").val(data.result.resultIdentity.companyTelephone);
					
					var salary = $("input[name=salary]");
					salary.val(data.result.resultIdentity.salary).siblings("span").html(data.result.resultIdentity.salaryName).attr("class", "current");
					
				}
			}
		}); 
}

function checkNull(){
	var validate = true;
	$(".validate").each(function(){
		if('' == $(this).val() || 'undefined' == $(this).val()){
//			MessageWin($(this).attr('msg'));
			promt($(this).attr('msg'));
			validate = false;
			return false;
		}
	});	
	return validate;
}

//赋值处理
function valid(){
	var oicq =$.trim( $("input[name=oicq]").val());
	var $selectorEimal = $("input[name=email]");
	var $selCompanyAddr1=$("input[name=caddress1]");
	var $selCompanyAddr2=$("input[name=caddress2]");
	var $selCompanyAddr=$("input[name=companyAddr]");
	
	var $companyTelephone=$("input[name=companyTelephone]");
	var date=$.trim($('input[data-datey="dateY"]').val());
	
	//QQ邮箱
	if(oicq){
		$selectorEimal.val(oicq +"@qq.com");
	}
	
	//详细地址 
	$selCompanyAddr.val($.trim($selCompanyAddr1.val())+"|"+$.trim($selCompanyAddr2.val()));
	
	//入学日期
	if($companyTelephone.hasClass("none")){
		$companyTelephone.val(date);
	}
	
}


function submitInfo(){
	valid();
    if(checkNull()){
    	
    	var obj=$("#authenticationForm").serializeObject();
    	
    	 $.ajax({
 			type: "POST",
 			dataType: 'json',
 			url: 'authentication_03_submit',
 			data:obj
 			
    	 }).done(function(data){
 			
 				if(data.code&&data.code=="0000"){
 					window.location.href="linkman";
 				}else{
 					promt(data.msg);
 				}
 			});
    	
    }
	
}

//初始化省
function initProvince(){
	
	$("#province_dom").html("");
	$(areaData.province).each(function(i, obj){
		
		$("#province_dom").append( "<a href='javascript:void(0)'  >" + obj.name + "</a>");
		
	});
	
	//省份点击
    $('#province_dom a').click(function(){
    	
    	//清空城市与地区信息下拉面板
    	$("#city_dom a,#district_dom a").off("click");
    	$("#city_dom,#district_dom").html("");
    	$("#city_dom,#district_dom").parents('.form-group').find("span").removeClass("current").html("请选择");
    	
    	var $this=$(this);
		var data = $this.html();
		$this.parents('.form-group').find('span').html(data).addClass("current"); //改变span文本内容
		$this.parents().find('.subnav').hide();
		$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		initCity(data);
	});
	 
}

//初始化城市
function initCity(province,it){
	
    var cityAry=$.map(areaData.province,function(item,index){
		 
		if(item.name==province){
			
			return item.city;
			
		}
		  
	  });
    
//     $("#city_dom").html("");
	 $.each(cityAry, function(i){
	     $("#city_dom").append("<a href='javascript:void(0)'>" + cityAry[i].name + "</a>");
	 });
    if(!it){
    	$("#city_dom").parents('.form-group').find("span").html("请选择");
    }
    
	 //城市点击  
	 $('#city_dom a').click(function(){
		 
		 var curCity=$(this).html();
		 var pro_str = $("span.province").text() + "|" + $(this).html();
		 
		 $(this).parents('.form-group').find('span').addClass("current").html($(this).html()); //改变span文本内容
		 $(this).parents('.form-group').find('input').val(pro_str); //改变span文本内容
		 $(this).parents().find('.subnav').hide();
		 $(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		 
		 initDistrict($("span.province").text(),curCity);
	 });
}


//初始化地区
function initDistrict(province,city,it){
	
	  var districtAry=$.map(areaData.province,function(item,index){
		 
		if(item.name==province){
			
			return $.map(item.city,function(citem,cindex){
				
				if(citem.name==city){
					return citem.district;
					
				}
				
			}); 
			
		}
		  
	  });
	  
//	  $("#district_dom").html("");
	  $.each(districtAry, function(i){
	     $("#district_dom").append("<a href='javascript:void(0)'>" + districtAry[i].name + "</a>");
	   });
	  if(!it){
		  $("#district_dom").parents('.form-group').find("span").html("请选择");
	    }
	
		 //地区点击  
		 $('#district_dom a').click(function(){
			 
			 var pro_str = province + "|"+city + "|" + $(this).html();
			 
			 $(this).parents('.form-group').find('span').html($(this).html()); //改变span文本内容
			 $(this).parents('.form-group').find('input').val(pro_str); //改变span文本内容
			 $(this).parents('.form-group').find('span').addClass("current");
			 $(this).parents().find('.subnav').hide();
			 $(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		 });
}

/*当前状态为学生，"当前状态" 后面信息动态更换标签*/
function changeForStudent(curWork,initFlag){
	
	 var changeTag="学生";
	
	 
	 if(curWork==changeTag||initFlag){
		 $(".form-group label[data-stu]").each(function(i){
			 
			 $(this).show().siblings("label").hide();
			 $(this).siblings("input:first").attr("msg",$(this).data("msg"));
			 
			 if($(this).hasClass("cdate")){
				 
				 $(this).siblings("input:last").removeClass("none").siblings("input").addClass("none");
				 
			 } 
		 });
		 
	 }else{
		 
		 $(".form-group label[data-cmp]").each(function(i){
			 
			 $(this).show().siblings("label").hide();
			 
			 $(this).siblings("input:first").attr("msg",$(this).data("msg"));
			 
			 if($(this).hasClass("cdate")){
				 
				 $(this).siblings("input:first").removeClass("none").siblings("input").addClass("none");
				 
			 } 
			 
		 });
		 
	 }
	
}


/*初始化当前工作状态*/
function initCurStatus(){
	
	  var selector='#curStatus';
	  var selectorA='#curStatus a';
	
	  $(selectorA).off("click");
	  $(selector).html("");
	  $.map(workData.workone, function(item,index){
		  if(item.worktwo){
			  var haveTwo=true;
			  
		  }else{
			  haveTwo=false;
		  }
	     $(selector).append("<a href='javascript:void(0)' data-code="+item.onecode+" data-two="+haveTwo+" >" + item.name + "</a>");
	   });
	  
	  //状态点击  
	  $(selectorA).on("click",function(){
			 
			 var oneWork=$(this).html();
			 var oneCode=$(this).data("code");
			 var haveTwo=$(this).data("two");
			
			 
			 $(this).parents().find('.subnav').hide();
			 
			 changeForStudent(oneWork);
			
			 
			 //第二个类别渲染
			 if(haveTwo){
				 
				 $(selector).siblings("span").off("click");
				  
				 $(selectorA).off("click");
				 $(selector).html("");
				  
				  //获取第二个类别列表
				  var worktwoAry=$.map(workData.workone, function(item,index){
				      
					  if(item.name==oneWork&&item.onecode==oneCode){
						 return item.worktwo;
					  }
				   });
				  
				  //渲染第二个类别列表
				   $.map(worktwoAry, function(item,index){
					   
					   if(item.workthree){
							  var haveThree=true;
							  
						  }else{
							  haveThree=false;
						  }
					   $(selector).append("<a href='javascript:void(0)' data-code="+item.twocode+" data-three="+haveThree+" >" + item.name + "</a>");
						  
					 });
				   
				   $(selector).show().siblings("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
				   $(selector).siblings("i").attr("class","icon ico_arrow_up");
				   
				   //第二个类别添加事件
				   $(selectorA).on("click",function(){
					    var twoWork=$(this).html();
						var twoCode=$(this).data("code");
						var haveThree=$(this).data("three");
						
					    
					    //第三类别
					    if(haveThree){
					    	 
					    	 $(selectorA).off("click");
					   	     $(selector).html("");
							  
							  //获取第三个类别列表
							  var workthreeAry=$.map(worktwoAry, function(item,index){
							      
								  if(item.name==twoWork&&item.twocode==twoCode){
									 return item.workthree;
								  }
							   });
							  
							  
							  //渲染第三个类别列表
							  $.map(workthreeAry, function(item,index){
							      
								  $(selector).append("<a href='javascript:void(0)' data-code="+item.threecode+" >" + item.name + "</a>");
									
							   });
							  
							  //第三个类别添加事件
							  $(selectorA).on("click",function(){
								    var threeWork=$(this).html();
									var threeCode=$(this).data("code");
									
									 hideCurStatusPanel({
										 $selector:$(selector),
										 work:oneWork+" "+twoWork+" "+threeWork,
										 code:threeCode,
										 next:true,
										 initFunction:initCurStatus
									 });
									 
									 
							  });
					    	
					    }else{
					    	//隐藏选择面板，显示选中的信息
					    	 hideCurStatusPanel({
								 $selector:$(selector),
								 work:oneWork+" "+twoWork,
								 code:twoCode,
								 next:true,
								 initFunction:initCurStatus
							 });
					    	 
					    }
				   });
				 
				 
				 
			 }else{
				 //隐藏掉选择区域，把选中的信息显示到显示区域
				 
				 hideCurStatusPanel({
					 $selector:$(selector),
					 work:oneWork,
					 code:oneCode,
					 next:false,
					 initFunction:initCurStatus
				 });
				 
			 }

		 });
	
}


/*初始化公司地址-省市区*/
function initCompanyAddress(){
	
	var $selector=$("#cAddress");
	var selectorA='#cAddress a';
	
	$selector.html("");
	$(areaData.province).each(function(i, obj){
		
		$selector.append( "<a href='javascript:void(0)'  >" + obj.name + "</a>");
		
	});
	
	//省份点击
    $(selectorA).click(function(){
    	
    	var $this=$(this);
		var province = $this.html();
		
		 $selector.siblings("span").off("click"); 
		 $(selectorA).off("click");
		 $selector.html("");
		 
		 //获取城市下的城市列表
		 var cityAry=$.map(areaData.province,function(item,index){
			 
				if(item.name==province){
					
					return item.city;
					
				}
				  
			  });
		 //渲染城市面板
		 $.each(cityAry, function(i){
			 $selector.append("<a href='javascript:void(0)'>" + cityAry[i].name + "</a>");
		 });
	    
		 //城市点击  
		 $(selectorA).click(function(){
			 
				var city = $(this).html();
				
				 $selector.siblings("span").off("click");
				  
				 $(selectorA).off("click");
				 $selector.html("");
			 
				 //获取省市下的地区列表
				 var districtAry=$.map(areaData.province,function(item,index){
					 
						if(item.name==province){
							
							return $.map(item.city,function(citem,cindex){
								
								if(citem.name==city){
									return citem.district;
									
								}
								
							}); 
							
						}
						  
					  });
				  //地区信息渲染	  
				  $.each(districtAry, function(i){
					  $selector.append("<a href='javascript:void(0)'>" + districtAry[i].name + "</a>");
				   });
					
				 //地区点击  
				 $(selectorA).click(function(){
					 
					 var pro_str = province + "|"+city + "|" + $(this).html();
					 var add_str= province  + " "+city + " "+ $(this).html();
					 
					  //隐藏掉选择区域，把选中的信息显示到显示区域
						 
						 hideCurStatusPanel({
							 $selector: $selector,
							 work:add_str,
							 code:pro_str,
							 next:true,
							 initFunction:initCompanyAddress
						 });
				 });	 
		 });
		
		
	});
	
}






/*
 * 隐藏掉选择区域，把选中的信息显示到显示区域
 * */
function hideCurStatusPanel(obj){
	if(obj.next){
		obj.$selector.siblings("span").on("click",handleItem);
	}
	obj.$selector.siblings('span').html(obj.work); //改变span文本内容
	obj.$selector.siblings('input').val(obj.code); //改变span文本内容
	obj.$selector.siblings('span').addClass("current");
	obj.$selector.hide().siblings("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
	//还原面板为初始化状态
	obj.initFunction();
	
	
}