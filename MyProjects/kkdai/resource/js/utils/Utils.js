
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