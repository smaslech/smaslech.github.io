// Source: https://jsfiddle.net/gerardofurtado/2bkkr6g6/3/
var album_navigation = $('.container')

// album_navigation.bind('click', show);
$(document).bind('click', show)

function show() {
	var caption = $(".is-selected").children("p").html();
	console.log(caption)
	$("#show").html(caption)
}


function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	}



let boxes = Array.from(document.getElementsByClassName('btn'));

function selectBox (id) {
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id === id);
    });
}

boxes.forEach(b => {
    let id = b.id;
    b.addEventListener('click', e => {
        history.pushState({id}, `Selected: ${id}`, `./${id}`)
        selectBox(id);

        if ($("body").hasClass("info-closed")) {
        	$("body").removeClass("info-closed").addClass("info-open");
        } else {
        	$("body").toggleClass("info-closed", true);
        }
    });
});

window.addEventListener('popstate', e => {
    selectBox(e.state.id);
});

history.replaceState({id: null}, 'Default state', './');
