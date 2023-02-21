$(function() {
	if(window.innerWidth > 960){
		$("#ignis").attr("style", "height: " + $("#ignis").height() + "px");
		$("#ignis .text").attr("style", "height: " + $("#ignis .text").height() + "px");
		$("#ignis").addClass('disappeared');
	}

	$(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;

	    if(y_scroll_pos > window.innerHeight - 600 && window.innerWidth > 960) {
			$("#ignis").addClass('active');
	    }
	});

	// Screenshot carousel
	let slideIndex = 0;
	showSlides(slideIndex);

	resetAutoSlide();
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var timeoutHandler;
function resetAutoSlide(){
	clearTimeout(timeoutHandler);
	timeoutHandler = setTimeout(function(){
	  	plusSlides(1);
	}, 4000); // Change image every 2 seconds
}