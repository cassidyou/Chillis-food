$(document).ready(function(){
    
			var pathLength = $('.progress-bar').width();
			var progressLength = $('.progress-bar').find('.progress');
			var offset = 500;
			

			function updateProgress(){
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress =  (scroll * pathLength / height);
				progressLength.css('width', progress);
			}



			updateProgress();
			
			$(window).scroll(function(){
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress =  (scroll * pathLength / height);
				progressLength.css('width', progress);
			});

})