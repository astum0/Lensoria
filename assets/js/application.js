document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
      type: 'loop',      
      perPage: 3,         
      autoplay: true,   
      interval: 3000,     
      pauseOnHover: true, 
      arrows: false,      
      pagination: false,  
      gap: '25px',
    }).mount();

    document.querySelectorAll('.faq__item').forEach(item => {
      item.addEventListener('click', function(e) {
          if (e.target.closest('.faq__button-more')) return;
          this.classList.toggle('active');
      });
      item.querySelector('.faq__button-more').addEventListener('click', function(e) {
          e.stopPropagation();
          item.classList.toggle('active');
      });
  });
});
