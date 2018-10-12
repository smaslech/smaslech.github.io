//MODAL 1
	var container = document.getElementsById("myContainer");

	function openGalleryModal1() {
	  document.getElementById('myGalleryModal1').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal1() {
	  document.getElementById('myGalleryModal1').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides1(slideIndex);
	function plusSlides1(n) {
	  showSlides1(slideIndex += n);
	}
	function currentSlide1(n) {
	  showSlides1(slideIndex = n);
	}
	function showSlides1(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides1");
	  var dots = document.getElementsByClassName("demo1");
	  var captionText = document.getElementById("show1");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo1");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo1 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 2
	var container = document.getElementsById('myContainer');

	function openGalleryModal2() {
	  document.getElementById('myGalleryModal2').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal2() {
	  document.getElementById('myGalleryModal2').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	  dots.className = "demo2";
	}
	var slideIndex = 1;
	showSlides2(slideIndex);
	function plusSlides2(n) {
	  showSlides2(slideIndex += n);
	}
	function currentSlide2(n) {
	  showSlides2(slideIndex = n);
	}
	function showSlides2(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides2");
	  var dots = document.getElementsByClassName("demo2");
	  var captionText = document.getElementById("show2");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo2");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo2 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 3
	var container = document.getElementsById("myContainer");

	function openGalleryModal3() {
	  document.getElementById('myGalleryModal3').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal3() {
	  document.getElementById('myGalleryModal3').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides3(slideIndex);
	function plusSlides3(n) {
	  showSlides3(slideIndex += n);
	}
	function currentSlide3(n) {
	  showSlides3(slideIndex = n);
	}
	function showSlides3(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides3");
	  var dots = document.getElementsByClassName("demo3");
	  var captionText = document.getElementById("show3");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo3");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo3 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 4
	var container = document.getElementsById("myContainer");

	function openGalleryModal4() {
	  document.getElementById('myGalleryModal4').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal4() {
	  document.getElementById('myGalleryModal4').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides4(slideIndex);
	function plusSlides4(n) {
	  showSlides4(slideIndex += n);
	}
	function currentSlide4(n) {
	  showSlides4(slideIndex = n);
	}
	function showSlides4(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides4");
	  var dots = document.getElementsByClassName("demo4");
	  var captionText = document.getElementById("show4");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo4");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo4 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 5
	var container = document.getElementsById("myContainer");
	function openGalleryModal5() {
	  document.getElementById('myGalleryModal5').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal5() {
	  document.getElementById('myGalleryModal5').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides5(slideIndex);
	function plusSlides5(n) {
	  showSlides5(slideIndex += n);
	}
	function currentSlide5(n) {
	  showSlides5(slideIndex = n);
	}
	function showSlides5(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides5");
	  var dots = document.getElementsByClassName("demo5");
	  var captionText = document.getElementById("show5");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo5");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo5 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 6
	var container = document.getElementsById("myContainer");
	function openGalleryModal6() {
	  document.getElementById('myGalleryModal6').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal6() {
	  document.getElementById('myGalleryModal6').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides6(slideIndex);
	function plusSlides6(n) {
	  showSlides6(slideIndex += n);
	}
	function currentSlide6(n) {
	  showSlides6(slideIndex = n);
	}
	function showSlides6(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides6");
	  var dots = document.getElementsByClassName("demo6");
	  var captionText = document.getElementById("show6");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo6");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo6 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 7
	var container = document.getElementsById("myContainer");
	function openGalleryModal7() {
	  document.getElementById('myGalleryModal7').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal7() {
	  document.getElementById('myGalleryModal7').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides7(slideIndex);
	function plusSlides7(n) {
	  showSlides7(slideIndex += n);
	}
	function currentSlide7(n) {
	  showSlides7(slideIndex = n);
	}
	function showSlides7(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides7");
	  var dots = document.getElementsByClassName("demo7");
	  var captionText = document.getElementById("show7");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo7");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo7 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 8
	var container = document.getElementsById("myContainer");
	function openGalleryModal8() {
	  document.getElementById('myGalleryModal8').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal8() {
	  document.getElementById('myGalleryModal8').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides8(slideIndex);
	function plusSlides8(n) {
	  showSlides8(slideIndex += n);
	}
	function currentSlide8(n) {
	  showSlides8(slideIndex = n);
	}
	function showSlides8(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides8");
	  var dots = document.getElementsByClassName("demo8");
	  var captionText = document.getElementById("show8");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo8");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo8 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 9
	var container = document.getElementsById("myContainer");
	function openGalleryModal9() {
	  document.getElementById('myGalleryModal9').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal9() {
	  document.getElementById('myGalleryModal9').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides9(slideIndex);
	function plusSlides9(n) {
	  showSlides9(slideIndex += n);
	}
	function currentSlide9(n) {
	  showSlides9(slideIndex = n);
	}
	function showSlides9(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides9");
	  var dots = document.getElementsByClassName("demo9");
	  var captionText = document.getElementById("show9");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo9");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo9 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 10
	var container = document.getElementsById("myContainer");
	function openGalleryModal10() {
	  document.getElementById('myGalleryModal10').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal10() {
	  document.getElementById('myGalleryModal10').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides10(slideIndex);
	function plusSlides10(n) {
	  showSlides10(slideIndex += n);
	}
	function currentSlide10(n) {
	  showSlides10(slideIndex = n);
	}
	function showSlides10(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides10");
	  var dots = document.getElementsByClassName("demo10");
	  var captionText = document.getElementById("show10");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo10");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo10 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 11
	var container = document.getElementsById("myContainer");
	function openGalleryModal11() {
	  document.getElementById('myGalleryModal11').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal11() {
	  document.getElementById('myGalleryModal11').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides11(slideIndex);
	function plusSlides11(n) {
	  showSlides11(slideIndex += n);
	}
	function currentSlide11(n) {
	  showSlides11(slideIndex = n);
	}
	function showSlides11(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides11");
	  var dots = document.getElementsByClassName("demo11");
	  var captionText = document.getElementById("show11");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo11");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo11 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}

//MODAL 12
	var container = document.getElementsById("myContainer");
	function openGalleryModal12() {
	  document.getElementById('myGalleryModal12').style.display = "block";
	  container.className = "wrap is-blurred";
	  container.parentElement.className = "album modalOpen";
	}
	function closeGalleryModal12() {
	  document.getElementById('myGalleryModal12').style.display = "none";
	  container.className = "wrap";
	  container.parentElement.className = "album";
	}
	var slideIndex = 1;
	showSlides12(slideIndex);
	function plusSlides12(n) {
	  showSlides12(slideIndex += n);
	}
	function currentSlide12(n) {
	  showSlides12(slideIndex = n);
	}
	function showSlides12(n) {
	  var i;
	  var slides = document.getElementsByClassName("modalSlides12");
	  var dots = document.getElementsByClassName("demo12");
	  var captionText = document.getElementById("show12");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	      dots[i].className = ("demo12");
	  }
	  slides[slideIndex-1].style.display = "flex";
	  dots[slideIndex-1].className = "demo12 active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  	}
