// Transition 2
window.onload = () => {
    // Получение элементов нажатия
    const but3 = document.getElementById("away");

    // Получение ссылок
    const anchor3 = document.getElementById("get_hrefInAbout");
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 600);

    but3.addEventListener('click', e => {
        e.preventDefault();
        console.log(anchor3.href)

        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor3.href;
        }, 400);
        console.log(anchor3.href)
    })
}

// Slider engine
$(document).ready(function(){
    $('.my_slider').slick({
      arrow:true,
      dots: false,
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease',
      autoplay: false,
      autoplaySpeed: 700,
      touchThreshold: 30,
      waitForAnimate: false,
      centerMode:true,
      infinite: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            arrow:true,
            dots: false,
            adaptiveHeight:true,
            slidesToScroll: 1,
            autoplay: false,
            touchThreshold: 10,
            waitForAnimate: false,
            centerMode:true,
            infinite: false,
            initialSlide: 0
            
        }}
    ]
    });
    $('.slider_for_pr').slick({
      arrow:true,
      dots: false,
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      autoplay: false,
      autoplaySpeed: 800,
      touchThreshold: 30,
      waitForAnimate: false,
      centerMode:true,
      infinite: false,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            arrow:true,
            dots: false,
            adaptiveHeight:true,
            slidesToScroll: 1,
            autoplay: false,
            touchThreshold: 10,
            waitForAnimate: false,
            centerMode:true,
            infinite: false,
            initialSlide: 1
            
        }}
        ]
      
    });
  });
  
// Popups engine and anhors
document.addEventListener("DOMContentLoaded", () => {
    const popupLinks = document.querySelectorAll('.popup-link');

    //Popups eng func-----------------------------------------------------------
    if(popupLinks.length > 0){
        for(let index = 0; index < popupLinks.length; index++){
            const popupLink = popupLinks[index];
            popupLink.addEventListener("click", function(e){
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup,popupName);
                $('html, body').css({
                    overflow: 'hidden' 
                });
                e.preventDefault();
            });
        }
    }
    // ---------------------------------------------------------------------------

    // Anchors -------------------------------------------------------------------
    const anchors = document.querySelectorAll('.nav-link');

    if(anchors.length > 0){
        for(let index = 0; index < anchors.length; index++){
            const anchor = anchors[index];
            anchor.addEventListener("click", function(e){
                const hrefName = anchor.getAttribute('href').replace('#', '');
                const curentHref = document.getElementById(hrefName);
                handleButtonClick(curentHref);
                e.preventDefault();
            });
        }
    }    
    

    function handleButtonClick(hiddenElement) {
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    // ----------------------------------------------------------------------------
    
    // Popap func------------------------------------------------------------------
    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if(popupCloseIcon.length > 0){
        for(let index = 0; index<popupCloseIcon.length; index++){
            const el = popupCloseIcon[index];
            el.addEventListener('click', function(e){
                popupClose(el.closest('.popup'));
                document.getElementById('main_pr').scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
                $('html, body').css({
                    overflow: 'auto'
                });
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup,popupName){
        const navHid = document.getElementById('men');
        const contHid = document.getElementById('contact');
        if(curentPopup){
            curentPopup.classList.add('open');
            if(popupName == 'popup_ph'){
                $('.my_slider').slick('refresh');
                $("html, body").animate({
                    scrollTop: $('#popup_ph').offset().top
                });
            } else if(popupName == 'proga'){
                $('.slider_for_pr').slick('refresh');
                $("html, body").animate({
                    scrollTop: $('#proga').offset().top
                });
            } else if(popupName == 'video'){
                $("html, body").animate({
                    scrollTop: $('#video').offset().top
                });
            }
            window.setTimeout(function() {
                navHid.classList.add('close');
                contHid.classList.add('_close');
              }, 100);
        }
    }

    function popupClose(popupActive){
        const navHid = document.getElementById('men');
        const contHid = document.getElementById('contact');
        window.setTimeout(function() {
            navHid.classList.remove('close');
            contHid.classList.remove('_close');
            popupActive.classList.remove('open');
          }, 600);
    }
    //----------------------------------------------------------------------------
});

// Video slider engine
function videoUrl(x){
  document.getElementById('slider_video').src = x;
};
function videoUrl2(y){
    document.getElementById('slider_video2').src = y;
};

// Video func
const playBtn = document.getElementById('vid_play');
const pauseBtn = document.getElementById('vid2');
const videoEl = document.getElementById('slider_video');


playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
    }
}, false);

pauseBtn.addEventListener('click', function () {
    videoEl.pause();
}, false);

