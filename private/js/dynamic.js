

$('.topnav #info').click(function(e){
    e.preventDefault();
    var targetUrl = $(this).attr('href'),
        targetTitle = $(this).attr('data-title');
    
    $(".topnav #info[href='" + window.location.pathname + "']").fadeTo(500, 1.0);
    
    window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);
});

window.onpopstate = function(e) {
    $(".topnav #info").fadeTo('fast', 1.0);
};

