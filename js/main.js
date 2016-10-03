/*
==============
JS for - Popup bikin sendiri
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */



function popup(){
	var popup = $('.popup-wrapper').detach();
  setTimeout(function(){
    console.log('popup');
		$('#popup').html(popup);
		$('#popup').css({'opacity':1});
		$('.close-popup').on('click', function(){
			$('#popup').css({'opacity':0});
		});
		setTimeout(function(){
			$('#popup').css({'opacity':0});
		}, 10000);
  }, 3000);
}

popup();
