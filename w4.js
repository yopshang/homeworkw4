$(document).ready(function(){
    $('.optionsTitle').css('border-color',"#fff")
    $('.optionsTitle').mouseover(function(){
        $(this).css('border-color',"#aa0601")
    });
    $('.optionsTitle').mouseout(function(){
        $(this).css('border-color',"#fff")
    });
    $('.pageBtn').mouseover(function(){
        $(this).css('border','1px solid #000')
    });
    $('.pageBtn').mouseout(function(){
        $(this).css('border','1px solid gray')
    });
    $('.directionBtn').mouseover(function(){
        $(this).css('border','1px solid #000')
    });
    $('.directionBtn').mouseout(function(){
        $(this).css('border','1px solid gray')
    });
    $('.pageBtn').click(function(){
        $('.pageBtnact').toggleClass('pageBtnact')
        $(this).toggleClass('pageBtnact')
    })
});
