/*
Template Name:  Alphabet
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/
	

   // Window load function

    $(window).on('load', function(){  
	
	//Smooth Scroll
	 $(document).on('click', 'a[href^="#"]', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 600);
      }); 

	//Open street  Map
		var mapcanvas = document.getElementById("map-canvas");
		if(mapcanvas){
		// Element exists
		var coord = [40.738270, -74.008911]; // <--- coordinates here

		var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 18);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		  iconSize:     [80, 95], // size of the icon
		iconAnchor:   [40, 94] // point of the icon which will correspond to marker's location
		});

		var marker = L.marker(coord, {icon: customIcon}).addTo(map); 

		}	
			
        // Page Preloader 	

        $("#preloader").fadeOut("slow");
		
		// Close Navbar when clicked outside
		
		$(window).on('click', function(event){
			var clickOver = $(event.target)
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		});
		
		
		 //refresh Skrollr

		setTimeout(function () {
		  skrollr.get().refresh();
		}, 0);
		
	});// end on load


  $(document).ready(function () {
        "use strict"
		
		
	 	//scroll down to content on menu tabs on mobile only
	  
		if ($(window).width() <= 767) {
			$("#pills-tab li").on( "click", function() {
	 
				$('html,body').animate({
						scrollTop: $(".tab-content").offset().top - 100
					},
					'slow');
			});
		}	
		
		 
	 //Load Skrollr

		var skr0llr = skrollr.init({
			forceHeight: false,
			mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
		});		     
	
		
        //	Back Top Link

        var offset = 500;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });	

	 
     
	   //Slick Slider
		
	
		$('.slider-1').slick({
			dots: true,
			arrows:false,
			autoplay: true,
			fade: true,
            cssEase: 'linear',
			autoplaySpeed: 4000,
			slidesToShow: 1

		});
		$('.slider-2').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 2,
			responsive: [{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.slider-3').slick({
			dots: true,
			arrows: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-4').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
          // Magnific Popup

		$('#lightbox').magnificPopup({
			 autoFocusLast:false,
			delegate: '.gallery-thumb a', 
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		
		   //Navbar collapse close on click

		$('.navbar-nav>li:not(.dropdown)').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});
			 
		
    }); // end document ready

