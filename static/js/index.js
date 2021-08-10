$(window).scroll(function (){
  $('nav').toggleClass('scrolled',$(this).scrollTop() > 100);
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i

});

var text = document.querySelector('.ml9 .letters');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  });
