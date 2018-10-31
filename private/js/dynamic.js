$(function () {

    $("#info").click(function (e) {
        $el = $(this);
        e.preventDefault();
        $('body').addClass("info-open");
        history.pushState({
            type: 'info'
        }, "Sarah Maslechko | " + $el.data('title'), $el.attr('href'));
    });

    window.addEventListener('popstate', function(e){
      if(e.state)
        openURL(e.state.href);
   }); 

    $(window).click(function(event) {
    	var target = $( event.target );
    	if ( target.is( "#closeModal" ) ) {
    		$('body').removeClass('info-open')
    	}
    });
});