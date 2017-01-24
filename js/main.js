$(document).ready(function(){
	var click = 0;
	var clicou = -1;
 
	$('.responsive-menu').on('click', function(){
		if(click != clicou){
			$('.responsive-menu').addClass('active-responsive-menu');
			clicou = click;
		} else{
			$('.responsive-menu').removeClass('active-responsive-menu');
			clicou = -1;
		}	
	});


});