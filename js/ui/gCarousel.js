
_g_.ui.carousel = function(){this.Initialize.apply(this,arguments)};

_g_.ui.carousel.prototype = {
	Initialize:	function(){
		$('.item').height(window.innerHeight);
		$('.carousel').carousel({
			interval: 2000
		})
		$('#startApp').on('click',function(){
			location.href= "http://m.naver.com";
		});
	}
}

new _g_.ui.carousel();