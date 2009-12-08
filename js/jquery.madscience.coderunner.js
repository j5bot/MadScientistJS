(function (jQuery) {
	
	/**
	 * Execute the string in the current scope
	 * use call() or apply() to define the scope under which it will run
	 */
	function coderunner(source) {
		try {
			eval(source);
		} catch (err) {
			// throw away errors caused by bad eval'd code
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
						return this.click(jQuery.fn.madscience.coderunner);
						break;
					default:
						return coderunner.call(this,jQuery(this).html());
				}
			}
		}
	);
	
})(jQuery);