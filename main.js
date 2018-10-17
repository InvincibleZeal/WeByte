$(document).ready(function() {

 /* ----------<<<< SHOWCASE SLIDER >>>>------------- */
  const header = $('header'),
      showcase = $('#showcase');

  // showcase.mousemove(function(e) {
  //      TweenMax.to(showcase, 1, {x: -(e.pageX*950/$(window).width()) , ease: Power0.easeNone});
  // });

  showcase.mousemove(function(e) {
       TweenMax.to(showcase, 1, {x: -(e.pageX*(2500-$(window).width())/$(window).width()) , ease: Power0.easeNone});
  });


 /* ----------<<<< SVG ANIMATIONS >>>>------------- */
 /*     >>> HACKATHON <<<     */
 const hcksvg = $("#hackathon"),
			hckbtns = $(".hck-btns"),
			hckbtn1 = $("#hck-btn-1"),
			hckbtn2 = $("#hck-btn-2"),
			hckbtn3 = $("#hck-btn-3"),
			hckaddr = $("#hck-addr"),
			hcksrch = $("#hck-srch"),
			hckscrn = $("#hck-scrn"),
			hckmask = $("#hck-mask"),
			hckeye = $("#hck-eye"),
			hckhck = $("#hck-hck"),
			hckfill = $("#hck-fill");

	var tlhck = new TimelineMax();

	tlhck
    .addPause()
		.from(hckscrn, 0.8, {autoAlpha: 0, y: 400,ease: Back.easeOut.config(3)})
		.staggerFrom(hckbtns, 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut},0.15, "-=0.1")
		.staggerFrom([hckaddr, hcksrch], 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut},0.3)
		.from(hckhck, 0.5, {autoAlpha:0, y: 40, ease: Back.easeOut.config(4)})
		.from(hckeye, 0.5, {autoAlpha:0, y: 40, ease: Back.easeOut.config(4)},"-=0.2")
		.from(hckmask, 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)}, "-=0.2")
		.from(hckfill, 0.6, {autoAlpha: 0, ease:RoughEase.ease.config({ template:Power0.easeNone,strength:2,points:10,taper:"out",randomize: false,clamp: false})});

    $(".hackathon").mouseenter(animateHackathon);
    $(".hackathon").mouseleave(pauseAndRestartHck);

    function animateHackathon() {
      hcksvg.removeClass("hidden");
      tlhck.play();
    }

    function pauseAndRestartHck() {
      tlhck.pause().progress(0);
    }

  /*     >>> DATA SCRAPPING <<<     */

  const dtssvg = $("#datascrapping"),
			dtsbrowser = $("#dts-browser"),
			dtssearch = $("#dts-search"),
			dtsaddressid = $("#dts-address-id"),
			dtsaddress = $(".dts-address"),
			dtscontent = $("#dts-content"),
			dtscontents = $(".dts-content"),
			dtscontent1 = $("#dts-content-1"),
			dtscontenthl = $("#dts-content-hl"),
			dtssheet = $("#dts-sheet"),
			dtssheetwindow = $("#dts-sheet-window"),
			dtssheetbtn = $(".dts-sheet-btn"),
			dtssheetcontent = $(".dts-sheet-content"),
			dtssheetdot = $("#dts-sheet-dot");

	const tldts = new TimelineMax();

	tldts
    .addPause()
		.from(dtsbrowser, 0.8, {autoAlpha:0, y: 400, ease: Back.easeOut.config(2)})
		.to(dtsbrowser, 0.8, {scale: 3, x: -320, ease: Back.easeOut.config(1)})
		.from(dtssearch, 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)})
		.staggerFrom(dtsaddress, 0.5, {autoAlpha: 0, ease: Power4.easeIn}, 0.15, "-=0.1")
		.to(dtssearch, 0.4, {scale: 0.4, transformOrigin: "center center", ease: Power4.easeIn})
		.to(dtssearch, 0.4, {scale: 1, transformOrigin: "center center", ease: Power4.easeOut})
		.to(dtsbrowser, 0.5, {scale: 1, x: 0, ease: Back.easeOut.config(1)})
		.to([dtssearch, dtsaddress], 0.3, {autoAlpha: 0, ease: Power4.easeOut}, "-=0.5")
		.staggerFrom(dtscontents, 0.3, {autoAlpha: 0, scale: 0, ease: Back.easeOut.config(4)}, 0.1)
		.from(dtscontenthl, 0.3, {autoAlpha: 0, scale: 1.3, transformOrigin: "center center", ease: Back.easeOut.config(4)})
		.to([dtscontent1, dtscontenthl], 0.3, {scale: 0, transformOrigin: "center center", ease: Back.easeIn.config(2)}, "+=0.2")
		.to([dtsbrowser, dtscontent], 0.5, {x: -600, ease: Back.easeIn.config(2)})
		.set([dtscontenthl, dtscontent1], {x: 618, y: 130})
		.from(dtssheetwindow, 0.5, {autoAlpha: 0, x: 600, ease: Back.easeOut.config(2)}, "-=0.15")
		.staggerFrom(dtssheetbtn, 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)}, 0.1)
		.staggerFrom(dtssheetcontent, 0.3, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)}, 0.1)
		.to([dtscontenthl, dtscontent1], 0.3, {scale: 1, ease: Back.easeOut.config(4)})
		.to(dtscontenthl, 1, {autoAlpha: 0,  ease:RoughEase.ease.config({ template:Power4.easeOut,strength:2,points:7,taper:"none",randomize: false,clamp: false})}, '+=0.1')
		.from(dtssheetdot, 0.5, {autoAlpha: 0, scale:0, transformOrigin: "center center", ease: Back.easeOut.config(4)})
		;

    $(".datascrapping").mouseenter(animateDatascrapping);
    $(".datascrapping").mouseleave(pauseAndRestartDts);

    function animateDatascrapping() {
      dtssvg.removeClass("hidden");
      tldts.play();
    }

    function pauseAndRestartDts() {
      tldts.pause().progress(0);
    }

  /*     >>> APP DEVELOPMENT <<<     */


  const apdsvg = $("#appdev"),
			apdphone = $("#apd-phone"),
			apdphoneside = $("#apd-phone-side"),
			apdmenu = $(".apd-menu"),
			apdmenu1 = $("#apd-menu-1"),
			apdmenu2 = $("#apd-menu-2"),
			apdmenu3 = $("#apd-menu-3"),
			apdmenubtn = $("#apd-menu-btn"),
			apdmusic = $(".apd-music"),
			apdchrg = $("#apd-chrg"),
			apdgym = $("#apd-gym"),
			apdpay = $("#apd-pay"),
			apdqr = $("#apd-qr"),
			apdgame = $("#apd-game"),
			apdgear = $("#apd-gear"),
			apdapp = $("#apd-app");

	const tlapd = new TimelineMax();
	tlapd
    .addPause()
    .from(apdphone, 0.8, {y:1000, ease: Back.easeOut.config(1)})
		.staggerFrom(apdmenu, 0.3, {scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(3)}, 0.1)
		.from(apdmenubtn, 0.3, {scale:0, transformOrigin: "center center", ease: Back.easeOut.config(4)})
		.staggerTo(apdmenu, 0.5, {y: -400, ease: Back.easeIn.config(1)}, 0.2)
		.to(apdmenubtn, 0.3, {scale: 0, ease: Back.easeIn.config(1)}, "-=0.2")
		.from(apdmusic, 0.5, {scale:0, transformOrigin: "center center", ease: Back.easeOut.config(3)})
		.to(apdphoneside, 0.2,{autoAlpha: 0, ease: Power4.easeOut})
		.to(apdmusic, 0.5, {autoAlpha: 0, scale: 0.1, transformOrigin: "center center", ease: Power4.easeIn}, "-=0.1")
		.from(apdchrg, 0.5, {autoAlpha: 0, x: 700, ease: Back.easeOut.config(1)}, "-=0.2")
		.to(apdchrg, 0.5, {autoAlpha: 0, scale: 0.1, transformOrigin: "center center", ease: Power4.easeIn}, "-=0.1")
		.from(apdgame, 0.5, {autoAlpha: 0, x: 700, ease: Back.easeOut.config(1)}, "-=0.2")
		.to(apdgame, 0.5, {autoAlpha: 0, scale: 0.1, transformOrigin: "center center", ease: Power4.easeIn}, "-=0.1")
		.from(apdpay, 0.5, {autoAlpha: 0, x: 700, ease: Back.easeOut.config(1)}, "-=0.2")
		.to(apdpay, 0.5, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Power4.easeIn}, "-=0.1")
		.from(apdqr, 0.25,{x: 700, ease: Back.easeIn.config(1)}, "-=0.1")
    	.to(apdqr, 0.25, {autoAlpha: 0, scale: 0.1, transformOrigin: "center center", ease: Power4.easeIn}, "+=0.1")
		.from(apdgym, 0.25,{x: 700, ease: Back.easeIn.config(1)}, "-=0.1")
    	.to(apdgym, 0.25, {autoAlpha: 0, scale: 0.1, transformOrigin: "center center", ease: Power4.easeIn}, "+=0.1")
		.from(apdgear, 0.5, {autoAlpha:0, x: 700, ease: Back.easeOut.config(2)})
		.to(apdphoneside, 0.2, {autoAlpha: 1, ease: Power4.easeIn})
		.to(apdgear, 0.5, {autoAlpha: 0, rotationZ: 720, transformOrigin: "center center", ease: Back.easeIn.config(1)})
		.from(apdapp, 0.5, {autoAlpha:0, rotationZ: -720, transformOrigin: "center center", ease: Back.easeOut.config(1)}, "-=0.2")
    .set(apdpay, {clearProps:"left"})
		;

    $(".appdevelopment").mouseenter(animateAppdevelopment);
    $(".appdevelopment").mouseleave(pauseAndRestartApd);

    function animateAppdevelopment() {
      apdsvg.removeClass("hidden");
      tlapd.play();
    }

    function pauseAndRestartApd() {
      tlapd.pause().progress(0);
    }

 /*     >>> CODE COUPLES <<<     */

  const cdcsvg = $("#codecouples"),
  		cdcgirl = $("#cdc-girl"),
  		cdcgirlbody = $("#cdc-girl-body"),
  		cdcgirlsmile = $("#cdc-girl-smile"),
  		cdcgirlsmile1 = $("#cdc-girl-smile1"),
  		cdcgirleye = $("#cdc-girl-eye"),
  		cdcboy = $("#cdc-boy"),
  		cdcboybtn = $(".cdc-boy-btn"),
  		cdcboybody = $("#cdc-boy-body"),
  		cdcboysmile = $("#cdc-boy-smile"),
  		cdcboysmile1 = $("#cdc-boy-smile1"),
  		cdcboyeye = $("#cdc-boy-eye"),
  		cdcboyeye1 = $("#cdc-boy-eye1"),
  		cdcheart = $("#cdc-heart"),
      	cdcheartl = $("#cdc-heart-l"),
      	cdcheartr = $("#cdc-heart-r"),
  		cdcdesktop = $("#cdc-desktop"),
  		cdcdesktopfill = $("#cdc-desktop-fill"),
  		cdcalien = $("#cdc-alien"),
  		cdcmac = $("#cdc-mac"),
  		cdcmacfill = $("#cdc-mac-fill"),
  		cdcapple = $("#cdc-apple");

	const tlcdc = new TimelineMax();
  tlcdc.set([cdcgirlsmile1, cdcboyeye1, cdcboysmile1], {autoAlpha: 0});

	tlcdc
    .addPause()
		.staggerFrom([cdcgirlbody,cdcboybody], 0.8, {autoAlpha:0, y: 400, ease: Back.easeOut.config(2)})
		.staggerFrom([cdcgirleye, cdcgirlsmile, cdcboyeye, cdcboysmile], 0.5, {autoAlpha: 0, y:40, ease: Back.easeOut.config(4)}, 0.2, "-=0.2")
		.staggerFrom(cdcboybtn, 0.3, {autoAlpha:0, y:40, ease: Back.easeOut.config(4)}, 0.1)
		.from(cdcheart, 1, {autoAlpha:0, y:60, ease: Power4.easeOut})
		.from(cdcdesktop, 0.5, {autoAlpha: 0, y: 40, ease: Back.easeOut.config(4)})
		.from(cdcmac, 0.5, {autoAlpha: 0, y: 40, ease: Back.easeOut.config(4)}, "-=0.5")
    	.to([cdcboysmile, cdcboyeye, cdcgirlsmile, cdcgirleye], 0.3,{autoAlpha: 0, ease: Power4.easeOut}, "-=0.5")
		.to([cdcboysmile1, cdcboyeye1, cdcgirlsmile1, cdcgirleye], 0.3, {autoAlpha: 1, ease: Power4.easeOut}, "-=0.2")
    	.to(cdcheartl, 0.3, {x: -20, ease: Back.easeOut.config(4)})
    	.to(cdcheartr, 0.3, {x: 20, ease: Back.easeOut.config(4)}, "-=0.3")
		.from(cdcapple, 0.3, {autoAlpha:0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)}, "-=0.1")
		.from(cdcalien, 0.3, {autoAlpha:0, scale: 0, transformOrigin: "center center", ease: Back.easeOut.config(4)}, "-=0.3")
		.to(cdcheart, 0.5, {autoAlpha:0, y: 40, ease: Back.easeIn.config(4)}, "-=0.5")
		;

    $(".codecouples").mouseenter(animateCodecouples);
    $(".codecouples").mouseleave(pauseAndRestartCdc);

    function animateCodecouples() {
      cdcsvg.removeClass("hidden");
      tlcdc.play();
    }

    function pauseAndRestartCdc() {
      tlcdc.pause().progress(0);
    }


 /*     >>> DEBUGGING <<<     */
  const ftbsvg = $("#findthebug"),
			ftbBody = $("#ftb-body"),
			ftbBodyDots = $(".ftb-body-dot"),
			ftbBodyDot1 = $("#ftb-dot-1"),
			ftbBodyDot2 = $("#ftb-dot-2"),
			ftbBodyDot3 = $("#ftb-dot-3"),
			ftbBodyDot4 = $("#ftb-dot-4"),
			ftbCircleDots = $(".ftb-circle-dot"),
			ftbCircleDot1 = $("#ftb-circle-dot-1"),
			ftbCircleDot2 = $("#ftb-circle-dot-2"),
			ftbCircles = $(".ftb-circle"),
		  	ftbCircle1 = $("#ftb-circle-1"),
			ftbCircle2 = $("#ftb-circle-2");

	const tlftb = new TimelineMax();
	tlftb.set([ftbCircles], {autoAlpha:0});
  tlftb
    .addPause()
    .from(ftbBody, 0.8, {autoAlpha: 0, y: 400, ease: Back. easeOut.config(2)})
    .from(ftbBodyDot1, 0.5, {autoAlpha:0, scale: 0.1, transformOrigin: "center center", ease: Back. easeOut.config(2)}, "-=0.4")
    .from(ftbBodyDot2, 0.5, {autoAlpha:0, scale: 0.1, transformOrigin: "center center", ease: Back. easeOut.config(2)}, "-=0.4")
    .from(ftbBodyDot3, 0.5, {autoAlpha:0, scale: 0.1, transformOrigin: "center center", ease: Back. easeOut.config(2)}, "-=0.4")
    .from(ftbBodyDot4, 0.5, {autoAlpha:0, scale: 0.1, transformOrigin: "center center", ease: Back. easeOut.config(2)}, "-=0.4")
    .to(ftbCircle1, 0.5, {autoAlpha:1, transformOrigin: "center center", scale: .9, ease: Back.easeOut.config(4)})
    .to(ftbCircle2, 0.5, {autoAlpha:1, transformOrigin: "center center", scale: 1.1, ease: Back.easeOut.config(4)}, "-=0.5")
    .to(ftbCircle1, 1, {rotation: 480, ease: Power1. easeOut})
    .to(ftbCircle2, 1, {rotation: -480, ease: Power1. easeOut}, "-=1")
    .to(ftbCircle1, 0.5, {rotation: 360, ease: Back.easeOut.config(1)})
    .to(ftbCircle2, 0.5, {rotation: -360, ease: Back.easeOut.config(1)}, "-=0.5")
    .to(ftbCircle1, 0.5, {scale: 1, ease: Power4.easeOut}, "-=0.5")
    .to(ftbCircle2, 0.5, {scale: 1, ease: Power4.easeOut}, "-=0.5")
    .from(ftbCircleDots, 0.5, {autoAlpha:0, scale: 0, transformOrigin: "center center", ease: Back. easeOut.config(4)}, "-=.2")
    ;

  $(".findthebug").mouseenter(animateFindthebug);
  $(".findthebug").mouseleave(pauseAndRestartFtb);

	function animateFindthebug() {
    ftbsvg.removeClass("hidden");
    tlftb.play();
	}

	function pauseAndRestartFtb() {
		tlftb.pause().progress(0);
	}
 /* ----------<<<< SVG ANIMATIONS END >>>>------------- */

 /* ----------<<<< EVENTS >>>>------------- */

 

});
