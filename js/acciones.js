// JavaScript Document
	$(document).ready(function(e){

    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#B_Rex').tap(function (e) {
 	 $.mobile.navigate( "#Rex" );
	});
		$('#B_Trice').tap(function (e) {
 	 $.mobile.navigate( "#Triceratops" );
	});
	
	$('#B_acerca').tap(function (e) {
 	 $.mobile.navigate( "#acerca" );
	});
});//ready
