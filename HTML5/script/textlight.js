
 /*$('index.html').ready(function() {
    $('.nav ul li a').each(function() {
        if ('file:///C:/Users/Ira/Desktop/website_dyakonova_vpvps-17-2'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
}); 
*/
jQuery(document).ready(function($) {
	var url=document.location.href;
	$.each($("#nav a"),function(){
		if(this.href==url){
			$(this).addClass('active');
		}
	});
})(jQuery);