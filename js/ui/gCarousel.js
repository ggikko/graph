(function(){
    _g_.ui.carousel = function(){this.$init.apply(this,arguments)};

    _g_.ui.carousel.prototype = {
        $init:	function(){
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
})
