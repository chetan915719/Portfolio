$(document).ready(function () {
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


    
});

function openLinkedin(){
    window.open("https://www.linkedin.com/in/chetan-tiwari-5055233/");
}

function openPDF(){
    window.open("https://drive.google.com/open?id=1R8cErGRyBrCmiQHmTBX6eG-KljJiEzyd")
}

function downloadPDF(){
    window.open("../Resume.pdf")
}