


window.sr = ScrollReveal();

    sr.reveal('.quienessomos-img', {
        duration: 2000,
        origin: 'right',
        distance: '400px'
    });

    sr.reveal('.servicios-item', {
        duration: 1000,
        origin: 'left',
        distance: '400px'
    });

     sr.reveal('.item-eventos', {
        duration: 2000,
        origin: 'bottom',
        distance: '400px'
    });

    sr.reveal('.proximo-evento', {
        duration: 2000,
        origin: 'bottom',
        distance: '400px'
    });
    
    sr.reveal('.eventos-item', {
        duration: 2000,
        origin: 'bottom',
        distance: '600px'
    });

    sr.reveal('.div-formulario', {
        duration: 1000,
        origin: 'left',
        distance: '600px'
    });

    sr.reveal('.div-contacto', {
        duration: 1000,
        origin: 'right',
        distance: '600px'
    });

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}