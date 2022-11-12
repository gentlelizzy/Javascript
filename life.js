let slideposition=0;
const slides=document.getElementsByClassName('carousel_item');
const totalslides=slides.length;
 
document.
getElementById('carousel_button--prev')
.addEventListener("click", function(){moveToPrevSlide();
});

document.
getElementById('carousel_button--next')
.addEventListener("click", function(){moveToNextSlide();
});

function updateslideposition(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slideposition].classList.add('carousel_item--visible');
}

function moveToNextSlide(){

    if (slideposition==totalslides-1)
    {slideposition=0;
    }else{
        slideposition++;
    }
     updateslideposition();
}

function moveToPrevSlide(){
    if(slideposition==0){
        slideposition=totalslides-1;
    }else{
        slideposition--;
    }
    updateslideposition()
}