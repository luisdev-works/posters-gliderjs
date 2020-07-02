window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicators',
    arrows: {
      prev: '.carousel__previous',
      next: '.carousel__next',
    },
    responsive: [
      {
        // screens greater than >= 600px
        breakpoint: 600,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 800px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
