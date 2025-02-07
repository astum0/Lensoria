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
    
    const collapsibles = document.querySelectorAll(".faq__title-wrapper");
    collapsibles.forEach(button => {
      button.addEventListener("click", function () {
         this.classList.toggle("active");
         const content = this.nextElementSibling;
         if (content.style.height === "auto" ) {
             content.style.height = 0 ;
         } else {
             content.style.height = "auto";
         }
     });

  //    $( ".faq__item" ).click(function() {
  //     if (  $( this ).css( "faq__icon-more" ) == 'none' ){
  //         $(this).css("transform","rotate(180deg)");
  //     } else {
  //         $(this).css("transform","" );
  //     }
  // });
  
});
