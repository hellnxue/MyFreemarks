$(document).ready(function(){
	
	
		initData();
	

		
		//下拉选项切换
		$(".form-group>span").click(function(){
			var b=$(this).parent().find(".subnav").css("display");
	  		if( b=="none"){
	        	$(this).parents().find(".subnav").hide();
	  			$(this).parent().find(".subnav").show();
	  			$(this).parents().find("i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
	        	$(this).parent().find("i").attr("class","icon ico_arrow_up");
	        } else {
	        	$(this).parent().find(".subnav").hide();
	        	$(this).parent().find("i").attr("class","icon ico_arrow_down");
	        }
	    });
		
		//选择选项时赋值处理
	    $('.subnav a').click(function(){
			$(this).parents('.form-group').find('span').html($(this).html()); //改变span文本内容
			$(this).parents('.form-group').find('input').val($(this).attr("code")); //改变span文本内容
			$(this).parents('.form-group').find('span').addClass("current");
			$(this).parents().find('.subnav').hide();
			$(".form-group i").filter(".ico_arrow_up").attr("class","icon ico_arrow_down");
		});
	    
	    //提交表单
	    $("#linkman_form").on("click",function(){
	    	
	    	if(formValidation()){
	    		
	    		var formObj=$(this).parents("form").serializeObject();
	    		
	    		ajaxUtil({
	    			url:"linkman_submit",
	    			data:formObj,
	    			callback:function(data){
	    				if(data.code&&data.code=="0000"){
	    					location="zhimaxinyong";
	    				}else{
	    					promt(data.msg);
	    				}
	    			},
	    			fialCallback:function(data){
	    				console.log("ajax请求失败...");
	    			}
	    		});
	    	}
	    	
	    });
	});

	//数据初始化
	function initData(){
		$.ajax({
//			async: false,
			type: "POST",
			dataType: 'json',
			url: 'getLoad' ,
			 
		}).done(function(data) {
			if(data.code == '0000'){
					var relation1 = $("input[name=relation1]");
					relation1.val(data.result.resultRelation.relation1)
					relation1.parent().find("span").html(
							data.result.resultRelation.relation1Name).attr(
							"class", "current");

					$("input[name=relationName1]").val(
							data.result.resultRelation.relationName1);
					$("input[name=relationMobile1]").val(
							data.result.resultRelation.relationMobile1);

					$("input[name=relation2]");
					relation2.val(data.result.resultRelation.relation2)
					relation2.parent().find("span").html(
							data.result.resultRelation.relation2Name).attr(
							"class", "current");

					$("input[name=relationName2]").val(
							data.result.resultRelation.relationName2);
					$("input[name=relationMobile2]").val(
							data.result.resultRelation.relationMobile2);
				
			}
		}).fail(function(data){
			
			console.log("ajax请求错误...");
		});
		
	}
	
