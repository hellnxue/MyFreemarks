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
	var flag=false;
	setTimeout(function() {
		
		ajaxUtil({
			url:"getNewInfo",
			data:{
				pageSize:pageSize,
				pageIndex:pageIndex
			},
			callback:function(data){
				
				if(data.code&&data.code == "0000"){
					
					if(data.result&&data.result.length>0){
						var html=template("newsList",data);
						var $html=$(html);
						
						if(pageIndex==1){
							 
							$("ul[data-news-items]").empty().append($html);
							 
						}else{
							 
							$("ul[data-news-items]").append($html);
							 
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
						
					}else{
						flag=true;
					} 
					
					 //停止下拉刷新或上拉加载更多
				 	if(status=="pullDown"){
						flag=false;
						mui(pullrefresh).pullRefresh().endPulldownToRefresh();//stop下拉刷新
						
						//为了防止数据只有一条的时候下拉刷新完之后自动触发上拉加载更多的bug,此处延迟重置~~
						setTimeout(function(){
							mui(pullrefresh).pullRefresh().refresh(true);//重置之前禁用掉的上拉加载更多
							$(".mui-pull .mui-pull-caption-down").html("");//隐藏掉"下拉加载更多"
						},1000);
						
					}else{
						mui(pullrefresh).pullRefresh().endPullupToRefresh(flag);//stop上拉加载更多
					}
					
					//没有数据时禁用上拉加载数据
					if(flag){
						setTimeout(function(){
						    mui(pullrefresh).pullRefresh().disablePullupToRefresh();
						}, 1000);
						
					}
					
				}else{
					mui.toast("获取消息列表失败！",{ duration:'short', type:'div' }) ;
					if(status=="pullDown"){ 
			 			
			 			//停止刷新
						mui(pullrefresh).pullRefresh().endPulldownToRefresh();
						
					}else{//禁用上拉加载
						
				 		 mui(pullrefresh).pullRefresh().endPullupToRefresh(true); 
					}
					
					return;
				}
			}
		});
		
		
	},1500);
	
};

/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	pageIndex=1;
	initData("pullDown");
}

/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	 
	initData("pullUp");
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
 