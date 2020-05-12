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