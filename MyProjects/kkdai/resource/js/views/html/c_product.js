$(document).ready(function() {
		$.ajax({
			type : 'post',
			dataType : 'json',
			url : 'getProduct',
			data : {
				productCode : productCode
			} 
		}).
		done(function(data){
			
			if(data.code == "0000"){
				if(data.result&&data.result.length>0){
					var html=template("productDetail",data.result[0]);
					var $html=$(html);
					$("#content_dom").empty().append($($html.html()));					
				}

			}
			
//			$.each(data.result, function(i, obj) {
//				$.each(obj, function(key, val) {
//					var str = $("#content_dom").html();
//					str = str.replace("#" + key + "#", val);
//					$("#content_dom").html(str);
//				});
//			});
			
		});
	});