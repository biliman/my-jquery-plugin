(function ($) {
	$.fn.emailValidator = function (email) {
		// your code here
		let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		return pattern.test(this.val())
	}
})(jQuery)
