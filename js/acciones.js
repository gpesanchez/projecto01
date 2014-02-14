// JavaScript Document
$(document).ready(function(){
    document.addEventListener("deviceready",function(){
		$('#B1').tap(function(){
			navigator.notification.beep(5);
			
		});
		$('#B2').tap(function(){
			navigator.notification.vibrate(500);
			
		});
	});//device ready
});//ready

