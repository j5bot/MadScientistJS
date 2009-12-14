(function (jQuery) {
    
    /**
     * Execute the string in the current scope
     * use call() or apply() to define the scope under which it will run
     */
    function coderunner(source) {
        try {
            eval(source.replace(/&lt;/ig,"<").replace(/&gt;/ig,">").replace(/&amp;/ig,"&"));
        } catch (err) {
            console.log(source.replace(/\&lt;/ig,"<").replace(/\&gt;/ig,">").replace(/\&amp;/ig,"\&"));
            alert("oops!: " + err.msg);
        }
        return false;
    }
    
    /**
     * Extend jQuery.fn.madscience prototype to add coderunner method
     */
    jQuery.extend(
        jQuery.fn.madscience.prototype,
        {
            coderunner: function (action) {
                switch (action) {
                    case "init":
                        return this.click(jQuery.fn.madscience.prototype.coderunner);
                        break;
                    default:
                        return coderunner.call(this,jQuery(this).html());
                }
            }
        }
    );
    
})(jQuery);