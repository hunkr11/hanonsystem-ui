//브라우져 정보 확인
function Fn_userAgentCheck() {
	var agt = navigator.userAgent.toLowerCase();
	//alert(agt);
	if (agt.indexOf("iphone") != -1 || agt.indexOf("ipod") != -1 || agt.indexOf("blackberry") != -1 || agt.indexOf("android") != -1 || agt.indexOf("Mobile Safari") != -1 || agt.indexOf("windows ce") != -1
			|| agt.indexOf("lg") != -1 || agt.indexOf("iphone") != -1 || agt.indexOf("mot") != -1 || agt.indexOf("samsung") != -1 || agt.indexOf("sonyericsson") != -1) {
		return "mobile"; 
	} else if (agt.indexOf("chrome") != -1 || agt.indexOf("safari") != -1 || agt.indexOf("firefox") != -1 || agt.indexOf("msie 10") != -1 || agt.indexOf("rv:11.0") != -1) {	//Chrome,safari,firefox/rv:11.0 => ie11
		return "web_html5";
	} else if (agt.indexOf("msie") != -1) {	//ie			
		return "web_html";
	} else {
		return "other";
	}
}

$(document).ready(function () { 

	if (Fn_userAgentCheck() == "web_html5" || Fn_userAgentCheck() == "web_html") {
		$('.gnb > li > a').bind('mouseenter focusin', function() {
			$('.gnb > li').removeClass('active');
			$(this).parent().addClass('active');
		});

		$('.gnb li.m4 ul li:last').bind('focusout', function() { unfoldGnb(); });

		$('header').bind('mouseleave', function() { 
			unfoldGnb();
		});
		
		function unfoldGnb() {
			$('.gnb > li').removeClass('active');
		}
	}

	/* mobile gnb click to not working  */
	if (Fn_userAgentCheck() == "mobile" || Fn_userAgentCheck() == "other") {
		//mobile gnb
	  $('.gnb li:has(ul)').addClass("has-sub");
	  $('.gnb > li > a').click(function() {
		var checkElement = $(this).next('.depth2');
		
		$('.gnb li').removeClass('active');
		$(this).closest('li').addClass('active');
		
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		  $(this).closest('li').removeClass('active');
		  checkElement.slideUp('fast');
		}
		
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		  $('.gnb ul:visible').slideUp('fast');
		  checkElement.slideDown('fast');
		  $(this).closest('li').addClass('active');
		}
		
		if (checkElement.is('ul.depth2')) {
		  $('ul.depth2').not(checkElement).slideUp('fast');
		  return false;
		} else {
		  return true;	
		}
	  });
		$(".gnb > li > a").click(function(){
			return false;
		});
		$(".sub_top .breadcrumb a.2depth").click(function(){
			return false;
		});
	}
	var innerWidth = window.innerWidth;
	if ($(window).width() <= 639) {
		$(".gnb > li > a").click(function(){
			return false;
		});
		$(".sub_top .breadcrumb a.2depth").click(function(){
			return false;
		});
	}


	
	$('.viewDetail').each(function () {
		 $(this).click(function(){
			$('.viewDetails').toggle();
		 });
	});
	$('.m_menu').each(function () {
		 $(this).click(function(){
			$('header nav ul.gnb').toggle();
		 });
	});


  

	flexSlider();
	$(".flexslider2").each(function () {
		 $(this).flexslider({
			 animationLoop: true,
			 animation: "slide",
			 slideshow: false,
			 directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
			 controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
			 keyboardNav: true,
			 start: function (slider) {
				 var f_h = $(slider).find('.flex-active-slide').height();
				 var i_h = $(slider).find('.flex-active-slide img').height();
				 $(slider).find(".flex-viewport").css('height', f_h);
				 $('.flexslider2 .flex-control-paging').css('top', i_h + 10);
			 },
			 after: function (slider) {
				 var f_h = $(slider).find('.flex-active-slide').height();
				 var i_h = $(slider).find('.flex-active-slide img').height();
				 $(slider).find(".flex-viewport").css('height', f_h);
				 $('.flexslider2 .flex-control-paging').css('top', i_h + 10);
			 }
		 });
	 });
	
	var count = 0;
	 $('.btn_bp_next').each(function () {
		 
		 $(this).click(function(){
			count += 1;
			var $bp = $(".bp_slide ul li");
			$bp.removeClass('current');
			$bp.eq(count).addClass('current');
			if (count == 6) {
				count = 0;
				$bp.eq(0).addClass('current');
			}
		 });
	 });
	 $('.btn_bp_prev').each(function () {
		 $(this).click(function(){
			count -= 1;
			var $bp = $(".bp_slide ul li");
			$bp.removeClass('current');
			$bp.eq(count).addClass('current');
			if (count == -1) {
				count = 5;
				$bp.eq(5).addClass('current');
			}
		 });
	 });



	
	$("#climate,.tab1, .tab2").each(function () {
		
		$(this).easyResponsiveTabs({
			type: 'default', //Types: default, vertical, accordion           
			width: 'auto', //auto or any width like 600px
			fit: true,   // 100% fit in a container
			//closed: 'accordion', // Start closed if in accordion view
			activate: function(event) { // Callback function if tab is switched
			}
		});
		var hash = window.location.hash,
		lis = $("ul.resp-tabs-list > li");
		lis.removeClass("resp-tab-active");
		$("a[href='" + hash.substring(0, 7) + "']").parent().addClass("resp-tab-active");
		$(hash.substring(0, 7)).addClass("resp-tab-content-active");
			//console.log(">>>> :"+ hash)
		if (!hash) {
			lis.eq(0).addClass("resp-tab-active");
			$('#tab1-1').show();
		    //$('#tab2-1').show();
			$('#tab1-2-1').show();
		} else {
			$('#tab1-1').hide();
		    //$('#tab2-1').hide();
			$(hash.substring(0,7)).addClass("resp-tab-content-active");
		}
		if ( hash == '#tab1-1' || hash == '#tab2-1' )
		{
			$('#tab1-1').show();
			$('#tab2-1').show();
			$(hash).addClass("resp-tab-content-active");
		}
		if (hash == '#tab1-2' || hash == '#tab1-2-1' || hash == '#tab1-2-2' || hash == '#tab1-2-3') {
		    $('#tab1-2').addClass("resp-tab-active")
		    $('#tab1-2').addClass("resp-tab-content-active");
		    if (hash == '#tab1-2') {
		        $('#tab1-2-1').show();
		    } else {
		        $(hash).show();
		    }		    
		}

		if (hash == '#tab2-1' || hash == '#tab2-2' || hash == '#tab2-3' || hash == '#tab2-4') {
            $('#tab2-1').hide();
            $('#tab2-2').hide();
            $('#tab2-3').hide();
			$('#tab2-4').hide();
            $(hash).show();
		    $(hash).addClass("resp-tab-content-active");
		}

	});
	
	/* 스크립트 추가 
	$(".tab1 li a").click(function(){
		var _current = $(this).parent().index();
	//	console.log(">>>" + _current);

		$(".tab2 li").removeClass("resp-tab-active");
		$(".tab2 li").eq(_current).addClass("resp-tab-active");
		
	})*/
	
	
	$('.history').hide();
	$('#tab1').show();
	$('.slideBn1 ul li:first').addClass('selected');
	$('.slideBn1 ul li a').click(function(){ 
		$('.slideBn1 ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.history').hide();
		$(currentTab).show();
		return false;
	});
	/*
	$('.showMore a').on('click', function(e){
		$(this).parent().siblings('.showSlide').slideToggle('fast');
		e.preventDefault();
	});
	*/
	
	$('.txtDirector').hide();
	$('#dir1').animate({opacity: "show", top: "235px"}, "slow");
	$('.directors ul li:first').addClass('selected');
	$('.directors ul li a').click(function(){ 
		$('.directors ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.txtDirector').animate({opacity: "hide", top: "225px"}, "fast");
		$(currentTab).animate({opacity: "show", top: "235px"}, "slow");
		return false;
	});

	$('.txtAudit').hide();
	$('#audit2').animate({opacity: "show", top: "235px"}, "slow");	
	$('.audit ul li:first').addClass('selected');
	$('.audit ul li a').click(function(){ 
		$('.audit ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.txtAudit').animate({opacity: "hide", top: "225px"}, "fast");
		$(currentTab).animate({opacity: "show", top: "235px"}, "slow");
		return false;
	});

	
	$('.txtExct').hide();
	$('#exct1').animate({opacity: "show", top: "162px"}, "slow");
	$('.executive ul li:first').addClass('selected');
	$('.executive ul li a').click(function(){ 
		$('.executive ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.txtExct').animate({opacity: "hide", top: "152px"}, "fast");
		$(currentTab).animate({opacity: "show", top: "162px"}, "slow");
		return false;
	});

	$('.txtTechBox1').hide();
	$('#techBox1-1').animate({opacity: "show", top: "205px", height: "184px"}, "fast");
	$('.techBox1Wrap ul li:first').addClass('selected');
	$('.techBox1Wrap ul li a').click(function(){ 
		$('.techBox1Wrap ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.txtTechBox1').animate({opacity: "hide", top: "205px", height: "150px"}, "fast");
		$(currentTab).animate({opacity: "show", top: "205px", height: "184px"}, "fast");
		return false;
	});
	 
/*
	$('.climateCnt').hide();
	$('#tab1-1').show();
	$('.techTab ul li:first').addClass('selected');
	$('.techTab ul li a').click(function(){ 
		$('.techTab ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.climateCnt').hide();
		$(currentTab).show();
		return false;
	}); 
	
	$('.themeCnt').hide();
	$('#tab2-1').show();
	$('.techTab2 ul li:first').addClass('selected');
	$('.techTab2 ul li a').click(function(){ 
		$('.techTab2 ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.themeCnt').hide();
		$(currentTab).show();
		return false;
	});
	*/
	
/*
	$('.location').hide();
	$('#tab1-1').show();
	$('.tab1 ul li:first').addClass('selected');
	$('.tab1 ul li a').click(function(){ 
		$('.tab1 ul li').removeClass('selected');
		$(this).parent().addClass('selected'); 
		var currentTab = $(this).attr('href'); 
		$('.location').hide();
		$(currentTab).show();
		return false;
	}); 
*/
/*
	$('.contents_top_txt p').each(function () {
        $(this).dotdotdot();
    });
*/

	$("a.btn_lnb_ctr").click(function(){
		if($("+div",this).css("display")=="inline-block"){
			$(this).prev('h3').show();
			$("+div",this).slideUp("fast").parent('nav').removeClass('open');
		} else {
			$(this).prev('h3').hide();
			$("+div",this).slideDown("fast").css('display','').parent('nav').addClass('open');
		}
	});

/*
	$(document).on('click','.company .showMore a', function(e){
		$(this).parent().siblings('.showSlide').slideToggle('fast');
		e.preventDefault();
	});
*/

	$(document).on('click','.showMore a', function(e){
		if (!$(this).data("clickStatus")) {
			$(this).data("clickStatus", 1);
				$(this).text('Close').parent().addClass('close');
				$(this).parent().parent().find('.cont').show();
				$(this).parent().prev('dl').show();
				$(this).parent().parent().find('.award_head').hide();
				$(this).parent().parent().parent().parent().find('.detail_contents').show();
				$(this).parent().siblings('.showSlide').show();
				e.preventDefault();
		} else {
			$(this).data("clickStatus", 0);
				$(this).text('Read More').parent().removeClass('close');
				$(this).parent().parent().find('.cont').hide();
				$(this).parent().prev('dl').hide();
				$(this).parent().parent().parent().parent().find('.detail_contents').hide();
				$(this).parent().parent().parent().parent().find('.award_head').show();
				$(this).parent().siblings('.showSlide').hide();
				e.preventDefault();
		}
	});
	$(document).on('click','.readMore a', function(e){
		if (!$(this).data("clickStatus")) {
			$(this).data("clickStatus", 1);
				$(this).parent().parent().parent().parent().find('.readMore a').text('Close');
				$(this).parent().parent().parent().parent().find('.readMore').addClass('close');
				$(this).parent().parent().parent().parent().find('.award_head').hide();
				$(this).parent().parent().parent().parent().find('.detail_contents').slideDown('fast');
				e.preventDefault();
		} else {
			$(this).data("clickStatus", 0);
				$(this).parent().parent().parent().parent().find('.readMore a').text('Read More');
				$(this).parent().parent().parent().parent().find('.readMore').removeClass('close');
				$(this).parent().parent().parent().parent().find('.detail_contents').slideUp('fast');
				$(this).parent().parent().parent().parent().find('.award_head').show();
				e.preventDefault();
		}
	});

	$(document).on('click','.toggle_list2 > ul > li > a', function(e){
		if (!$(this).data("clickStatus")) {
			$(this).data("clickStatus", 1);
				$(this).parent('li').addClass('open');
				$(this).find('em').removeClass().addClass('icon_arr_up');
				$(this).next('.analyst_reports').show();
		} else {
			$(this).data("clickStatus", 0);
				$(this).parent('li').removeClass('open');
				$(this).find('em').removeClass().addClass('icon_arr_down');
				$(this).next('.analyst_reports').hide();
		}
	});

	$('.tab3 > ul > li > a').each(function () {
		$(this).click(function(){ 
			$('.tab3 ul li').removeClass('current');
			$(this).parent().addClass('current'); 
			var currentTab = $(this).attr('href'); 
			$('.tab_cont').hide();
			$(currentTab).show();
			return false;
		}); 
	}); 

	$('.media_area.news .contents_top_txt p').each(function () {
		$(this).dotdotdot({
			after: 'a.read_more',   
			watch  : true, 
			height  : 50, 
			tolerance: 20 
		});
	});
	$('.news_list_txt > p').each(function () {
		$(this).dotdotdot({
			after: 'a.read_more',
			watch  : true
		});
	});
	$('.actList ul li a span').each(function () {
		$(this).dotdotdot({
			watch  : true
		});
	});

	$('.careersMsg .btn_close').click(function(){
		$('.careersMsg').hide();
	});

	

});

function btnReadMore(n) {
	var moreCnt = ".moreCnt"+n;
	$(moreCnt).toggleClass("readMore");
	$(moreCnt).next('.readMore2').toggleClass('close');
}




function flexSlider() {
 $(".flexslider").each(function () {
	 $(this).flexslider({
		 animationLoop: true,
		 animation: "slide",
		 slideshow: true,
		 directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
		 controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		 keyboardNav: true,
		 pausePlay: true,               //Boolean: Create pause/play dynamic element
		 pauseText: 'Pause',
		 start: function (slider) {
			 var f_h = $(slider).find('.flex-active-slide').height();
			 $(slider).find(".flex-viewport").css('height', f_h);
			 $('.main_banner').css('height', f_h + 10);
		 },
		 after: function (slider) {
			 var f_h = $(slider).find('.flex-active-slide').height();
			 $(slider).find(".flex-viewport").css('height', f_h);
			 $('.main_banner').css('height', f_h + 10);
		 }
	 });
 });
}
