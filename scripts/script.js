var elms = document.getElementsByClassName( 'splide' );

Splide.defaults = {
    type   : 'loop',
    perPage: 1,
    speed: 1000,
    width: "50%",
    start:1,
    paginationKeyboard:true,
    easing: "cubic-bezier(0.25, 0.5, 0.5, 1)",
    drag:true,
    autoplay:true,
    pauseOnHover:true,
    lazyLoad: true,
    mediaQuery:"max",
    breakpoints:{
        990:{
            width:"80%",
        }
    }
  }


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}

