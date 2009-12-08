(function (jQuery) {
    
    function viewsource(e) {
        var t = jQuery(this);

        jQuery.ajax({
            url: t.attr("href"),
            success: function (response,status) {
                t.after("<textarea rows=\"10\" cols=\"80\">"+response+"</textarea>");
                t.unbind("click");
            }
        });

        return false;
    }
    
    jQuery.fn.madscience.prototype.viewsource = function () {
        return this.click(viewsource);
    };
        
})(jQuery);