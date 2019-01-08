// // Source: https://jsfiddle.net/gerardofurtado/2bkkr6g6/3/
// var album_navigation = $('.container')

// // album_navigation.bind('click', show);
// $(document).bind('click', show)

// function show() {
// 	var caption = $(".is-selected").children("p").html();
// 	console.log(caption)
// 	$("#show").html(caption)
// }


function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	}



 // $(document).on('click', '#info', function () {
 //    var modal = $("#myModal")
 //    modal.toggleClass("open");
 //  });

 $(document).ready(function(){
    var infoModal = $(".modal")
    var infoBtn = $("#info")
     infoBtn.click(function() {
        infoModal.show();
        infoModal.addClass("open");
     });

     infoModal.click(function(){
        infoModal.hide();
        infoModal.removeClass("open");
     });
});

// $(function () {
    
//     $(document).on('click', 'a', function (e) {
//         e.preventDefault();
        
//         var $this = $(this),
//             url = $this.attr("href"),
//             title = $this.text();
        
//         history.pushState({
//             url: url,
//             title: title
//         }, title, url);

//         document.title = title;
        

//         if ($("#myModal").hasClass("closed")) {
//             $("#myModal").removeClass("closed").addClass("open");
//         } else {
//             $("#myModal").removeClass("open").addClass("closed")
//         }
//     });
    
//     $(window).on('popstate', function (e) {
//         var state = e.originalEvent.state;
//         if (state !== null) {
//             document.title = state.title;
//         } else {
//             document.title = 'World Regions';
//             $("#content").empty();
//         }
//     });
// });