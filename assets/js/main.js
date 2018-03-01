(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".treger-menu").on("click", function(){
        	$(".offe-canvar-menu, .canvar-menu-overlay").addClass("active");
        	return false;
        })

        $(".menu-close, .canvar-menu-overlay").on("click", function(){
        	$(".offe-canvar-menu, .canvar-menu-overlay").removeClass("active");
        })




        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	