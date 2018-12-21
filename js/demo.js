// JavaScript Document
(function(a) {
    a.fn.extend({
        demo:function() {
            var b = a(this);
            var p = b.width();
            var o = b.height();
            var l = b.css("position");
            var i = a(window).width();
            var f = a(window).height();
            var g = "normal";
            var c = 0;
            var k = 0;
			
			var w = 22;
			
            var d = b.css("left");
            var n = b.css("top");
            //var e = (i - c) / 2;
            //var h = (f - k - 20) / 2;
			var e = 0;
            var h = 15;
            var j = a("<div>", {
                id:"zhezhao"
            });
            var m = a("<a>", {
                id:"close",
                href:"javascript:void(0)",
                text:"",
				width:w,
                height:w,
            });
            m.bind("click", function() {
            	
            	
                j.animate({
                    width:c,
                    
                    
                }, function() {
                    j.remove();
                    m.detach();
                    b.animate({
                        width:p,
                        height:o,
                        left:d,
                        top:n
                    }, g, function() {
                        b.on("click", function() {
                            b.animate({
                                width:c,
                                height:k,
                                left:e,
                                top:h
                            }, g, function() {
                                m.appendTo(b);
                                b.off("click");
                                j.appendTo("body").css({
                                    width:c,
                                    height:k,
                                    left:e,
                                    top:h
                                }).animate({
                                    width:"280",
                                    height:"100%",
                                    left:0,
                                    top:110
                                }, g);
                            });
                        });
                        b.text("").css('color','#fff').css('font-weight','bold');
                        location.reload();
                    });
                   
                });
               
            });
            b.on("click", function() {
            	b.text('');
                b.animate({
                    width:c,
                    height:k,
                    left:e,
                    top:h
                }, g, function() {
                    m.appendTo(b);
                    b.off("click");
                    j.appendTo("body").css({
                        
                        height:1000,
                        
                    }).animate({
                        width:"280",
                        height:"100%",
                        left:0,
                        top:110
                    }, g);
                });
            });
        }
    });
})(jQuery);