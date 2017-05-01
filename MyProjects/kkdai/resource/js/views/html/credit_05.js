	
	mui.init();
	
	mui.ready(function( ){
	 
		$("#confirm")[0].addEventListener("tap",function(){
			mui.confirm('是否进行运营商提额 ？', '提示', ['确认', '取消'], function(e) {
				if (e.index == 0) {
					 
					location="operator_01";
					 
				} else {
					
					ajaxUtil({
						url:"notice",
						data:{
							userId:userId,
							type:1,
							result:0,
						},
						callback:function(data){
							if(data.code=="0000"){
								
								location="index";
								 
							}else{
								mui.toast(data.msg,{ duration:'short', type:'div' }) ;
							}
							
						},
						failCallback:function(data){
							mui.toast("网络请求错误！请重试",{ duration:'short', type:'div' }) ;					
						}
					});
					 
				}
			});
		});
		
	}) ;