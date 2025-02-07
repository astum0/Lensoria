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

});
