$('.icon-menu').on('click', function () {
    $('.menu').toggleClass('active');
    $('.icon-menu').toggleClass('menu-anim');
});

$('.menu-content li').on('click', function () {
    $('.menu').toggleClass('active');
    $('.icon-menu').toggleClass('menu-anim');
});

const home = $('#Accueil');
const bts = $('#BTS');
const about = $('#about');
const skills = $('#skills');
const stages = $('#stages');
const portfolio = $('#portfolio');
const contact = $('#contact');

$('.link-home').on('click', function () {$(window).scrollTop(home.offset().top)});
$('.link-bts').on('click', function () {$(window).scrollTop(bts.offset().top + 1)});
$('.link-about').on('click', function () {$(window).scrollTop(about.offset().top + 1)});
$('.link-skills').on('click', function () {$(window).scrollTop(skills.offset().top + 1)});
$('.link-stages').on('click', function () {$(window).scrollTop(stages.offset().top + 1)});
$('.link-portfolio').on('click', function () {$(window).scrollTop(portfolio.offset().top + 1)});
$('.link-contact').on('click', function () {$(window).scrollTop(contact.offset().top + 1)});

function navigation(){
    if (home.offset().top < $(window).scrollTop() && $(window).scrollTop() < home.innerHeight()){
        $('.link-home').addClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (bts.offset().top < $(window).scrollTop() && $(window).scrollTop() < (bts.offset().top + bts.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').addClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (about.offset().top < $(window).scrollTop() && $(window).scrollTop() < (about.offset().top + about.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').addClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (skills.offset().top < $(window).scrollTop() && $(window).scrollTop() < (skills.offset().top + skills.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').addClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (stages.offset().top < $(window).scrollTop() && $(window).scrollTop() < (stages.offset().top + stages.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').addClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (portfolio.offset().top < $(window).scrollTop() && $(window).scrollTop() < (portfolio.offset().top + portfolio.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').addClass('active');
        $('.link-contact').removeClass('active');
    }
    if (contact.offset().top < $(window).scrollTop() && $(window).scrollTop() < (contact.offset().top + contact.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-skills').removeClass('active');
        $('.link-stages').removeClass('active');
        $('.link-portfolio').removeClass('active');
        $('.link-contact').addClass('active');
    }
}

$(window).on('scroll', function () {
    navigation();
});