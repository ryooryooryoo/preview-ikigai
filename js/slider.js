
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 2,
        itemsDesktop : [1199,2],
        itemsMobile : [600,1],
        pagination :true,
        autoPlay : true
    });
    
    $("#news-slider2").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
    
    $("#news-slider3").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[700,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
    
    $("#news-slider4").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
    
    $("#news-slider5").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[650,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
    
    $("#news-slider6").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:false,
        navigationText:false
    });
    
    $("#news-slider7").owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [1000,2],
        itemsMobile : [650,1],
        pagination :false,
        autoPlay : true
    });
    
    $("#news-slider8").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        autoPlay:true
    });
    
    $("#news-slider9").owlCarousel({
        center: true,
        loop: true,
        items : 1,
        nav: true,     
        responsive:{

        576:{
                items:1,  
            },

        1000:{
           items:3,   
             dots:false,          
           }
        }


    });
    
    $("#news-slider10").owlCarousel({
         items : 1,
            loop:true,
     
   

         nav: true,
 
         responsive:{

        576:{
            items:1,
          

        
        },

        1000:{
           items:3,
            
        }
    }
    });
    
    $("#news-slider11").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:true,
        autoPlay:true
    });
    
    $("#news-slider12").owlCarousel({
        items : 2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,1],
        itemsTablet: [600,1],
        itemsMobile : [550,1],
        pagination:true,
        autoPlay:true
    });
    
    $("#news-slider13").owlCarousel({
        navigation : false,
        pagination : true,
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigationText : ["",""]
    });
    
    $("#news-slider14").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [550,1],
        pagination:false,
        autoPlay:true
    });

      $("#owl-school").owlCarousel({
         
        loop: true,
        items : 1,
        nav: false,  
        margin: 18,   
        responsive:{

        576:{
                items:1,  
            },

        1000:{
           items:3,   
             dots:false,          
           }
        }
        });
});

$(document).on('click', '#testowl.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});


