$(document).ready( function(){
    /* ///////////////////////////////////////// home section /////////////////////////////////////////  */
    // make fixed navbar when you scroll top 
    $(window).scroll(function(){
        if( $(window).scrollTop() >= 50 )
        {
            $("#navbarId").css({"position":"fixed" , "backgroundColor":"rgb(0,0,0)"});
        }
        else
        {
            $("#navbarId").css({"backgroundColor":"transparent"});
            $("#headerContainerId").css({"margin":"180px 0"});
        }
    });
    /* --------------------------- navbar secion --------------------------- */
    $(".home    .navbar     .links      a").click(function(){
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("value")).offset().top 
        } , 3500 );
    });   
    $(".footer2    .footer2RightPart    a").click(function(){
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("value")).offset().top 
        } , 3500 );
    });   
    /* ------------------------------ when click on menubar icon , navbar links will appear ---------------------- */
    $("#menubarLabelId").click( function()
    {
        $("#linksId").slideToggle(500);
        $(".navbar").css("backgroundColor","#000");
    });
    /* ///////////////////////////////////////// folio section ///////////////////////////////////////// */
    // when click on "firstAuthor" button , show "first paragraph" and hide "second paragraph"
    $("#firstAuthorId").click( function(){
        $(".folioPara1").css("display","block");
        $(".folioPara2").css("display","none");
    });
    // when click on "secondAuthor" button , show "second paragraph" and hide "first paragraph"
    $("#secondAuthorId").click( function(){
        $(".folioPara1").css("display","none");
        $(".folioPara2").css("display","block");
    });
    /* ///////////////////////////////////////// solutions section ///////////////////////////////////////// */
   // ****************** solutions : right part ****************** 
    // when click on first H3
    $(".accordinFirstH3").click( function(){
       $(".accordinPara1").slideToggle(500,function(){
              $(".accordinPara2").slideUp();
              $(".accordinPara3").slideUp();
       }); 
    });
    // when click on second H3
    $(".accordinSecondH3").click( function(){
       $(".accordinPara2").slideToggle(500,function(){
              $(".accordinPara1").slideUp();
              $(".accordinPara3").slideUp();
       }); 
    });
    // when click on third H3
    $(".accordinThirdH3").click( function(){
       $(".accordinPara3").slideToggle(500,function(){
              $(".accordinPara1").slideUp();
              $(".accordinPara2").slideUp();
       }); 
    });
    // ------------------------- javascript code : counter --------------------------
    var counterEl = document.getElementById("counterId"),
        viewsNumEl = document.getElementById("viewsId") ,
        counterVar = setInterval( countFunc , 15)       ,
        viewsNumVar = setInterval( viewsNumFunc , 5)    ,
        downloadsNum=0  ,
        viewsNum =0 ;
        // ####### downloads counter #######
        function countFunc()
        {
           if( downloadsNum <= 400 )
            {
                counterEl.innerHTML= downloadsNum + "k";   
            }
            downloadsNum++ ;
        }
         // ####### viewsNum counter #######
        function viewsNumFunc()
        {
           if( viewsNum <= 1500 )
            {
                viewsNumEl.innerHTML= viewsNum ;   
            }
            viewsNum++ ;
        }
        // solutions : right part ==> right part : visitors && notifications 
        var visitorsEl = document.getElementById("visitorsId"),
            notificationsEl = document.getElementById("notificationsId");
        var visitorsVar = setInterval( visitorsFunc , 15); 
        var notificationsVar = setInterval( notificationsFunc , 5); 
        var visitorsNum=0 ,
            notificationsNum =0 ;
        // ####### visitors counter #######
        function visitorsFunc()
        {
           if( visitorsNum <= 350 )
            {
                visitorsEl.innerHTML= visitorsNum + "+";   
            }
            visitorsNum++ ;
        }
         // ####### notifications counter #######
        function notificationsFunc()
        {
           if( notificationsVar <= 800 )
            {
                notificationsEl.innerHTML= notificationsVar + "k" ;   
            }
            notificationsVar++ ;
        }
    /* -------------------------------------- mixlitUp plugin ------------------------- */
   $(".recentWorkGallery").mixItUp();
    /* ----------------------------------- niceScroll library ------------------------- */
//  $("document").ready(function(){
	/*  <html></html> ???????? ???????? ???? scroll ???????? ?????? ???? */
	/* ######### Trigger Nice scroll plugin ######### */
//	$("body").niceScroll({
//        /* scroll ???????? ???? cursor ???????? ?????? ???? */
//        cursorcolor: "#555"     ,
//        /* scroll ???????? ???? cursor ???????? ?????????? ???????? ???? */
//        cursorwidth: 10            ,
//        /* scroll ???????? ???? border ???????? ???? */
//        cursorborder: "1px solid #fff " 
//    });
	/*  window ???????? ???? height ???????? ?????? ???? header section ???????? ????   */
	/* ######### change the window height ######### */
	$(".header").height( $(window).height() );
	// when click on "down arrow" of header section , go to features section
	$('.header	.arrow	 i').click(function(){
		$("html , body").animate({
			//   top ???? ?????????? ???? document  ?????? .features ???????? ???????????? ???????????? ?????????????? ?????? ???????????? ???????? ???????? ???????? top ???? ?????????????? ?????? ???????????? ?????? scrollTop ????
			//   top ???? ?????????? ???? document ?? ???? .features ???????? ???????????? ???????? ?????????? ?????????? ?????????????? ?????? ???????????? ???????? ???????? ????????  arrow ???????? ?????? ???????? ?????? ????
			scrollTop : $(".features").offset().top 
		} , 1000 );
	});
    /* ///////////////////////////////////////// footer section ///////////////////////////////////////// */
    var firstNameEl = document.getElementById("firstNameId") ,
        emailEl = document.getElementById("emailId") ;
    /* ------------------- firstName inputField ------------------- */
    firstNameEl.onfocus =  function()
    {
        if( firstNameEl.placeholder!==" " )
        {
            firstNameEl.placeholder=" " ;
        }
    }
    firstNameEl.onblur =  function()
    {
        if( firstNameEl.placeholder==" " )
        {
            firstNameEl.placeholder=" first name " ;
        }
    };
    /* ------------------- email inputField ------------------- */
    emailEl.onfocus =  function()
    {
        if( emailEl.placeholder!==" " )
        {
            emailEl.placeholder=" " ;
        }
    }
    emailEl.onblur =  function()
    {
        if( emailEl.placeholder==" " )
        {
            emailEl.placeholder=" email " ;
        }
    };
});

              