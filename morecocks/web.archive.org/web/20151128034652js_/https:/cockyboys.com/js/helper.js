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

function CreateBookmarkLink() 
{
	 title = document.title; 
	 url = location.href;

	 if (window.sidebar) 
	 { 
		window.sidebar.addPanel(title, url,"");
	 } 
     else if( window.external ) 
	 {
		window.external.AddFavorite( url, title); 
	 }
	 else if(window.opera && window.print) 
	 {
		alert("Your browser does not support adding bookmarks by clicking web links.  Please bookmark this link manually.")
		return true; 
	 }
}



var interv;
var ax = []
var idx = ""



this.stdthis = function(){

	cnt = $('#'+idx).attr('cnt');
	v = $('#'+idx).attr('v');
	v = parseInt(v);
	v = (v + 1) % cnt;

	sr = ax[v]

	$('#'+idx).attr('v', v);
	$('#'+idx).attr('src', sr);
}

function pixelRatioZoom()
{
	zr = 1;
	
	if (!!("undefined" != typeof document.documentElement.ontouchstart))
	{
		zr = screen.width / $(window).width();		
	}
	
	var dpr = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
	
	var zm = NaN;

	if (isNaN(zm))
	{
		try
		{
			zm = document.documentElement.clientWidth / window.innerWidth;
		}
		catch(e)
		{
			zm = NaN;
		}
	}
	
	if (isNaN(zm))
	{
		try
		{		
			zm = screen.deviceXDPI / screen.logicalXDPI 
		}
		catch(e)
		{
			zm = NaN;
		}
	}
	
	zm = (isNaN(zm)) ? 1 : zm;
		
	return zm * dpr * zr;	
}


suffix = "_1x";

var zoom = pixelRatioZoom();

function szhandler()
{
    var newzoom = pixelRatioZoom();
            
    if (newzoom == zoom)
    {
	    return;
    }
    
    var newsuffix = suffix;
        
	zoom = newzoom

	if (zoom > 3.3)
	{
		newsuffix = "_4x"
	}
	else if (zoom > 2.3)
	{
		newsuffix = "_3x"
	}
	else if (zoom > 1.3)
	{
		newsuffix = "_2x";
	}
	else
	{
		newsuffix = "_1x";			
	}

    if (suffix != newsuffix)
    {    
	    suffix = newsuffix

		$(".stdimage").each(function(index) {
	
			o_img = $(this).attr("src")		

			if (zoom > 3.3 && ($(this).attr("src0_4x") != undefined))
			{
				n_img = $(this).attr("src0_4x")
			}
			else if (zoom > 2.3 && ($(this).attr("src0_3x") != undefined))
			{
				n_img = $(this).attr("src0_3x")
			}
			else if (zoom > 1.3 && ($(this).attr("src0_2x") != undefined))
			{			
				n_img = $(this).attr("src0_2x")
			}
			else
			{
				if ($(this).attr("src0_1x") != undefined)
				{
					n_img = $(this).attr("src0_1x")
				}
				else
				{
					n_img = $(this).attr("src0")
				}
			}
			
			if (n_img != o_img)
			{
				$(this).attr("src", n_img);
			}
		});
	
	}

}

// zoom / scroll handler.

sch = 0;

if (sch == 0)
{
	try
	{
		document.addEventListener("scroll", szhandler, true);
		sch = 1;
	}
	catch(e) {}
}

if (sch == 0)
{
	try
	{
		window.attachEvent ("onscroll", szhandler);
		sch = 1;
	}
	catch(e) {}
}

$(window).resize(function() {
	szhandler();
});



this.StdImageHandler = function(){	

	imgs = [];

	$(".stdimage").ready(function() {

		if (zoom > 3.3)
		{
			suffix = "_4x"
		}		
		else if (zoom > 2.3)
		{
			suffix = "_3x"
		}
		else if (zoom > 1.3)
		{
			suffix = "_2x";
		}
		else
		{
			suffix = "_1x";			
		}
		
		$(".stdimage").each(function(index) {

			if (zoom > 3.3 && ($(this).attr("src0_4x") != undefined))
			{		
				$(this).attr("src", $(this).attr("src0_4x"))
			}
			else if (zoom > 2.3 && ($(this).attr("src0_3x") != undefined))
			{		
				$(this).attr("src", $(this).attr("src0_3x"))
			}
			else if ((zoom > 1.3) && ($(this).attr("src0_2x") != undefined))
			{			
				$(this).attr("src", $(this).attr("src0_2x"))
			}
			else
			{
				if ($(this).attr("src0_1x") != undefined)
				{
					$(this).attr("src", $(this).attr("src0_1x"))	
				}
				else
				{
					$(this).attr("src", $(this).attr("src0"))
				}
			}
		});


		$(".stdimage").each(function(index) {
			cnt = $(this).attr('cnt')
	
			if (cnt < 2)
			{
				return;
			}
						
			for(c=0; c < cnt; c++)
			{
				if ( $(this).attr('src' + c + suffix) != undefined )
				{
					itr = imgs.length;
					imgs[itr] = new Image;				
					imgs[itr].src = $(this).attr('src' + c + suffix)					
				}

				if ( $(this).attr('src' + c) != undefined )
				{
					itr = imgs.length;
					imgs[itr] = new Image;				
					imgs[itr].src = $(this).attr('src' + c)					
				}
			}
		});	

	});	
	

	$(".stdimage").hover(function(e){
		cnt = $(this).attr('cnt')
		idx = $(this).attr('id')

		if (cnt < 2)
		{
			return;
		}

		v = $(this).attr('v')
		v = parseInt(v);
		v = (v + 1) % cnt;

		ax = []
		for(c=0; c < cnt; c++)
		{						
			if ( $(this).attr('src' + c + suffix) != undefined )
			{
				ax[c] = $(this).attr('src' + c + suffix)			
			}
			else
			{
				ax[c] = $(this).attr('src' + c)	
			}
		}
	
		$(this).attr('v', v);
		$(this).attr('src', ax[v])		

		interv = setInterval("this.stdthis()", 800);
	},
	function(e){
		cnt = $(this).attr('cnt')
		
		if (cnt < 2)
		{
			return;
		}

		$(this).attr('v' ,0);
		
		if ( $(this).attr('src0' + suffix) != undefined )
		{
			$(this).attr('src', $(this).attr('src0' + suffix))
		}
		else
		{
			$(this).attr('src', $(this).attr('src0'))			
		}

		clearInterval(interv)
		interv = 0;
		idx = "";
    });
}






}
/*
     FILE ARCHIVED ON 23:27:08 Jan 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:57:40 Jun 07, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 138.134
  exclusion.robots: 0.339
  exclusion.robots.policy: 0.317
  RedisCDXSource: 7.34
  esindex: 0.012
  LoadShardBlock: 101.89 (3)
  PetaboxLoader3.datanode: 68.906 (4)
  CDXLines.iter: 21.351 (3)
  load_resource: 85.032
  PetaboxLoader3.resolve: 42.979
*/