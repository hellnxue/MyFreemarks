//index.js
;(function($){
	'use strict'
	$("#slide").slide({ trigger: "click", effect: "scrollx", auto: true, seamless: true, duration: 600, easing: "easeOutCirc" },
		function(cur, old, action){
			var getShowPicUrl,
				getBannerInputLength = $('.banner-roll input:hidden').length;
			
			if((cur+1) < getBannerInputLength){
				getShowPicUrl = $($('.banner-roll input:hidden')[cur+1]).val()
			}
			if((cur+1) == getBannerInputLength){
				getShowPicUrl = $($('.banner-roll input:hidden')[0]).val()
			}
			$('.banner-next-pic img')
			.attr({
				src: getShowPicUrl
			})
		}
	);
})(jQuery)