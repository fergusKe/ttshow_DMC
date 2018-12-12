$(document).ready(function() {
	$('.wrapper .section2 .s2_bot').click(function() {
      $('.wrapper .section2 .s2_bot').toggleClass('s2_open');
		
	});

	// $('.prize-mask').click(function() {
	// 	$('.prize').animate({'opacity': 0}, 300, prizeHide);

	// 	function prizeHide() {
	// 		$('.prize').css({'display': 'none'});
	// 	}
	// });

	// $('.prize-btn').click(function() {
	// 	$('.prize').css({'display': 'block'});
	// 	prizeShow();
		
	// 	function prizeShow() {
	// 		$('.prize').animate({'opacity': 1}, 300);
	// 	}
	// });

});