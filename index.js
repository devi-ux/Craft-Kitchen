var rellax = new Rellax('.rellax');

// navbar onscroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.backgroundColor = "#150f0b";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

//filter
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-left2', {
  origin: 'left',
  duration: 1500,
  distance: '25rem',
  delay: 300
});