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

allowchange = 1

titletxt = ""

var anc = "";

function document_location_anchor(anchorname)
{
  stl = document.location + "";
  stl = stl.split("#");
  stl = stl[0]

  // If there's a base tag, include the whole URL in the redirect.
  // Otherwise, only do the basic anchorname.

  var theBase = document.getElementsByTagName("base"); 
  if (theBase.length)
  {
	setloc = stl + "#" + anchorname;
  }
  else
  {
	setloc = "#" + anchorname;
  }

  if (anc != setloc)
  {
	if (!navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPad/i))
	{
		// Don't scroll to the top if galleryautoplay is set to 1
	
		uscroll = 0;
	
		if (!isdefined('flashvar_arr'))
		{
			uscroll = 1;
		}
		else if (flashvar_arr["galleryautoplay"] == "0")
		{
			uscroll = 0;
		}
	
		if (uscroll == 1)
		{
	  		$('html,body').animate({scrollTop: $(".full_photo_wrapper").offset().top},'slow');
		}
	}

    document.location = setloc;
	anc = setloc;
  }

  return;
}

function isdefined( variable)
{
    return (typeof(window[variable]) == "undefined")?  false: true;
}

$( document ).ready(function() {

	$( ".rating_voteable" ).hover(
		function() {
			
			pos = $(this).data("pos");

			var box = $(this).parent();
			
			votelock = $(box).data("votelock");
			
			if (votelock == "1")
			{
				return;
			}
			
	
			$(".rating_voteable", box).each( function() {
				
				pos2 = $(this).data("pos");
			
				$(this).removeClass("rating_half");
				$(this).removeClass("rating_empty");
				$(this).removeClass("rating_unrated");
				$(this).removeClass("rating_voted");
				
				if (pos2 <= pos)
				{
					$(this).addClass("rating_voted")
				}
				else
				{
					$(this).addClass("rating_empty")
				}

				// half, empty, voted, star
			});

		}, function() {


			var box = $(this).parent();
			rating = $(box).data("rating");
			voted = $(box).data("voted");

			votelock = $(box).data("votelock");
			
			if (votelock == "1")
			{
				return;
			}
	
			$(".rating_voteable", box).each( function() {
				
				pos = $(this).data("pos");
				
				$(this).removeClass("rating_half");
				$(this).removeClass("rating_empty");
				$(this).removeClass("rating_unrated");
				$(this).removeClass("rating_voted");
				
				if (voted == "1")
				{ 
					if (rating < (pos*2))
					{
						$(this).addClass("rating_empty")

					}
					else
					{
						$(this).addClass("rating_voted");
					}
				}
				else
				{ 				
					if (rating == (((pos - 1) * 2) + 1)) {
						$(this).addClass("rating_half")
					} else if (rating < (pos*2)) {
						$(this).addClass("rating_empty")
					} else {
						$(this).addClass("rating_unrated")
					}
				}

			});

		}
	);
	
$( ".rating_voteable" ).click(function() {
	
	var box = $(this).parent();
	type = $(box).data("type");
	id = $(box).data("id");
	pos = $(this).data("pos")
	v = $(this).data("pos") * 2;
	
	
	votelock = $(box).data("votelock");
	
	if (votelock == "1")
	{
		return;
	}
	
	if (id == "")
	{
		alert("No id")
		return;
	}
	
	$(box).data("votelock", "1");
	
	if (type == "set")
	{
		voteobj = { contentgroup: id, vote: v, ajax: 1 }
	}
	else if (type == "model")
	{
		voteobj = { set: id, vote: v, ajax: 1}
	}
	else if (type == "dvd")
	{
		voteobj = { dvd: id, vote: v, ajax: 1}
	}
	else
	{
		alert("undefined type")
		return;
	}

	$.get( "vote.php", voteobj)
		.done(function( data ) {

			
			if (data != "done")
			{
				alert("There was an error recording your vote.  Please try again later");
				return;
			}
			
			$(box).data("voted", 1);
			$(box).data("rating", v);
				
			$(".rating_voteable", box).each( function() {
				
				pos2 = $(this).data("pos");
			
				$(this).removeClass("rating_half");
				$(this).removeClass("rating_empty");
				$(this).removeClass("rating_unrated");
				$(this).removeClass("rating_voted");
				
				if (pos2 <= pos)
				{
					$(this).addClass("rating_voted")
				}
				else
				{
					$(this).addClass("rating_empty")
				}

				// half, empty, voted, star
			});
			
			$(box).data("votelock", "0");
		})
		.fail(function() {
			alert("There was an error recording your vote.  Please try again later");
			$(box).data("votelock", "0");
		});

	
	
});
	

});




function jsgallery(cg, id, fid, settype, mt)
{
  var url="";
  
  try
  {
	  base = document.getElementsByTagName('base')[0].getAttribute('href')
  }
  catch(e)
  {
	  base = "";
  }

  var url = base + "image.php?cg=" + cg + "&type=" + settype + "&id=" + fid 
  if (mt != "")
  {
     url = url + "&mt=" + mt
  }
  url = url + "#id=" + id
  document.location = url
  return false
}

function retPicarr(picarr, id)
{
  for(i = 0; i < picarr.length; i++)
  {
    if (picarr[i][0] == id)
    {
	   return picarr[i]
    }
  }
}

function RenderImg(picarr, id, divv)
{
  var poss = 0;
  dv = document.getElementById(divv)

  id = id + "";
  if ( id.indexOf(":index") != -1 )
  {
		id = id.replace(":index", "");
		i = id;

		imgg = picarr[i][1]
		wdth = picarr[i][2]
		hdth = parseInt(picarr[i][3]) + 75
		movtype = picarr[i][4]
		movname= picarr[i][5]
		poss = i
  }
  else
  {
	  for(i = 0; i < picarr.length; i++)
	  {
	    if (picarr[i][0] == id)
	    {
	       imgg = picarr[i][1]
		   wdth = picarr[i][2]
		   hdth = parseInt(picarr[i][3]) + 75
		   movtype = picarr[i][4]
		   movname= picarr[i][5]
	       poss = i
	    }
	  }
  }


  if (dv == undefined)
  {
    return true
  }
  

  noman = document.getElementById("nomansland")


  var dot = imgg.lastIndexOf("."); 
  var extt = imgg.substr(dot,imgg.length); 

  if (!isdefined("movtype"))
  {
    movtype = ""
  }

  if (!isdefined("movname"))
  {
    movname = ""
  }
  
  if (!isdefined("username"))
  {
    username = ""
  }

  if ((movname.indexOf("264") != -1) || (extt == ".mov") || (extt == ".mp4"))
  {
	ua = (navigator.userAgent + "").toLowerCase();
	
	// If the user agent has any of these strings, automatically use the HTML5 player.
	
	strmtch = ["iphone", "ipad", "android", "andriod", "silk", "kindle"];
	
	html5load = 0;
	
	for(i = 0; i < strmtch.length; i++)
	{
		if (ua.indexOf(strmtch[i]) != -1)
		{
			html5load = 1;
		}
	}
		
	// Otherwise, detect to see if flash is present.  If it is present, don't use the HTML5 player.
	// If it's not present, use the HTML5 player.
	
	if (html5load == 0)
	{
		major = 9;

	    var v;
	    if (navigator.plugins && navigator.plugins.length > 0) {
	        var type = 'application/x-shockwave-flash';
	        var mimeTypes = navigator.mimeTypes;
	        if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) {
	            v = mimeTypes[type].enabledPlugin.description.replace(/^.*?([0-9]+)\.([0-9])+.*$/, '$1,$2').split(',');
	        }
	    }
	    else {
	        var flashObj = null;
	        try { flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); } catch (ex) { html5load = 1; }
	        if (flashObj != null) {
	            var fV;
	            try { fV = flashObj.GetVariable("$version"); } catch (err) { html5load = 1; }
	            v = fV.replace(/^.*?([0-9]+,[0-9]+).*$/, '$1').split(',');
	        }
	    }

	    if (v)
		{
	        var majorVersion = parseInt(v[0], 10);

			if (major >= majorVersion)
			{
				html5load = 1;
			}	
	    }
		else
		{
	    	html5load = 1;
		}
		
		// Test to see if the HTML5 player can load an mp4 file.
		// If it can't, don't use the VIDEO element.
	}


	if (html5load == 1)
	{
		var testEl = document.createElement( "video" );

		if ( testEl.canPlayType )
		{		
		    canplay = "" !== ( testEl.canPlayType('video/mp4;') );
		}
		else
		{
			html5load = 0; // Device can't load the mp4 video.  Prompt for the flash player download.
		}
	
		if (!canplay)
		{
			html5load = 0; // Device can't load the mp4 video.  Prompt for the flash player download.
		}
	}

	if (html5load == 1)
    {
		hdth = hdth - 75

	    if (wdth > 980)
	    {
	          hdth = hdth * (980) / wdth;
	          wdth = 980;
	    }

		inht = ''
		inht += '<video src="'+imgg+'" width="'+wdth+'" height="'+hdth+'" controls="controls"></video>'
	}
	else
	{
		hdth = hdth - 60

		inht = ''
		inht += '<object width="'+wdth+'" height="'+hdth+'" '
		inht += 'classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" '
		inht += 'codebase="https://web.archive.org/web/20160124232708/http://www.apple.com/qtactivex/qtplugin.cab"> '
		inht += '<param name="src" value="'+imgg+'"> '
		inht += '<param name="autoplay" value="true"> '
		inht += '<param name="controller" value="true"> '
		inht += '<embed src="'+imgg+'" width="'+wdth+'" height="'+hdth+'" '
		inht += 'autoplay="true" controller="true" '
		inht += 'pluginspage="https://web.archive.org/web/20160124232708/http://www.apple.com/quicktime/download/"> '
		inht += '</embed> '
		inht += '</object> '
	}

	dv.innerHTML = inht
  }
  else if ((movname.indexOf("divx") != -1) || (movname.indexOf("xvid") != -1))
  {
	hdth = hdth - 55

     dc1 = document.location + ''
     dc = dc1.substring(7, dc1.indexOf('/',7)+1)

     dc = dc1.substr(0, 7) + dc;


     // Code to make sure videos work on strongbox.
	
     sbsession = getCookie("sbsession")
	
     if (sbsession != "")
     {
		sbsession = sbsession.split("&");
		sbsession = sbsession[0]
			
		if(dc.indexOf(sbsession) == -1)
		{
			if (dc.indexOf("www.") == -1)
			{
				dc = dc.replace("http://", "http://" + sbsession + ".")
			}
			else
			{
				dc = dc.replace("https://web.archive.org/web/20160124232708/http://www.", "http://" + sbsession + ".")
			}
		}
     }
     else if(username != "")
     {
		dc = dc.replace("http://", "http://" + username + ":" + password + "@")
     }
     
     imgg = dc + imgg

     inht = ""
     inht += '<object classid="clsid:67DABFBF-D0AB-41fa-9C46-CC0F21721616" width="'+wdth+'" height="'+hdth+'" ' 
     inht += ' codebase="https://web.archive.org/web/20160124232708/http://go.divx.com/plugin/DivXBrowserPlugin.cab">'
     inht += ' <param name="custommode" value="none" />'
     inht += '  <param name="src" value="'+imgg+'" />'
     inht += '<embed type="video/divx" src="'+imgg+'" custommode="none" width="'+wdth+'" height="'+hdth+'" '
     inht += ' pluginspage="https://web.archive.org/web/20160124232708/http://go.divx.com/plugin/download/">'
     inht += '</embed>'
     inht += '</object>'
     inht += '<p style="color:white;">No video? Get the DivX Web Player for <a style="text-decoration: underline;" ' 
     inht += ' href="https://web.archive.org/web/20160124232708/http://download.divx.com/player/DivXWebPlayerInstaller.exe">Windows</a> or '
     inht += '<a style="text-decoration: underline;" href="https://web.archive.org/web/20160124232708/http://download.divx.com/player/DivXWebPlayer.dmg">Mac</a></p>'

     dv.innerHTML = inht
  }
  else if ((extt == ".rm") || (extt == ".rmvb"))
  {
	 inht = ""

     dc1 = document.location + ''
     dc = dc1.substring(7, dc1.indexOf('/',7)+1)
     dc = dc1.substr(0, 7) + dc;

	 imgg = dc + imgg


	 inht += '<OBJECT ID=RVOCX CLASSID="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" WIDTH="'+wdth+'" HEIGHT="'+hdth+'"> '
	 inht += '<PARAM name="src" value="'+imgg+'"> '
	 inht += '<PARAM name="autostart" value="true"> '
	 inht += '<PARAM name="controls" value="imagewindow"> '
	 inht += '<PARAM name="console" value="video"> '
	 inht += '<EMBED TYPE="audio/x-pn-realaudio-plugin" SRC="'+imgg+'" WIDTH="'+wdth+'" HEIGHT="'+hdth+'" AUTOSTART="tue" CONTROLS="all" CONSOLE="video"> '
	 inht += '</EMBED> '
	 inht += '</OBJECT><br />'

	 inht += '<OBJECT ID=RVOCX CLASSID="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" WIDTH="'+wdth+'" HEIGHT=36>'
	 inht += '<PARAM NAME="CONTROLS" VALUE="ControlPanel">'
	 inht += '<PARAM NAME="CONSOLE" VALUE="video">'
	 inht += '<EMBED SRC="plugin.rpm" WIDTH=350 HEIGHT=36 NOJAVA=true CONTROLS=ControlPanel CONSOLE=one>'
	 inht += '</OBJECT>'




	dv.innerHTML = inht
  }
  else if (noman == undefined)
  {
	imageObj = null
    var imageObj = new Image();
    imageObj.src = imgg;

	if (isNaN(hdth))
	{
		hdth = imageObj.height;

		if (hdth == 0)
		{
			hdth = 1024
		}
	}
	else
	{
		hdth = hdth - 75;
	}

	if (isNaN(wdth))
	{
		wdth = imageObj.width;

		if (wdth == 0)
		{
			wdth = 1024
		}
	}


	htm = ""
	htm = htm + '<a onclick="NextImage()" style="cursor: pointer;">';

    htm = htm + '<img border="0" src="' + imgg + '"'
	if (wdth != "")
	{
    	htm = htm + ' width="' + wdth + '"'
	}
	if (hdth != "")
	{
    	htm = htm + ' height="' + hdth + '"'
	}

    htm = htm + ' />'
	htm = htm + "</a>";


    $("#" + divv).css("height", hdth + "px");
    $("#" + divv).css("width", wdth + "px");
    $("#" + divv).css("opacity", 0);
//    $("#" + divv).hide();

    $(imageObj)
	    .load(function () {
		  dv.innerHTML = htm

		  $("#" + divv).animate({
		    opacity: 1.0
		  }, 200);

		})
	    .ready(function () {
		  dv.innerHTML = htm

		  $("#" + divv).animate({
		    opacity: 1.0
		  }, 200);

		})


	var imageOcache = []
	var num_images_precache = 5;
	
	pas2 = Math.min(picarr.length, poss + num_images_precache);
	pas2 = Math.max(0, pas2);
	
	for(i = poss; i < pas2; i++)
	{
		imageOcache[i] = new Image();
		imageOcache[i].src = picarr[i][1];
	}


//, function() {
//		    // Animation complete.
//		  }


  }
  else
  {
	inht = ""
	
	dc1 = document.location + ''
	dc = dc1.substring(7, dc1.indexOf('/',7)+1)
	dc = dc1.substr(0, 7) + dc;
	
	
	// Code to make sure videos work on strongbox.
	
	sbsession = getCookie("sbsession")

	sdef = 0;
	if (isdefined("Silverlight"))
	{
		if (Silverlight.isInstalled("1.0"))
		{
			sdef = 1;
		}
	}

	if (imgg.indexOf("http") == -1)
	{
		if (sbsession != "")
		{
			sbsession = sbsession.split("&");
			sbsession = sbsession[0]
			
			if(dc.indexOf(sbsession) == -1)
			{
				ip_pat = /http:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

				if (dc.match(ip_pat))
				{
					// The sbsession isn't appended here since it's an IP address.
				}
				else if (dc.indexOf("www.") == -1)
				{
					dc = dc.replace("http://", "http://" + sbsession + ".")
				}
				else
				{
					dc = dc.replace("https://web.archive.org/web/20160124232708/http://www.", "http://" + sbsession + ".")
				}
			}
		}
		else if (sdef == 0)
		{
			if (!document.all && isdefined("username") && isdefined("password"))
			{
				if (username != "")
				{
					dc = dc.replace("http://", "http://" + username + ":" + password + "@")
				}
			}

		}
		
		imgg = dc + imgg
	}


	if (sdef == 1)
	{

		hdth = hdth - 55;
		
		    if (wdth > 980)
		    {
		          hdth = hdth * (980) / wdth;
		          wdth = 980;
		    }
		
		var p_src = 'wmvplayer.xaml';
		var p_cfg = {width:wdth,height:hdth,file:imgg,autostart:'true'};
		var ply = new jeroenwijering.Player(dv,p_src,p_cfg);
	}
	else
	{
	    if (wdth > 980)
	    {
	          hdth = hdth * (980) / wdth;
	          wdth = 980;
	    }	
	
	
		if (document.all) // IE
		{
		 inht += "<object id='mediabox' ";
		 inht += "classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95' ";
		 inht += "codebase='https://web.archive.org/web/20160124232708/http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701' ";
		 inht += "standby='Loading Microsoft Windows Media Player components...' ";
		 inht += "type='application/x-oleobject' width='"+wdth+"' height='"+hdth+"''> ";
		 inht += "<param name='fileName' value=\""+imgg+"\"/> ";
		 inht += "<param name='animationatStart' value='true' /> ";
		 inht += "<param name='transparentatStart' value='true' /> ";
		 inht += "<param name='autoStart' value=\"true\" /> ";
		 inht += "<param name='showControls' value=\"true\" /> ";
		 inht += "<param name=\"ShowStatusBar\" value=\"true\" /> ";
		 inht += "<param name='loop' value=\"0\" /> ";
		 inht += "</object>"
		}
		else
		{
		// Code for anything but IE.
	
		 inht += "<object classid=\"CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95\" width=\""+wdth+"\" height=\""+hdth+"\" type=\"application/x-oleobject\" >"
		 inht += "<param name=\"fileName\" value=\""+imgg+"\">"
		 inht += "<param name=\"autostart\" value=\"1\">"
		 inht += "<param name=\"ShowStatusBar\" value=\"true\" /> ";
		 inht += "<param name='showControls' value=\"true\" /> ";
		 inht += "<param name=\"volume\" value=\"0\">"
		 inht += "<EMBED type=\"application/x-mplayer2\" pluginspage = \"http://www.microsoft.com/Windows/MediaPlayer/\" "
		 inht += "SRC=\""+imgg+"\" name=\"MediaPlayer1\" width=\""+wdth+"\" "
		 inht += "height=\""+hdth+"\" AutoStart=\"true\" ShowStatusBar=\"1\" ShowControls=\"1\"></EMBED>"
		 inht += "</object>"
		} 
		dv.innerHTML = inht
	}
 }



  
  prevcss = (poss == 0) ? "nav_hid" : "nav_vis"
  nextcss = (poss == picarr.length - 1) ? "nav_hid" : "nav_vis"

  if (document.getElementById("gal_prevpage") != undefined)
  {
     document.getElementById("gal_prevpage").className = prevcss
  }

  if (document.getElementById("gal_nextpage") != undefined)
  {
    document.getElementById("gal_nextpage").className = nextcss
  }

  if (document.getElementById("gal_prevpage_bot") != undefined)
  {
     document.getElementById("gal_prevpage_bot").className = prevcss
  }

  if (document.getElementById("gal_nextpage_bot") != undefined)
  {
    document.getElementById("gal_nextpage_bot").className = nextcss
  }


  spu = picarr[poss]

  if (document.getElementById("sharevideourl") != undefined)
  { 
    document.getElementById("sharevideourl").href = "share.php?id=" + spu[0] + "&type=" + spu[4] + "&mt=" + spu[5]
  }


  TrackContent(spu)


  return false

}

function getCookie(c_name)
{
  if (document.cookie.length>0)
  {
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1)
    { 
    	c_start=c_start + c_name.length+1; 
	    c_end=document.cookie.indexOf(";",c_start);
    	if (c_end==-1) c_end=document.cookie.length;
	    return unescape(document.cookie.substring(c_start,c_end));
    } 
  }

  return "";
}

function NextImage()
{
  nid = 0

  for(i = 0; i < picarr.length; i++)
  {
    if (picarr[i][0] == id)
    {
       nid = i
    }
  }

  if (picarr[nid+1] != undefined)
  {
	if (picarr[nid+1][1] == "#trial#")
	{
	    document.location = nourl
	    return false
	}

    id = picarr[nid+1][0]
    imgg = picarr[nid+1][1]

    noman = document.getElementById("nomansland")

	if (noman != null)
	{
		document_location_anchor("id=" + id);
		window.location.reload();
	}
	else
	{
		document_location_anchor("id=" + id)
    	return RenderImg(picarr, id, "mediabox")
	}
  }
  else if( parseInt(picarr[nid][6]) )
  {
      document.location = "gallery.php?id=" + picarr[nid][6] + "&type=" + picarr[nid][4];
  }

  return false
}

function PrevImage()
{
  nid = 0

  for(i = 0; i < picarr.length; i++)
  {
    if (picarr[i][0] == id)
    {
       nid = i
    }
  }

  if (picarr[nid-1] != undefined)
  {
	if (picarr[nid-1][1] == "#trial#")
	{
	    document.location = nourl
	    return false
	}

    id = picarr[nid-1][0]
    imgg = picarr[nid-1][1]



    noman = document.getElementById("nomansland")
	
	if (noman != null)
	{
		document_location_anchor("id=" + id)
		window.location.reload();
		return false
	}
	else
	{
		document_location_anchor("id=" + id)
    	return RenderImg(picarr, id, "mediabox")
	}
  }

  return false
}


// What happens when a flash movie goes to the next clip.

function playState(obj)
{
  ind = obj.index
  spu = picarr[ind]

  dl = document.location
  document_location_anchor(spu[0])
  document.title = titletxt


  id = spu[0]

  if (document.getElementById("sharevideourl") != undefined)
  { 
    document.getElementById("sharevideourl").href = "share.php?id=" + spu[0] + "&type=" + spu[4] + "&mt=" + spu[5]
  }

  TrackContent(spu)
}

function TrackContent(suu)
{
   url = "stattrack.php?pagename=image&id=" + suu[0] + "&cg=" + suu[6] + "&type=" + suu[4] + "&mt=" + suu[5];
   url = url + "&rnd=" + Math.floor(Math.random()*1000000)

   if (window.XMLHttpRequest)
   {
     // If IE7, Mozilla, Safari, etc: Use native object

     var http = new XMLHttpRequest()
   }
   else
   {
     if (window.ActiveXObject)
     {
        // ...otherwise, use the ActiveX control for IE5.x and IE6
        var http = new ActiveXObject("Microsoft.XMLHTTP");
     }
   }

  http.open("GET", url, false);
  http.send(null);
}



// CALENDAR POPUP CODE


var ie  = document.all

function positionoffset(wg, ot)
{
	var toff = (ot=="left") ? wg.offsetLeft : wg.offsetTop;
	var parentEl = wg.offsetParent;
	while (parentEl != null)
	{
		toff = (ot=="left") ? toff + parentEl.offsetLeft : toff + parentEl.offsetTop;
		parentEl = parentEl.offsetParent;
	}
	return toff;
}

function showhideobject(obj, e)
{
	dropmenuobj.style.left = dropmenuobj.style.top="-500px"
	if (e.type=="mouseover")
	{
		obj.visibility="visible"
	}
}

function ietest()
{
	if (document.compatMode && document.compatMode!="BackCompat")
	{
		return document.documentElement
	}
	else
	{
		return document.body
	}
}

function clearedge(obj, wedge)
{
	if (wedge=="rightedge")
	{
		eoffx=0
		var winedge = ie && !window.opera ? ietest().scrollLeft + ietest().clientWidth-15 : window.pageXOffset+window.innerWidth - 15
		dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
		if (winedge-dropmenuobj.x < dropmenuobj.contentmeasure)
			eoffx=dropmenuobj.contentmeasure-obj.offsetWidth
		return eoffx
	}
	else
	{
		eoffy=0
		var topedge = ie && !window.opera? ietest().scrollTop : window.pageYOffset
		var winedge=ie && !window.opera? ietest().scrollTop+ ietest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
		dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
		if (winedge-dropmenuobj.y < dropmenuobj.contentmeasure) //move up?
			eoffy=dropmenuobj.contentmeasure+obj.offsetHeight
		return eoffy
	}
}

function displaycalendarpopup(obj, e)
{
	if (window.event) event.cancelBubble=true
	else if (e.stopPropagation) e.stopPropagation()
	if (typeof dropmenuobj!="undefined")
		dropmenuobj.style.visibility="hidden"

	clearhidemenu()
	dropmenuobj=document.getElementById(obj.getAttribute("popid"))
	showhideobject(dropmenuobj.style, e)
	dropmenuobj.x = positionoffset(obj, "left")
	dropmenuobj.y = positionoffset(obj, "top")
	dropmenuobj.style.left=dropmenuobj.x-clearedge(obj, "rightedge")+"px"
	dropmenuobj.style.top=dropmenuobj.y-clearedge(obj, "bottomedge")+obj.offsetHeight+"px"
}


function delayhidemenu()
{
	delayhide=setTimeout("dropmenuobj.style.visibility='hidden'; dropmenuobj.style.left=0; ",250)
}

function clearhidemenu()
{
	if (typeof delayhide!="undefined")
		clearTimeout(delayhide)
}

function popidtoelement(linkobj)
{ 
	var relvalue=linkobj.getAttribute("popid")
	return (relvalue!=null && relvalue!="" && document.getElementById(relvalue)!=null && document.getElementById(relvalue).className=="calendarpopup")? true : false
}

function initcal()
{
	var all_links=document.getElementsByTagName("a")
	for (var i=0; i<all_links.length; i++)
	{
		if (popidtoelement(all_links[i]))
		{
			all_links[i].onmouseover=function(e)
			{
				var evtobj=window.event? window.event : e
				displaycalendarpopup(this, evtobj)
			}

			all_links[i].onmouseout=delayhidemenu
		}
	}
}

if (window.addEventListener)
	window.addEventListener("load", initcal, false)
else if (window.attachEvent)
	window.attachEvent("onload", initcal)
else if (document.getElementById)
	window.onload=initcal



}
/*
     FILE ARCHIVED ON 23:27:08 Jan 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:57:43 Jun 07, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.153
  RedisCDXSource: 7.63
  esindex: 0.012
  load_resource: 509.043
  exclusion.robots.policy: 0.143
  CDXLines.iter: 16.355 (3)
  captures_list: 2798.775
  PetaboxLoader3.resolve: 457.756
  LoadShardBlock: 2767.798 (3)
  PetaboxLoader3.datanode: 2804.85 (4)
*/