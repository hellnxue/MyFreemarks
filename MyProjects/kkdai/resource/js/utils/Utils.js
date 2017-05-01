
var layerIndex;

var ajaxHandleFlag=true;//异步进度提示

var hasIframe=false;//ajax请求session超时页面跳转标记，mui嵌套页面用openWindow

$(function(){
	
	$.ajaxSetup({
		
		dataFilter : function(data, type){
		 
            if(data.indexOf("AjaxAuthFailed") != -1){
            	
            	//关闭遮罩
            	if(typeof layer!="undefined"&&layerIndex!="undefined"){
            		layer.close(layerIndex);
            	}
            	 
        		if(!hasIframe){
        			location="login";
        			 
        		}else if(typeof mui!="undefined"){
        			mui.openWindow({
    				    url:"login",
    				    id:"login",
    				});
        			 
        		}
            	 
        		return "";
            	
            }else{
                return data;
            }
        }
	});
	
	
	
	
	/*自定义Ajax请求进度*/
	$(document).bind("ajaxStart", function() {
		/* $(".shade_outer_ajax").removeClass("none"); */
		if(ajaxHandleFlag){
			layerIndex=layer.open({
			    type: 2
			    ,content: 'loading...'
			  });
		}
		
	}).bind("ajaxComplete", function() {
		/* $(".shade_outer_ajax").addClass("none"); */
		if(ajaxHandleFlag){
			layer.close(layerIndex);
		}
		
		 
	});

 /*序列化表单成对象*/
 jQuery.prototype.serializeObject=function(){  
		var obj=new Object();

		$.each(this.serializeArray(),function(index,param){
			if(!(param.name in obj)){  
				obj[param.name]=param.value;  
			}
		});

		return obj;  
	};



});

/*自定义公共弹出层*/
function MessageWin(message, callback) {
	$(".w_content").text(message);
	$(".shade_outer, .shade_window").removeClass("none");
    $("#shade_window_close").bind("click", function(){
    	$(".shade_outer, .shade_window").addClass("none");
	    if(callback){
	    	callback();
	    }	
    });
}


/*自定义错误提示
 * 
 *   	 
 DOM: <div class="tips_main" style="display:none;">
		<p class="lead"></p>
      </div>
 */
function promt(obj) {
	
	var $tip=$(".tips_main");
	
	//框架嵌套提示处理
	if(!$($tip)[0]&& window.parent){
		
		 $tip=$(parent.parent.document.getElementById("tips_main"));
		
	}
	
	// 浮动层打开
	$tip.attr("style","display:block;");
	$tip.find("p").html(obj);
	
	// 设定定时器的时间值
	setTimeout(function(){
		$tip.slideUp();
	},3000);
	
	
}

function tip(){
	$(".tips_main").slideUp();
}


/*公用ajax方法*/
function ajaxUtil(prmObj){
	$.ajax({
		type:prmObj.type?prmObj.type:"post",
		url:prmObj.url,
		dataType:"json",
		data:prmObj.data
		
	}).done(function(data){
		if(prmObj.callback){
			prmObj.callback(data);
		}
		
	}).fail(function(data){
		if(prmObj.failCallback){
			prmObj.failCallback(data);
		}
	});
}

/*文字滚动提示*/
function scrollNewsInfo(obj){

	  	var num;
	    var docEl = document.documentElement;
		var clientWidth = docEl.clientWidth;
		if (!clientWidth){
			return
		}
			 
		 
		if (clientWidth >= 750) {
			num = 100;
		} else {
			num = 100 * (clientWidth / 750);
		}


	  var height=Math.round(obj.height*num);


	  var box=obj.scrollDom,can=true;
	  box.innerHTML+=box.innerHTML;
	  
	 (function(){
	   var stop=box.scrollTop%height==0&&!can;
	   if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
	   setTimeout(arguments.callee,box.scrollTop%height?20:2000);
	  })();

}




/*获取当前日期*/
function getCurrentDate(){
	   var date=new Date();
	   var month= date.getMonth()+1 +"";
	   if(month.length<2){
	 	 month="0"+month;
	  }
	   var day= date.getDate() +"";
	   if(day.length<2){
	 	 day="0"+day;
	  }
	   
	  var handleDate=date.getFullYear()+"-"+month+"-"+day;
	  return handleDate;
	}

/*表单为空的简单验证
 * $form 要验证的jQuery form对象*/
function formValidation($form){
	var validate = true;
	$form.find(".validate").each(function(){
		if('' == $(this).val() ||  undefined  == $(this).val()){
			promt($(this).attr('msg'));
			validate = false;
			return false;
		}
	});	
	return validate;
}

/*点击元素背景改变
 * ele DOM
 * cgColor 点击之后应用的color
 * inColor 元素最初应用的color*/
function bgChanges(ele,cgColor,inColor){
	ele.style.backgroundColor=cgColor;
	setTimeout(function(){
		ele.style.backgroundColor=inColor;
	},100);
}


/**
 * 验证手机号码
 * @param mobile
 * @returns
 */
function isValidityMobile(mobile) {
    return /^(?:13\d|14\d|15\d|17\d|18\d)-?\d{5}(\d{3}|\*{3})$/.test(mobile);
}