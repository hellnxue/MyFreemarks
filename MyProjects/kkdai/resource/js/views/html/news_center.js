var pageIndex=1,
	pageSize=10,
	moreInfo=true;

var pullrefresh='#pullrefresh';

mui.init({
	pullRefresh: {
		container: pullrefresh,
		down: {
			callback: pulldownRefresh,
			contentdown : "下拉刷新", 
		    contentover : "释放更新", 
		    contentrefresh : "加载中...", 
		},
		up: {
			contentrefresh: '加载更多...',
			contentnomore:'没有更多数据了',
			callback: pullupRefresh
		}
	}
});
 
function initData(status){
	setTimeout(function() {
		var flag=false;
		console.log(pageIndex);
		ajaxUtil({
			url:"getNewInfo",
			data:{
				pageSize:pageSize,
				pageIndex:pageIndex
			},
			callback:function(data){
				
				if(data.code == "0000"){
					
					if(data.result&&data.result.length>0){
						var html=template("newsList",data);
						var $html=$(html);
						
						if(pageIndex==1){
							$("ul[data-news-items]").empty().append($html);
						}else{
							if(status=="pullDown"){//下拉刷新
								console.log("下拉刷新");
								$("ul[data-news-items]").prepend($html);
							}else{
								console.log("上拉加载更多");
								$("ul[data-news-items]").append($html);
							}
							
						}
						
						$html.find("a").each(function(){
							this.addEventListener("tap",function(){
//								
								var tlt=$(this).data("title");
								var url=$(this).data("url");
	 							
								sessionStorage.setItem("newTitle", tlt);
								sessionStorage.setItem("url", url);
								
								mui.openWindow({
								    url:"news_center_detail",
								    id:"news_center_detail",
								});
							},false);
						});
						
						pageIndex++;
						pageSize++;
						
					}else{
						flag=true;
					} 
					
					if(status=="pullUp"){//下拉刷新
						flag=false;
						mui(pullrefresh).pullRefresh().endPulldownToRefresh();
						
					}else{//上拉加载更多
						
						mui(pullrefresh).pullRefresh().endPullupToRefresh(flag); 
					}
					
					//没有数据时禁用上拉加载数据
					if(flag){
						setTimeout(function(){
						    mui(pullrefresh).pullRefresh().disablePullupToRefresh();
						}, 2000);
						
					}
					
				}else{
					mui.toast("获取消息列表失败！",{ duration:'short', type:'div' }) ;
				}
			}
		});
		
		
	},1500);
	
};

/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {

	initData("pullUp");
}

/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	
	initData("pullDown");
}
if (mui.os.plus) {
	mui.plusReady(function() {
		setTimeout(function() {
			mui(pullrefresh).pullRefresh().pullupLoading();
		}, 1000);

	});
} else {
	mui.ready(function() {
		mui(pullrefresh).pullRefresh().pullupLoading();
	});
}
 