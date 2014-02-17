var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.navHover();
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.responsiveCleanUp();
			v65.global.removeHomepageNavLink();
			v65.global.leftMenuDropDown();

			$('#selectYourState select').on('change', function() {
				var str_one = "AL,UT";
				var split_str_one = str_one.split(",");
				if (split_str_one.indexOf(this.value) > -1) {
					alert( "Unfortunately, direct shipping of wine into your state is not allowed. Yes, we're as upset as you are... and we're working on ways to change those laws so consumers have the choice that they deserve.\n\nWe work through the national non-profit, Free The Grapes, to try to enable change. For more information and to let your local legislature know you want change, please visit www.freethegrapes.org \n\nIn the interim, if you have an alternate address or want to send a gift to a friend, please feel free to contact us at concierge@vintnersalliance.com and we would be happy to help you." );
				}

				var str_two = "AR,DE,KY,MA,MS,OK,PA,SD";
				var split_str_two = str_two.split(",");
				if (split_str_two.indexOf(this.value) > -1) {
					alert( "Unfortunately, direct shipping of wine from California into your state is not allowed. Yes, we're as upset as you are... and we're working on ways to change those laws so consumers have the choice that they deserve.\n\nIn the interim, through our network of partners, we may have some options for you.  Please feel free to contact us at concierge@vintnersalliance.com, 800.364.0597, or use the chat window on the bottom left of your browser." );
				}

				var str_three = "AK,AZ,GA,HI,IN,KS,LA,MI,NJ,OH,VA,WV";
				var split_str_three = str_three.split(",");
				if (split_str_three.indexOf(this.value) > -1) {
					alert( "Unfortunately, direct shipping of wine into your state is restricted by its alcohol import laws.\n\nThat said, we do have a wide assortment that can legally ship to you.\n\nPlease remember, the Concierge Team is here to help. Feel free to browse the site, or contact us at concierge@vintnersalliance.com, 800.364.0597, or use the chat window on the bottom left of your browser." );
				}
			});
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		navHover : function(){
			$("nav ul li ul li a").hover(function(){
				$(this).parent().parent().parent().children("a").toggleClass("hover");
			});
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		continueShopping : function(){
			var continueShoppingLink = v65.cookies.readCookie("continueShoppingURL");

			if(continueShoppingLink !== null && continueShoppingLink.length > 10) {
				$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
			}
		},
		responsiveCleanUp: function(){
			var submenuItems = $('.subMenu ul li').length;
			if( submenuItems < 1) {
				$('.footerMenuLink').remove();
			}

			$(window).scroll(function() {
				var browserSize = $(window).width();

				if($(document).scrollTop() > 150 && browserSize < 580) {
					$('.backtotop').css('display','block');
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
				} else {
					$('.backtotop').css('display','none');
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
				}
			});

			$('.backtotop a').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		},
		removeHomepageNavLink : function(){
			$(".v65-home").remove();
		},
		leftMenuDropDown: function() {
			/*$('#v65-navBrandTitle').toggle(function() {
				$(this).css("background-image","url(/assets/images/ico-circle-up.png)");
				$(this).next().slideDown();
				
				if(browserWidth > 710){
					$( "#leftMenu" ).css("position","relative").css("width","20%").css("float","left");
				}

			}, function() {
				$(this).css("background-image","url(/assets/images/ico-circle-down.png)");
				$(this).next().slideUp();
			});*/

			$('#v65-navPriceTitle').toggle(function() {
				$(this).css("background-image","url(/assets/images/ico-circle-up.png)");
				$(this).next().slideDown();
				//$( "#leftMenu" ).css("position","relative").css("width","20%").css("float","left");
			}, function() {
				$(this).css("background-image","url(/assets/images/ico-circle-down.png)");
				$(this).next().slideUp();
			});

			$('#v65-navTypeVarietalTitle, #v65-navRegionAppellationTitle').toggle(function() {
				$(this).css("background-image","url(/assets/images/ico-circle-down.png)");
				$(this).next().slideUp();
			}, function() {
				$(this).css("background-image","url(/assets/images/ico-circle-up.png)");
				$(this).next().slideDown();
			});

		}
	},

	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},

	home : {
		initPhotoGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryId : "9da1eb2f-af84-2f2a-075b-e6ee3767aa09"
				});
			}
		},
		homepageItems : function(){
			$('.v65-productGroup-product:even').css("border-right","0");
		},
		homepageEqualize : function(){
			browserWidth = $(window).width();
			if(browserWidth > 580){
				$(".homepageValueSelections .v65-productGroup-product").equalize(2);
			}
		}
	},

	page : {
		init : function(){
			v65.page.initPhotoGallery();
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.

						galleryHeight : 420, // This value is translated to 420px and will change the photogallery height
						galleryWidth : 630, // This value is translated to 630px and will change the photogallery width
						pauseTime : 5000, // Adjust how long the image is displayed for. Value is in milliseconds
						animSpeed : 1000, // Adjust the transition speed between images. Value is in milliseconds
						controlNav : false, // hide the 1,2,3 navigation
						directionNav : false // hide the arrow navigation
					*/
				});
			}
		},
		scrollLeftMenu : function(y){
			browserWidth = $(window).width();
			browserHeight = $( window ).height();
			leftMenuHeight = $('#leftMenu').height();
			
			if(browserWidth > 710 && leftMenuHeight < browserHeight){
				// whether that's below the current location
				if (y >= 155) {
					// if so, adjust top margin to push the menu down.
					//newPosition = y - 155;
					//$( "#leftMenu" ).animate({ marginTop: newPosition + 30}, 100);
					var contentWidth = $("#pageContent").width();
					var leftMenuWidth = (contentWidth / 77) * 20;
					$( "#leftMenu" ).css("position","fixed").css("width",leftMenuWidth).css("top","20px").css("float","none");
				} else {
					$( "#leftMenu" ).css("position","relative").css("width","20%").css("float","left");
				}
			}
		},
		productEqualize : function(){
			$('.productWrapper:odd').css("border-right","0");

			browserWidth = $(window).width();
			if(browserWidth > 580){
				$(".productWrapper").equalize(2);
			}
		},
		formatShopBy : function(){
			$(".shopByItem").find("img[src$='/']").parents(".shopByItem").addClass("noImage");
			$(".shopByItem").find("img[src$='/']").parent().remove();
		}
		
	}
}
//Photogallery Plugin and Equalize Plugin
;(function($,undefined){
	$.fn.v65PhotoGallery=function(options){var defaults={galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),galleryHeight : $("#pagePhotoGallery").attr("v65jsphotogalleryheight"),galleryWidth : $("#pagePhotoGallery").attr("v65jsphotogallerywidth"),timestamp : "×tamp="+ new Date().getTime(),effect:'fade',slices:15, animSpeed:500,pauseTime:5000, startSlide:0, directionNav:true,directionNavHide:true,controlNav:true},gallery=$(this),settings=$.extend(defaults, options);gallery.html("").css({"height":settings.galleryHeight,"width":settings.galleryWidth,"overflow":"hidden"});$.ajax({type: "GET",url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,dataType: "xml",success: function(xml){var images="";$(xml).find('img').each(function(){var location='/assets/images/photogallery/images/large/',photo=$(this).attr('src'),caption=$(this).attr('caption'),url=$(this).attr('link');if (url===undefined){images +='<img src="'+location+photo+'" title="'+caption+'"/>';}else{images +='<a href="'+url+'"><img src="'+location+photo+'" title="'+caption+'"/></a>';}});gallery.append(images);},complete: function(){gallery.nivoSlider({effect:settings.effect,slices:settings.slices,animSpeed:settings.animSpeed,pauseTime:settings.pauseTime,startSlide:settings.startSlide,directionNav:settings.directionNav,directionNavHide:settings.directionNavHide,controlNav:settings.controlNav});}});};
	$.fn.equalize=function(length){for(var i=0;i < this.length;i+=length){var elems=this.slice(i, i+length),equalizeArray=[];for(j=0;j < length;j++){equalizeArray.push(elems.eq(j).outerHeight());}var height=Math.max.apply( Math, equalizeArray);elems.css('min-height', height);}return this;};
})(jQuery);

v65.global.init();
v65.page.initPhotoGallery();

// Update Product Titles
$( document ).ready(function() {
    $( ".v65-product-title a" ).each(function() {
		myString = $(this).text();
		myStringPOS = myString.indexOf('-- ');
		$(this).text(myString.substring(myStringPOS+3));
	});

	$( "#v65-modalViel" ).on( "click", function() {
		vin65.modal.closeWindow();
	});

	$( "#v65-modalViel" ).click(function() {
		vin65.modal.closeWindow();
	});
});



