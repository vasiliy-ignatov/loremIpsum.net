'use strict'

$("document").ready(function() {
	$('.js-nice-scroll').niceScroll({
		cursorborder:"",
		cursorcolor:"#3e9cdc",
		background: '#3d4050',
		autohidemode: false,
		hidecursordelay: 5000
	});
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
	
	window.UI.mSelect= {
		init: function() {
			$(document).on('click', '.js-m-select .m-select__header', this.toggle);
			$(document).on('click', '.js-m-select .m-select__item', this.itemClick)
		},
		toggle: function(el) {
			var item = el.length ? $(el) : $(this);
			var select =  item.parent();
			var dropDown = select.find('.m-select__dropdown');
			var isOpen = select.hasClass('is-open');

			select.toggleClass('is-open');

			isOpen ? dropDown.hide() : dropDown.slideDown(300);
		},
		itemClick: function() {
			var select =  $(this).parents('.m-select');
			var header = select.find('.m-select__header');
			var items = select.find('.m-select__item');

			items.removeClass('is-active');
			$(this).addClass('is-active');
			header.find('span').text($(this).text());

			window.UI.mSelect.toggle(header)
		}
	};

	window.UI.mSelect.init();
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