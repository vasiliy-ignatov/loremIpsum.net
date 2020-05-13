'use strict'

$("document").ready(function() {
	
});
$(function () {
	'use strict';
	window.UI = window.UI || {};
	
	window.UI.rangeSlide= {
		init: function() {
			$('.js-range-slider').rangeslider(this.options);
		},
		options: {
			polyfill: false,
			onInit: function() {
				this.output = $('<div class="range-input__output"/>').insertBefore(this.$range).html(this.$element.val());
			},
			onSlide: function(position, value) {
				this.output.html(value);
			},
			onSlideEnd: function(position, value) {}
		}
	};

	window.UI.rangeSlide.init();
}());
$(function () {
	'use strict';
	window.UI = window.UI || {};
	
	window.UI.navBar = {
		init: function() {
			$(document).on('click', '.js-navbar-toggle', this.click);
		},
		click: function() {
			var item = $(this);
			var isActive = item.hasClass('is-active');
			var nav = item.parent().find('.js-navbar-nav');
			
			
			if (!isActive) {
				item.addClass('is-active');
				nav.slideDown(300)
			} else {
				item.removeClass('is-active');
				nav.slideUp(300);
			}
		}
	};

	window.UI.navBar.init();
}());