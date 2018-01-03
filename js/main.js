$(function(){
	
	// Variables   
    var $window = $(window),    
        fsImg = $('.img-fs'),
        startwidth= 640, 
        startheight= 360,
        ratio = startheight/startwidth,
        imagewidth = $(this).width(),
        imageheight = $(this).height(),
        browserwidth = $(window).width(),
        browserheight = $(window).height();
            
            
    // Window resize handler
    $window.on('resize', function(){ 
        
        imagewidth = $(this).width();
        imageheight = $(this).height();
        browserwidth = $(window).width();
        browserheight = $(window).height();
                    
        fsImage(); 
        scrollStuff();         
                        
    });

    // Fullscreen image/video
    function fsImage(){
     
        if ((browserheight/browserwidth) > ratio){
            fsImg.height(browserheight);
            fsImg.width(browserheight / ratio);
        } else {
            fsImg.width(browserwidth);
            fsImg.height(browserwidth * ratio);
        };
        fsImg.css('left', (browserwidth - fsImg.width())/2);
        fsImg.css('top', (browserheight - fsImg.height())/2);

    };
    fsImage();


    // Scrolling
    $window.on('scroll', function(event){ 
        
            window.requestAnimationFrame(scrollStuff);  
                
    }); 
    function scrollStuff()
    {
        var scrollTop = $window.scrollTop();
        var $slide_img = $('.img-fs');
          
        $slide_img.each(function(){

            var offset = $(this).offset().top;
            
            //$(this).css({transform: 'translateY(' +  -Math.round(offset - scrollTop)*0.2 + 'px)'});
           
        });

    }
    scrollStuff(); 

    $('#mobile-nav-btn').on('click', function(){

        $(this).toggleClass('active'); 
        $('nav').fadeToggle('fast').toggleClass('active');

    }); 



    

    
 
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel 
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
 
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
 
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

	
	
});


