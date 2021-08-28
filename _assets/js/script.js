//ハンバーガーメニュー

$(function () {
    $(".js-hamburger_btn").click(function () {
        $('.js-hamburger_btn').toggleClass('active')
        $('.js-hamburger').toggleClass('active')
        $('.js-hamburger_btn_text').toggleClass('active')
    });
});

$(function () {
    $(".js-hamburger_list_link").click(function () {
        $('.js-hamburger_btn').toggleClass('active')
        $('.js-hamburger').removeClass('active')
        $('.js-hamburger_btn_text').removeClass('active')
        $('.js-hamburger_link').removeClass('active')
    });
});


//スムーススクロール

$(function(){
    $('a[href^="#"]').click(function(){
        var header = $(".l-header").innerHeight();  //headerの高さを定義
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);　
//headerの高さを引く
        var position = target.offset().top - header;  
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
