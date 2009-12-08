(function (jQuery) {
    
    /* constructor */
    function MadScience () {
        "it's alive!";
    }
    
    /* prototype */
    MadScience.prototype = {
        /*
        A namespace tunneling function, which allows us to chain calls
        e.g. jQuery(".foo").madscience().bar();
        
        without chaining, a call to jQuery(".foo").madscience.bar() would not
        provide a jQuery object to the plugin method
        
        without the extend, we'd have a vanilla jQuery object and
        no access to our child methods
        */
        madscience: function () {
            return jQuery.extend(this,arguments.callee,arguments.callee.prototype);
        }
    };
    
    /*
    By using the constructor, prototype, extend/plugin sequence,
    you can define related namespaces (perhaps henchmen?) in the prototype
    
    if you don't need that, you can also write the code as:
    jQuery.fn.madscience = function () { return jQuery.extend(this,arguments.callee); }
    
    you can add to the madscience() namespace by referencing either
    jQuery.fn.madscience (e.g. jQuery.fn.madscience.foo = function () {};)
    which adds functions to the madscience function object or
    jQuery.fn.madscience.prototype (e.g. jQuery.fn.madscience.prototype.foo)
    which adds functions to the madscience object's prototype
    
    using the prototype is recommended, but either is usually fine
    */
    jQuery.fn.extend(MadScience.prototype);
        
})(jQuery);