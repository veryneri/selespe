var isSplash = -1;
function start(){
	
};
function startF(){	
	setTimeout(function () {
		//$('.car1').css({marginRight:-500}).stop().delay(100).animate({marginRight:0},1200,'easeOutBack');
	}, 200);
};
function showSplash(){
	setTimeout(function () {		
		$('header').stop().delay(300).animate({'marginTop':'0px'}, 800, "easeOutExpo");
		$('.menu').stop().animate({opacity:0},800,'easeOutExpo', function(){ $(this).css({display:'none'}); });
	}, 400);	
};
function hideSplash(){ 
	$('header').stop().animate({'marginTop':'-70px'}, 800, "easeOutExpo");
	$('.menu').css({'display':'block'}).stop().animate({'opacity':'1'}, 800, "easeOutExpo");
};
function hideSplashQ(){
	$('header').css({'marginTop':'-70px'});
	$('.menu').css({'display':'block', 'opacity':'1'});
};

/////////////////////// ready
$(document).ready(function() {
	MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		classMenu:"#menu, .bot_menu",		
		classSubMenu:".submenu",
		topMargin: 210,//mandatory property for decktop
		bottomMargin: 230,//mandatory property for decktop
		topMarginMobileDevices: 210,//mandatory property for mobile devices
		bottomMarginMobileDevices: 230,//mandatory property for mobile devices
		delaySubMenuHide: 300,
		fullHeight: true,
		bodyMinHeight: 900,
		menuInit:function (classMenu, classSubMenu){
			//classMenu.find(">li").each(function(){
			//	$(">a", this).append("<div class='openPart'></div>");
			//})
		},
		buttonOver:function (item){
            $('>.over1',item).stop().animate({'opacity':'1'},300,'easeOutCubic');            
            $('>.txt1',item).stop().animate({'color':'#ffffff'},300,'easeOutCubic');
		},
		buttonOut:function (item){
            $('>.over1',item).stop().animate({'opacity':'0'},300,'easeOutCubic');
            $('>.txt1',item).stop().animate({'color':'#9b9b9b'},300,'easeOutCubic');           
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){        	
        	subMenu.stop(true,true).animate({"height":"show"}, 500, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"hide"}, 700, "easeOutCubic");
		},
		pageInit:function (pages){
			//console.log('pageInit');
			$('.menu').css({'opacity':'0', 'display':'none'});
		},
		currPageAnimate:function (page){
			//console.log('currPageAnimate');
			var Delay=400; // default
			if(isSplash==-1){ // on reload				
				hideSplashQ();
				Delay=0;				
			}
			if(isSplash==0){ // on first time click				
				hideSplash();
				Delay=800;
			}
			isSplash = 2;
			
			// animation of current page
			jQuery('body,html').animate({scrollTop: 0}, 400);   	

			page.css({"top":"0", "left":$(window).width()}).stop(true).delay(Delay).animate({"left":0}, 1000, "easeOutCubic", function (){
					$(window).trigger('resize');
			});    	
		},
		prevPageAnimate:function (page){
			//console.log('prevPageAnimate');
			page.stop(true).animate({"display":"block", "left":"0", "top":$(window).height()}, 500, "easeInCubic");
		},
		backToSplash:function (){
			//console.log('backToSplash');
			if(isSplash==-1){
				isSplash = 0;
				startF();				
			}
			else{
				isSplash = 0;				
				showSplash();
			};
			$(window).trigger('resize');			      
		},
		pageLoadComplete:function (){
			//console.log('pageLoadComplete');            
    }
	});  /// ajaxJSSwitch end

	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	/////// icons
	$(".icons li a").find(".over2").css({opacity:0});
	$(".icons li a").hover(function() {
		$(this).find(".over2").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	  	$(this).find(".over2").stop().animate({opacity:0 }, 400, 'easeOutExpo' );		   
	});
	




	

	
	
	
	

	
		
});

/////////////////////// load
$(window).load(function() {	
	setTimeout(function () {					
  		$('#spinner').fadeOut();		
  		$(window).trigger('resize');
  		start();
	}, 100);
	setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
});