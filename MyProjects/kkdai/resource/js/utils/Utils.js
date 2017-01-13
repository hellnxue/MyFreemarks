
var layerIndex;

$(function(){
	
	/*自定义Ajax进度*/
	$(document).bind("ajaxStart", function() {
		/* $(".shade_outer_ajax").removeClass("none"); */
		layerIndex=layer.open({
		    type: 2
		    ,content: 'loading...'
		  });
	}).bind("ajaxComplete", function() {
		/* $(".shade_outer_ajax").addClass("none"); */
		layer.close(layerIndex);
		 
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


/*自定义错误提示*/
function promt(obj) {
	
	// 浮动层打开
	$(".tips_main").attr("style","display:block;");
	$(".tips_main p").html(obj);
	// 设定定时器的时间值
	setTimeout(tip,3000);
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

/*表单为空的简单验证*/
function formValidation(){
	var validate = true;
	$(".validate").each(function(){
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