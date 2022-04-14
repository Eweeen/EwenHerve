/* ==================================================
   ===================== LOADER =====================
   ================================================== */ 

$(window).on('load', () => {$('.loader').addClass("loaded");});

/* ==================================================
   ====================== NAV =======================
   ================================================== */ 
function navbar_bg(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.navbar').css('background-color', '#1D1D22');
        $('.navbar').css('box-shadow', '0px 10px 15px -10px #343439');
    } else {
        $('.navbar').css('background-color', 'transparent');
        $('.navbar').css('box-shadow', 'none');
    }
}

$(window).on('load', () => {navbar_bg();});
$(window).on('scroll', () => {navbar_bg();});

$('#btn-nav-hamburger').on('click', () => {
    $('.hamburger_bar').toggleClass('active_btn_hamburger');
    $('.nav_container').toggleClass('active_nav');
});

/* ==================================================
   ====================== NAV =======================
   ================================================== */ 

const home = $('#Accueil');
const bts = $('#BTS');
const about = $('#About');
const projets = $('#Projets');
const contact = $('#Contact');

const navbar = $('.navbar');

$('.link-home').on('click', function () {$(window).scrollTop(home.offset().top - navbar.innerHeight());});
$('.link-bts').on('click', function () {$(window).scrollTop(bts.offset().top - (navbar.innerHeight() / 2));});
$('.link-about').on('click', function () {$(window).scrollTop(about.offset().top - (navbar.innerHeight() / 2));});
$('.link-projets').on('click', function () {$(window).scrollTop(projets.offset().top - (navbar.innerHeight() * 1.5));});
$('.link-contact').on('click', function () {$(window).scrollTop(contact.offset().top - (navbar.innerHeight() / 2));});


function navigation(){
    if (home.offset().top <= $(window).scrollTop() && $(window).scrollTop() < home.innerHeight()){
        $('.link-home').addClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-projets').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (bts.offset().top - (navbar.innerHeight() / 2) - 1 <= $(window).scrollTop() && $(window).scrollTop() < (bts.offset().top + bts.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').addClass('active');
        $('.link-about').removeClass('active');
        $('.link-projets').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (about.offset().top - (navbar.innerHeight() / 2) - 1 <= $(window).scrollTop() && $(window).scrollTop() < (about.offset().top + about.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').addClass('active');
        $('.link-projets').removeClass('active');
        $('.link-contact').removeClass('active');
    }
    if (projets.offset().top - (navbar.innerHeight() * 1.5) - 1 <= $(window).scrollTop() && $(window).scrollTop() < (projets.offset().top + projets.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-projets').addClass('active');
        $('.link-contact').removeClass('active');
    }
    if (contact.offset().top <= $(window).scrollTop() && $(window).scrollTop() < (contact.offset().top + contact.innerHeight())){
        $('.link-home').removeClass('active');
        $('.link-bts').removeClass('active');
        $('.link-about').removeClass('active');
        $('.link-projets').removeClass('active');
        $('.link-contact').addClass('active');
    }
}

$(window).on('load', function(){navigation();});
$(window).on('scroll', function(){navigation();});

/* ==================================================
   ===================== SLIDE ======================
   ================================================== */ 

$('#slide_slam').on('click', () => {
    $('.options.sisr').css("transform", "translateX(-110%)");
    $('.options.slam').css("transform", "translateX(0)");
});

$('#slide_sisr').on('click', () => {
    $('.options.sisr').css("transform", "translateX(0)");
    $('.options.slam').css("transform", "translateX(110%)");
});

/* ==================================================
   ===================== MODALE =====================
   ================================================== */ 

const buttonModales = $('.open_modale');

buttonModales.each((e) => {
    buttonModales[e].addEventListener('click', (response) => {
        const modales = $('#Modales').children();

        modales.each((i) => { 
            if (modales[i].classList.contains(response.target.parentNode.classList[1])){
                document.querySelector('#Modales').classList.add('active');
                modales[i].classList.add('active');
            }
        });

    });
});

const buttonClose = $('.fa-xmark');

buttonClose.each((e) => {
    buttonClose[e].addEventListener('click', () => {
        const modales = $('#Modales').children();

        modales.each(() => { 
            document.querySelector('#Modales').classList.remove('active');
            modales[e].classList.remove('active');
        });
    });
});

$('#Modales').on('click', () => {
    const modales = $('#Modales').children();

    modales.each((e) => {
        document.querySelector('#Modales').classList.remove('active');
        modales[e].classList.remove('active');
    });
});