(function($) {
	$(document).ready(function() {


		// init Isotope
		var $grid = $('.all-product').isotope({
		  // options
		});
		// filter items on button click
		$('.pro-filter-btn').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});

		//init wow
		new WOW().init();

	});
})(jQuery);