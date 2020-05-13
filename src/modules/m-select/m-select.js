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