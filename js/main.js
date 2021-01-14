$(document).ready(function(){
    
    $('#loading').fadeOut(1000,function(){
        $('body').css('overflow','visible')
    })
    
})
$(window).scroll(function(){
    
    if($(window).scrollTop() > 600){
        $('#Top').css('display','flex')
        $('.navbar').addClass('navMove')
    }else{
        $('.navbar').removeClass('navMove')
        $('#Top').css('display','none')
    }
})

$('#Top').click(function(){
    console.log($('html,body'))
    $('html,body').animate({scrollTop:0},2000)
})

$(".nav-link").click(function(){
    let targetElementId=$(this).attr("href")
    let targetElementDistanceToTop=$(targetElementId).offset().top
    $('html,body').animate({ scrollTop:targetElementDistanceToTop },1000)
})