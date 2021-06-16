var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


/****** NAV BAR *****/
	//account section
	$('span#icons .more').hover(function() {
		$('#navBar span#icons ul').slideDown(200);
		$('#navBar ul li span').css('display','none'); //hide other subnavs
		$('#navBar ul li a.more img').css('display','none');
	});
	$('#navBar #icons').mouseleave(function() {
		$('#navBar span#icons ul').css('display','none');
	});
	$('#navBar #icons ul a').hover(function() {
		$(this).children('i').css('color','#f00');
	},function() {
		$(this).children('i').css('color','#fff');
	});
	
	//show sub-menu on hover
	$('#navBar .more').hover(function() {
		$(this).parents('li').siblings('li').children('a.more').siblings('span').css('display','none'); //hide other subnavs
		$(this).parents('li').siblings('li').children('a.more').children('img').css('display','none'); //hide other arrows
		$(this).parents('li').siblings('li').children('a.more').siblings('span').children('a.more').siblings('span').css('display','none'); //hide other subnavs
		$(this).parents('li').siblings('li').children('a.more').siblings('span').children('a.more').children('img').css('display','none'); //hide other arrows
		$(this).siblings('span').css('display','block'); //fade in subnav
		$(this).children('img').css('display','block'); //fade in arrow
	});
	
	//hide sub-menu on mouseleave
	$('#navBar').mouseleave(function() {
		$('#navBar ul li span').css('display','none');
		$('#navBar ul li a.more img').css('display','none');
	});
	
	//fade in player button when you hover over the masthead
	$('#featured .playButton').hover(function() {
		$('#featured .playButton').animate({
			opacity: 1
		}, 100);
	}, function() {
		$('#featured .playButton').animate({
			opacity: 0
		}, 100);
	});
	
	//clicking on the search icon brings up search bar
	$('.iconSearch').click(function() {
		$('#navBar ul li').each(function(index) {
			if ($(this).attr('id') != 'logo' && $(this).attr('id') != 'search') {
				$(this).css('display','none');
			}
		});
		$('#navBar #search').fadeIn(400);
		if ($(window).width() > 1200) {
			$('#navBar #search input').animate({
				width: 550
			}, 400, function() {
				$('#navBar #search #autosuggest').focus();
			});
		} else {
			$('#navBar #search input').animate({
			width: 430
		}, 400, function() {
			$('#navBar #search #autosuggest').focus();
			$('body ul.ui-menu').css('width','499px');
		});
		}
		if ($('body').hasClass('index')) {
			$('#masthead #navBar').css('background','#000000');
		}
	});
	
	//close out search bar
	$('#navBar #search em').click(function() {
		if ($('body').hasClass('index')) {
				$('#masthead #navBar').css('background','rgba(0,0,0,0.3)');
			}
		$('#navBar #search input').animate({
			width: 0
		}, 400);
		$('#navBar #search').fadeOut(400, function() {
			$('#navBar ul li').each(function(index) {
				if ($(this).attr('id') != 'logo' && $(this).attr('id') != 'search') {
					$(this).fadeIn(400);
				}
			});
		});
	});
	
	/****** MOBILE NAVIGATION *****/
	//close mobile menus
	function closeLeft() {
		$('.mobileDrop.left').slideUp(200);
		$('.mobileNav a.left').html('<i class="fa fa-bars"></i>');
		$('.mobileNav a.left').removeClass('close');
	}
	function closeRight() {
		$('.mobileDrop.right').slideUp(200);
		$('.mobileNav a.right').html('<i class="fa fa-user"></i>');
		$('.mobileNav a.right').removeClass('close');
	}
	
	$('.mobileNav a.left').click(function() {
		if ($(this).hasClass('close')) {
			closeLeft()
		} else {
			closeRight();
			$(this).html('<i class="fa fa-times"></i>');
			$(this).addClass('close');
			$('.mobileDrop.left').slideDown(200);
		}
	});
	
	$('.members .mobileNav a.right').click(function() {
		if ($(this).hasClass('close')) {
			closeRight();
		} else {
			closeLeft();
			$(this).html('<i class="fa fa-times"></i>');
			$(this).addClass('close');
			$('.mobileDrop.right').slideDown(200);
		}
	});
	
	$('.mobileDrop.left .more').click(function() {
		var replaceMe = $(this).html();
		if ($(this).hasClass('clicked')) {
			$(this).removeClass('clicked');
			$(this).siblings('span').slideUp(200);
			var replaceMe = replaceMe.replace('<i class="fa fa-caret-up"></i>','<i class="fa fa-caret-down"></i>');
		} else {
			$(this).addClass('clicked');
			$(this).siblings('span').slideDown(200);
			var replaceMe = replaceMe.replace('<i class="fa fa-caret-down"></i>','<i class="fa fa-caret-up"></i>');
		}
		$(this).html(replaceMe);
	});
	
	//clicking on search link opens search bar
	$('.mobileDrop .search').click(function() {
		closeLeft();
		closeRight();
		$('.tour .mobileNav .right').css('display','none');
		$('html, body').animate({scrollTop: 0}, 0);
		$('.mobileNav a, .mobileNav h1').fadeOut(200, function() {
			$('.mobileNav #search').fadeIn(400, function() {
				$('.mobileNav #search input').focus();
			});
		});
	});
	
	$('.mobileNav #searchform em').click(function() {
		$('.mobileNav #search').fadeOut(200, function() {
			$('.mobileNav a, .mobileNav h1, .right .watchButton').fadeIn(400);
			$('.tour .mobileNav .right').fadeIn(400);
		});
	});
	
/***** MASTHEAD SLIDESHOW *****/

	//cycle through the number of slideshow items, apply class indexes and populate tiny icons for the slideshow
	$('#featured div').each(function(index) {
		
		//give a class that matches its index
		$(this).addClass('index' + index);
		
		//give corresponding id to video
		$(this).children('video').attr('id','index' + index);
		$(this).attr('data-id','index' + index);

		
		//add set of matching buttons to toggle through slideshow
		if (index == 0) { //the first icon is a halo
			$('#featured p').append('<a href="javascript:;" class="current index' + index + '"><img src="/images_v3/white/navAngel.png"/></a>');
		} else {
		$('#featured p').append('<a href="javascript:;" class="index' + index + '"><img src="/images_v4/slideshowButton.png"/></a>');
		}
		
	});
	
	//clicking on one of the icons brings up the next slideshow
	//we'll trigger this whenever we want to change the slideshow item
	$('#featured p a').click(function() {
		clearInterval(slideshowInt);
		if ($(this).hasClass('current')) {
			//no need to do anything
		} else {
			
			//if a scene preview video is playing, stop it
			if ($('.newReleases div').hasClass('thumbHovered')) {
				stopPlayingPreview('.thumbHovered');
			}
			
			//save the indexes to reference later
			var index = $(this).attr('class'); 
			var indexPrev = $('#featured div.current').attr('data-id');
			
			//remove halo from other icon
			$('#featured p .current').children('img').attr('src','/images_v4/slideshowButton.png'); 
			//remove class from other icon
			$('#featured p .current').removeClass('current'); 
			
			//remove "current" class from the currently playing div container
			$('#featured div.current').removeClass('current');
			$('#featured div.' + index).addClass('current');
			
			//make this icon a halo
			$(this).children('img').attr('src','/images_v3/white/navAngel.png'); 
			$(this).addClass('current');
			
			//pause previous player
			if ($('#featured div.' + indexPrev).hasClass('isVideo')) {
				document.getElementById(indexPrev).pause();
			}
			
			//we're going to set the players with an absolute position as they fade in and out, thus I'm gonna calculate the height of the masthead container so it doesn't collapse
			var mastHeight = $('#masthead').height();
			$('#masthead').css('height',mastHeight);
			$('#featured div').css('position','absolute');
			
			//fade out previous player, fade in next player
			$('#featured div.' + indexPrev).fadeOut(600);
			
			$('#featured div.' + index).fadeIn(600, function() {
				
				//do this stuff after the next slideshow fades in, so it doesn't create an awkward flash where the poster displays
				//destroy previous player
				if ($('#featured div.' + indexPrev).hasClass('isVideo')) {
					$('#featured div.' + indexPrev + ' video source').remove();
					//"loading" the empty player stops it from buffering
					document.getElementById(indexPrev).load();
				}
				
			});
			
			//now let's create and play the next player
			if ($('#featured div.' + index).hasClass('isVideo')) {
				var vidSrc = $('#featured div.' + index + ' video').attr('data-vidsrc');
				$('#featured div.' + index + ' video').prepend('<source src="' + vidSrc + '" type="video/mp4">');
				document.getElementById(index).play();
			}
						
		}
	});
	
	//now it's time to set the interval of the slideshow 
	
	//setInterval variable
	var slideshowInt;
	
	//count how many slideshow items there are
	var numSlideshow = $('#featured p a').length - 1;
	
	//function for cycling through sideshow
	function slideshow() {
		//if it's the last slideshow item
		if ($('#featured p a.current').hasClass('index' + numSlideshow)) {
			$('#featured p a.index0').trigger('click');
		} else { //otherwise keep going
			$('#featured p a.current').next('a').trigger('click');
		}
	}
	
	//set interval for slideshow
	var slideshowInt = setInterval(slideshow, 20000);
		
	//clicking the arrows brings up the prev or next item
	$('.arrowRight').click(function() {
		clearInterval(slideshowInt);
		slideshow();
	});
	$('.arrowLeft').click(function() {
		clearInterval(slideshowInt);
		if ($('#featured p a.current').hasClass('index0')) {
			$('#featured p a.index' + numSlideshow).trigger('click');
		} else { //otherwise keep going
			$('#featured p a.current').prev('a').trigger('click');
		}
	});
	
	//align vertical positioning of title treatment based on height
	function treatmentHeight() {
		
	}
	
	
/********** END MASTHEAD SLIDESHOW **********/
		
/********** QUOTES AT TOP OF PAGE **********/

	//calculate height of quotes based on window width
	//show hover arrow in featured films area
	function quoteHeight() {
		//get width of window
		var h = $(window).width();
		//now calculate height based on width:height ratio & round to nearest integer
		h = Math.round(h / 12.12);
		//set height
		$('.quote').css('height',h);
	}
	
	quoteHeight();
	
	function fadeQuote(myVar) {
		if ($(myVar).children().last('div').attr('class') == 'active') {//if it's the last one in the container
			$(myVar).children('.active').fadeOut(600);
			$(myVar).children('div').first().fadeIn(600);
			$(myVar).children('div').last().removeClass('active');
			$(myVar).children('div').first().addClass('active');
		} else {
			$(myVar).children('.active').fadeOut(600);
			$(myVar).children('.active').next('div').fadeIn(600);
			$(myVar).children('.active').next('div').addClass('active');
			$(myVar).children('.active').first().removeClass('active');
		}
	}
	
	var tQuote = setInterval(function() {
		fadeQuote('.quote');
		quoteHeight();
		//manifestHeight();
	}, 6000);	
	
/********** END QUOTES AT TOP OF PAGE **********/
	
/********** NEW RELEASES AREA **********/

	//show play arrow when you hover over a thumbnail -- used pretty UNIVERSALLY throughout site
	$('.desktop .newReleases div, .desktop  .owl-carousel .item, .desktop  .isJPG, .desktop  .horizontal span.item, #masthead div, .call2action').hover(function() {
			//if intant previews are turned off, and there's an instant preview available, show "Turn On" button
			if ($(this).hasClass('previewThumb') && !$('body').hasClass('previewsOn') && !$(this).hasClass('noPreview')) {
				$(this).children('.turnOn').css('display','block');
			}
			//if there's no preview, or if instant previews are turned off, or if it's just got a god damned play arrow, then only show play arrow
			if ((($(this).hasClass('thumbHovered') || $(this).hasClass('previewThumb')) && !$('body').hasClass('previewsOn')) || $(this).hasClass('noPreview') || (!$(this).hasClass('thumbHovered') && !$(this).hasClass('previewThumb'))) {
				$(this).children('.playArrow').fadeIn(200);
			//else, if instant previews are on, and there's an instant preview available, show the loading gif on hover
			} else {
				if (!$(this).hasClass('thumbHovered')) {
					$(this).children('.loadingGif').fadeIn(200);
				}
			}
	}, function() {
		$(this).children('.playArrow').css('display','none');
		$(this).children('.turnOn').css('display','none');
		$(this).children('.loadingGif').css('display','none');
	});
	
	//stop playing preview if it's playing on another thumbnail
	function stopPlayingPreview(myVar) {
		document.getElementById('playing').pause();
		$('.thumbHovered').css('left','0');
		$('.thumbHovered').addClass('previewThumb');
		$('.thumbHovered').children('video').css('display','none');
		$('.thumbHovered').children('video').children('source').remove();
		document.getElementById('playing').load(); //loading it stops the buffering
		$('.thumbHovered').children('video').attr('id','');
		$('.thumbHovered').children('.sceneTitle').children('.watchButton').slideUp(400);
		/*if ($('.thumbHovered').children('.sceneTitle').hasClass('padding')) {
			$('.thumbHovered').children('.sceneTitle').css('padding-top','15px');
		}*/
		$('.thumbHovered').removeClass('thumbHovered');
	}
	
	//hovering over scene starts playing video
	function sceneHover(myVar) {
		//IF there's an existing preview video playing, stop it
		if ($('.newReleases div').hasClass('thumbHovered')) {
			stopPlayingPreview('.thumbHovered');
		}
		//stop masthead from playing and cycling
		clearInterval(slideshowInt);
		var currentFeatured = $('#featured div.current').children('video').attr('id');
		if ($('#featured div.current').hasClass('isVideo')) {
			document.getElementById(currentFeatured).pause();
		}
		$(myVar).parent('div').removeClass('previewThumb');
		var vidSrc = $(myVar).siblings('video').attr('data-vidsrc');
		$(myVar).siblings('video').prepend('<source src="' + vidSrc + '" type="video/mp4">');
		var myHeight = $(myVar).parent('div').height();
		$(myVar).parent('div').css('height',myHeight);
		$(myVar).parent('div').addClass('thumbHovered');
		$(myVar).siblings('video').attr('id','playing');
		$(myVar).siblings('video').fadeIn(400);
		document.getElementById('playing').play();
		$(myVar).siblings('.sceneTitle').children('.watchButton').slideDown(400);
		/*if ($(myVar).siblings('.sceneTitle').hasClass('padding')) {
			$(myVar).siblings('.sceneTitle').css('padding-top','60px');
		}*/
		
		//finally, if the div border is slightly outside of the window, move it in
		//calculate window width
		var windowWidth = $(window).width() - 40;
		var offset = $(myVar).parent('div').offset();
		var width = $(myVar).parent('div').width();
		var rightSide = windowWidth - width - 20;
		if (offset.left < 20) {
			$(myVar).parent('div').css('left','16px');
		}
		else if (offset.left + width > windowWidth) {
			$(myVar).parent('div').css('left','-16px');
		}
	}
		
	var hoverConfig = {
		over: function() {sceneHover(this)},//function to execute
		timeout: 0, //timeout for mouseout
		//out: function() {}, //no callback for mouseout
		sensitivity: 7, //If the mouse travels fewer than this number of pixels between polling intervals, then the "over" function will be called. With the minimum sensitivity threshold of 1, the mouse must not move between polling intervals. With higher sensitivity thresholds you are more likely to receive a false positive. Default sensitivity: 7
		interval: 700 //The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates. When the user's mouse first enters the element its coordinates are recorded. The soonest the "over" function can be called is after a single polling interval. Setting the polling interval higher will increase the delay before the first possible "over" call, but also increases the time to the next point of comparison. Default interval: 100
	} 
	$('.loadingGif').hoverIntent(hoverConfig);
	
	//IF there's a preview video playing and user scrolls to the top of page, resume masthead preview and slideshow
	$(window).scroll(function() {
		//if they scroll to top
		if ($(window).scrollTop() == '0') { 
			// if there's a preview vid playing
			var mastVid = $('#featured div.current video').attr('id');
			//by first checking if masthead element exists, before checking if it's paused, prevents a console error in mobile
			if (document.getElementById(mastVid)) {
				if (document.getElementById(mastVid).paused) { 
					if ($('body').hasClass('previewsOn') && $('body').hasClass('index')) {
						stopPlayingPreview('.thumbHovered');
					}
					document.getElementById(mastVid).play();
					//set interval for slideshow
					//var slideshowInt = setInterval(slideshow, 20000);
				}
			}
		}
	});	
	
	/// 'favorites.php?' + action + '=' + setID + '&type=vids'
	
	//favorites button
	$('.favMe').click(function() {
		event.preventDefault();
			var favID = $(this).attr('data-id');
			if ($(this).hasClass('favorite')) {
				var action = 'add';
				$(this).html('<i class="fa fa-heart"></i> Remove from Playlist');
				$(this).removeClass('favorite');
				$(this).addClass('favorited');
			} else {
				var action = 'del';
				$(this).html('<i class="fa fa-heart"></i> Add to Playlist');
				$(this).removeClass('favorited');
				$(this).addClass('favorite');
			}
			var favLink = 'favorites.php?' + action + '=' + favID + '&type=vids';
			$.get(favLink);
	});
	
	//turn off instant previews
	$('.stopPreview').click(function() {
		if ($(this).hasClass('turnOff')) {
			stopPlayingPreview('.thumbHovered');
			$('.loadingGif').off();
			$('.loadingGif').css('display','none');
			$('body').removeClass('previewsOn');
			$.cookie('previews', 'off', {
				'expires': 0.5
			});	
		} else { // or turn on the previews
			$('body').addClass('previewsOn');
			$('.turnOn').css('display','none');
			sceneHover($(this).siblings('.playArrow'));
			$('.loadingGif').hoverIntent(hoverConfig);
			$.cookie('previews', 'on', {
				'expires': 0.5
			});
		}
	});
	
	$('.stopPreview').hover(function() {
		$(this).children('span').css('display','block');
	},function() {
		$(this).children('span').css('display','none');
	});
	
/********** END NEW RELEASES AREA **********/

/********** OWL CAROUSEL **********/

//masthead slideshow if it's mobile
$(".owl-carousel.masthead").owlCarousel({
	lazyLoad: true,
    dots: true,
    items: 1,
	autoplay: true,
	autoplayTimeout: 7000,
	loop: true
});

//banners in "Featured Scenes" & "Award-Winning Films" on homepage
$(".owl-carousel.featuredScenes, .owl-carousel.films").owlCarousel({
	lazyLoad: true,
	nav: true,
	navText: [
		'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
		'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
	],
	responsive: {
		0: {
			items: 1
		},
		981: {
			items: 2
		}
	},
	loop: true
});
//top models on homepage
$(".owl-carousel.topModels").owlCarousel({
	nav: true,
	navText: [
		'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
		'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
	],
	responsive: {
		0: {
			items: 3
		},
		981: {
			items: 5
		}
	},
	loop: true
});


//Scene Categories on homepage
$(".owl-carousel.one, .owl-carousel.two, .owl-carousel.three, .owl-carousel.four, .owl-carousel.five, .owl-carousel.six, .owl-carousel.seven, .owl-carousel.eight, .owl-carousel.nine, .owl-carousel.ten, .owl-carousel.eleven").owlCarousel({
		lazyLoad: true,
		nav: true,
		navText: [
			'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
			'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
		],
		responsive: {
			0: {
				items: 2
			},
			981: {
				items: 4
			}
		},
		loop: true
});


//scene carousel on model page & DVD episodes "quick view"
$(".owl-carousel.modelScenes, .owl-carousel.dvdScenes").owlCarousel({
	lazyLoad: true,
	nav: true,
	navText: [
		'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
		'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
	],
	responsive: {
			0: {
				items: 2
			},
			981: {
				items: 4
			}
	},
	loop: true
});

//model gallery carousel
$(".owl-carousel.modelGallery").owlCarousel({
	nav: true,
	navText: [
		'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
		'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
	],
	items : 1,
	loop: true,
	autoWidth: true,
	stagePadding: 100
});

//"More Like This" on scene page, "Genres" homepage, "Member Favorites" on homepage
$(".owl-carousel.moreLike, .owl-carousel.cats, .owl-carousel.memFavs").owlCarousel({
	lazyLoad: true,
	nav: true,
	navText: [
		'<a class="owlLeft" href="javascript:;"><i class="fa fa-angle-left"></i></a>',
		'<a class="owlRight" href="javascript:;"><i class="fa fa-angle-right"></i></a>'
	],
	responsive: {
			0: {
				items: 2
			},
			981: {
				items: 4
			}
	},
	loop: true
});

/********** END OWL CAROUSEL **********/

/********** FOOTER **********/
		
	//scroll back to the top
	$('.scrollTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 500);
	});
	
	$('#footer #iconSupport a').hover(function() {
		$(this).children('i').css('color','#f00');
		$(this).children('p').children('strong').css('color','#f00');
	}, function() {
		$(this).children('i').css('color','#003761');
		$(this).children('p').children('strong').css('color','#003761');
	});
	
/********** END FOOTER **********/	
	
/********** RESPONSIVE STUFF HAPPENS WHEN YOU RESIZE THE WINDOW **********/

	function layout() {
		var width = $(window).width();
		//SMALLEST window dimensions
		if (width <= 1040) {
			$('body').addClass('less1040');
			$('body').removeClass('less1100gt1040');
			$('body').removeClass('less1280gt1100');
			$('body').removeClass('less1530gt1280');
			$('body').removeClass('gt1530');
			$('#navBar ul li#logo').addClass('block');
		} 
		else if (width > 1040 && width <= 1100) {
			$('body').addClass('less1100gt1040');
			$('body').removeClass('less1040');
			$('body').removeClass('less1280gt1100');
			$('body').removeClass('less1530gt1280');
			$('body').removeClass('gt1530');
			$('#navBar ul li#logo').addClass('block');
		} 
		else if (width > 1100 && width <= 1280) {
			$('body').addClass('less1280gt1100');
			$('body').removeClass('less1040');
			$('body').removeClass('less1100gt1040');
			$('body').removeClass('less1530gt1280');
			$('body').removeClass('gt1530');
			$('#navBar ul li#logo').addClass('block');
		}
		//MEDIUM window dimensions
		else if (width > 1280 && width <= 1530) {
			$('body').addClass('less1530gt1280');
			$('body').removeClass('less1280gt1100');
			$('body').removeClass('less1040');
			$('body').removeClass('less1100gt1040');
			$('body').removeClass('gt1530');
			$('#navBar ul li#logo').removeClass('block');
		}
		//LARGEST window dimensions
		else if (width > 1530) {
			$('body').addClass('gt1530');
			$('body').removeClass('less1530gt1280');
			$('body').removeClass('less1280gt1100');
			$('body').removeClass('less1040');
			$('body').removeClass('less1100gt1040');
			$('#navBar ul li#logo').removeClass('block');
		}
	}

	$(window).resize(function() {
		$('#masthead').css('height','auto');
		$('#featured div').css('position','relative');
		layout();
		var thisHeight = $('.newReleases div:first').height(); //reference first div to calc height
		$('.previewThumb').css('height','auto');
		$('.thumbHovered').css('height',thisHeight);
	});
	
	layout();
	
/********** END RESPONSIVE STUFF **********/

/********** MOVIES PAGE **********/
	
	//favorite button
	$('.underPlayer .favorite, .underPlayer .favorited').click(function() {
		if (!$('body').hasClass('tour')) {
			event.preventDefault();
			var favLink = $(this).attr('href');
			var setId = $(this).attr('data-id');
			$.get(favLink);
			if ($(this).hasClass('favorite')) {
				$(this).children('span').html('Remove From Playlist');
				$(this).attr('href','/favorites.php?del=' + setId + '&type=vids');
				$(this).removeClass('favorite');
				$(this).addClass('favorited');
				//$(this).children('img').attr('src','/images_v4/iconFavoriteRed.png');
			} else {
				$(this).attr('href','/favorites.php?add=' + setId + '&type=vids');
				$(this).addClass('hover');
				$(this).children('span').html('Add to Playlist');
				//$(this).children('img').attr('src','/images_v4/iconFavoriteGrey.png');
				$(this).removeClass('favorited');
				$(this).addClass('favorite');
			}
		}
	});
	
	//more comments
	$('.moreComments').click(function() {
		if ($(this).hasClass('less')) {
			$('#comments span.hide1').css('display','none');
			$(this).html('Show More Comments');
			$(this).removeClass('less');
			$('html, body').animate({
				scrollTop: $("#comments").offset().top -75
			}, 400);
		} else {
			$('#comments span').css('display','block');
			$(this).html('Show Fewer Comments');
			$(this).addClass('less');
		}
	});
	
	//commenting guidelines
	$('.leaveComment form input, .leaveComment form textarea').focus(function() {
		if ($.cookie('commentGuide') != 'hide' && !$('body').hasClass('tour')) {
			$('#commentGuide').fadeIn(400);
		}
	});
	
	$('#commentGuide p.gothamy i').click(function() {
		if (!$(this).hasClass('clicked')) {
		 	$(this).replaceWith('<i class="fa fa-check-square-o clicked" style="color: #f00;"></i>');
		 } else {
			$(this).replaceWith('<i class="fa fa-square-o"></i>');
		}
	});
	
	$('#commentGuide a.gothamy').click(function() {
		if ($('#commentGuide p.gothamy i').hasClass('clicked')) {
			$('#commentGuide').fadeOut(200);
			$.cookie('commentGuide', 'hide', {
				'expires': 2
			});	
		} else {
			$('#commentGuide em').html('Please check this box to confirm you understand the commenting guidelines.');
		}
	});
	
	$('#commentGuide a.close').click(function() {
		$('#commentGuide').fadeOut(200);
	});
	
	//clicking on "more like ths" scrolls the page down
	$(".iconMore").click(function() {
		$('html, body').animate({
			scrollTop: $("#scrollToMe").offset().top
		}, 400);
	});
	
	//download box
	/*$('#downloadMovie').change(function() {
		var downloadFile = $('#downloadMovie option:selected').attr('value');
		window.location = downloadFile + '?type=download';
		$('#downloadBox').fadeIn(400);
		$('#downloadBox a').attr('href', downloadFile + '?type=download');
	});
	$('#downloadBox span').click(function() {
		$('#downloadBox').fadeOut(400);
	});*/
	
	//save the display name for commenting
	$('.leaveComment form input[type="submit"]').click(function() {
		//event.preventDefault();
		var displayName = $('.leaveComment form input[type="text"]').val();
		if ($.cookie('displayName')) {
		} else {
			$.cookie('displayName', displayName, {
					'expires': 15
			});
		}
	});
	//if they have a displayName cookie, hide text box and show display name
	if ($.cookie('displayName')) {
		$('.leaveComment form input[type="text"]').val($.cookie('displayName'));
		$('.leaveComment form input[type="text"]').css('display','none');
		$('#displayName').html('Display Name: ' + $.cookie('displayName'));
		$('#displayName').css('display','block');
	}
	
	//download box
	$('.download span.first').click(function() {
		$(this).siblings('span.more').css('display','block');
	});
	$('.download').mouseleave(function() {
		$('.download span.more').css('display','none');
	});
	
	//clearfix in movie header
	$('#movieHeader').append('<br class="clearfix"/>');
	
	//prevent download dialogue box
	$('a.preventDownload').click(function() {
		$('#preventDownloads').fadeIn(200);
	});
	$('#preventDownloads .close').click(function() {
		$('#preventDownloads').fadeOut(200);
	});
	
/********** END MOVIES PAGE **********/

/********** DVD Pages ********/
	
	//favorite all items in a dvd set
	$('.dvdFav').click(function() {
		event.preventDefault();
		//if it hasn't been favorited
		if ($(this).hasClass('favorite')) {
			var action = 'add';
			$(this).addClass('favorited');
			$(this).removeClass('favorite');
			$(this).html('<i class="fa fa-heart"></i> Remove from Favorites');
		} else {
		//if it has been favorited
			var action = 'del';
			$(this).removeClass('favorited');
			$(this).addClass('favorite');
			$(this).html('<i class="fa fa-heart"></i> Favorite All Episodes');	
		}
		if ($(this).attr('data-favID1')) {
			var setID = $(this).attr('data-favID1');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID2')) {
			var setID = $(this).attr('data-favID2');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID3')) {
			var setID = $(this).attr('data-favID3');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID4')) {
			var setID = $(this).attr('data-favID4');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID5')) {
			var setID = $(this).attr('data-favID5');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID6')) {
			var setID = $(this).attr('data-favID6');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
		if ($(this).attr('data-favID7')) {
			var setID = $(this).attr('data-favID7');
			var favLink = '/favorites.php?' + action + '=' + setID + '&type=vids';
			$.get(favLink);
		}
	});
	
	//clicking on navigation
	$('.tab').click(function() {
		$('.active').css('display','none');
		$('.active').removeClass('active');
		var activeTab = $(this).attr('data-tab');
		$('#' + activeTab).fadeIn(400);
		$('#' + activeTab).addClass('active');
	});
	
	//hovering over model image
		$('#tabCast div, .movieModels span, .topModels .item').hover(function() {
			if ($(this).parents('div').hasClass('categories')) {
				$(this).children('a.fade').fadeTo(100,1);
			} else {
				$(this).children('a.fade').fadeTo(100,0.6)
				$(this).children('a.name').fadeIn(100);
			}
		}, function() {
			if ($(this).parents('div').hasClass('categories')) {
				$(this).children('a.fade').fadeTo(100,0.6)
			} else {
				$(this).children('a.fade').fadeTo(100,1);
				$(this).children('a.name').fadeOut(100);
			}
		});
	
	//clicking "comments" scrolls you down to comments
	$(".comments").click(function() {
		$('html, body').animate({
			scrollTop: $("#dvdComments").offset().top
		}, 400);
	});		
	
	//add little quote graphic to each of the critic's review
	$('.dvdPage #quotes p').append('<img src="/images_v4/quoteBubble.png"/>');
	$('.dvdPage #quotes p').prepend('<i class="fa fa-quote-left"></i>');
	$('.dvdPage #quotes p').append('<i class="fa fa-quote-right"></i>');

/********** END DVD Pages ********/

/********** FAVORITES PAGE **********/

	$('.previewThumb .fav').hover(function() {
		$(this).children('i').children('span').fadeIn(200);	
	}, function() {
		$(this).children('i').children('span').fadeOut(200);	
	});
	
	$('.previewThumb .fav').click(function() {
		event.preventDefault();
		var $favLink = $(this).attr('href');
		$.get($favLink);
		$(this).html('<i class="fa fa-heart-o"><span style="display: none;">Removed</span></i>');
	});
	
/********** END FAVORITES PAGE **********/

/********** ABOUT US PAGE **********/

	//scrolling with navigation
	$("#aboutUs h1 a, #aboutUs h2 a, .linkJJ, .linkRJ, .linkBMC, .linkLK, .scrollSupport").click(function() {
		var scrollLink = $(this).attr('data-href');
		$('html, body').animate({
			scrollTop: $('#' + scrollLink).offset().top
		}, 400);
	});		
	
	$('.linkJJ, .linkRJ, .linkBMC, .linkLK').hover(function() {
		$(this).animate({opacity: 1},200);
	}, function() {
		$(this).animate({opacity: 0},200);
	});
	

/********** END ABOUT US PAGE **********/

/********** ADVANCED SEARCH PAGE **********/

	$('#checkboxes label').click(function() {
		if ($(this).hasClass('clickMe')) {
			$(this).removeClass('clickMe');
			$(this).children('i').remove();
			$(this).prepend('<i class="fa fa-check-square-o"></i> ');
		} else {
			$(this).addClass('clickMe');
			$(this).children('i').remove();
			$(this).prepend('<i class="fa fa-square"></i> ');
		}
	});
	
	if ($('#checkboxes label').siblings('input').attr('checked') == 'checked') {
		$(this).removeClass('clickMe');
		$(this).children('i').remove();
		$(this).prepend('<i class="fa fa-check-square-o"></i> ');
	}

/********** END ADVANCED SEARCH PAGE **********/

	//if user has cookies disabled
	if (navigator.cookieEnabled != true) {
		$('#cookies').css('display','block');
	}

/********** MISC SITE-WIDE SCRIPTS **********/

	//if there's no right navigation in a header
	if (!$('#movieHeader div').hasClass('right')) {
		$('#movieHeader .left').css('max-width','100%');
	}

}
/*
     FILE ARCHIVED ON 20:50:59 Jan 05, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:57:47 Jun 07, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.156
  esindex: 0.011
  exclusion.robots.policy: 0.146
  RedisCDXSource: 1.671
  load_resource: 242.993
  LoadShardBlock: 267.119 (3)
  PetaboxLoader3.resolve: 328.019 (2)
  PetaboxLoader3.datanode: 147.34 (4)
  CDXLines.iter: 22.629 (3)
  captures_list: 294.837
*/