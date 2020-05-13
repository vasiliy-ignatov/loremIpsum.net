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