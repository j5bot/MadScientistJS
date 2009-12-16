(function (jQuery) {
    
    function backgroundSwap(next) {
        var newClass = next.get(0).className.replace(/section slide clear\s*/,"");
        
        if (newClass.length > 0 && newClass != document.body.className) {
            var shim = document.createElement("div");
            var b = jQuery(document.body);
            var s = jQuery(shim);
        
            shim.className = document.body.className;
            s.height(b.height()).width(b.width()).css({position: "absolute", top: "0px", left: "0px" });
            b.prepend(s);
            document.body.className = newClass;
                        
            s.fadeOut(500,function () {
                s.remove();
            });
        }
    }
    
    function showNextSlide(e) {
        if (e.target.className.indexOf("next") == -1) {
            // this is the click element
            var t = jQuery(this);
            var next = jQuery("*:hidden:first",t);
            if (next.hasClass("clear")) {
                backgroundSwap(next);
                var prev = next.prevAll().hide();
                for (var i = prev.length - 1; i >= 0; i--) {
                    prev.eq(i).appendTo(t);
                }
            }
            next.show();

            return false;
        }
    }
        
    jQuery.fn.madscience.prototype.presentation = function (callback) { 
        this.children().hide();
        this.show().click(showNextSlide);
		if (callback) { callback(); }
        return this;
    };
    
})(jQuery);