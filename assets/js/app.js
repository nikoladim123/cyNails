//window onscroll
window.onscroll = function(){
  stickyMenuFunc();
};

//sticky menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
var stickySocialMedia = document.getElementById('stickySocialMedia');
var stickySwitch = 0;
function stickyMenuFunc(){
  if(this.oldScroll > this.scrollY && window.scrollY > 1 && stickySwitch===0){
    if(window.innerWidth > window.innerHeight){
        stickyMenu.style.height = '3.427vw';
        stickySocialMedia.style.top = '0.893vw'
    }else{
      stickyMenu.style.height = '17vw';
    }
  }
  else {
    stickyMenu.style.height = '0vw';
    stickySocialMedia.style.top = '-10vw'
  }
  this.oldScroll = this.scrollY;
}

// car bridal
// car bridal
// car bridal
var bridalImage = document.getElementsByClassName('bridal');
var bridalImageModulo = 0;
var bridalHugeFont = document.getElementsByClassName('bridalHugeFont')[0];
setInterval(function(){
  bridalImageModulo++;
  if(bridalImageModulo%4 === 3){
    bridalHugeFont.style.opacity = 0;
    setTimeout(function(){
      bridalHugeFont.innerHTML = 'SKINCARE';
      bridalHugeFont.style.opacity = 1;
    },500)

    bridalImage[0].style.opacity = '1'
    bridalImage[1].style.opacity ='0';
    bridalImage[2].style.opacity ='0';
    bridalImage[3].style.opacity ='0';
    console.log(bridalImageModulo%4 + " i am 0");
  }
  if(bridalImageModulo%4 === 1){
    bridalHugeFont.style.opacity = 0;
    setTimeout(function(){
      bridalHugeFont.innerHTML = 'MANICURE';
      bridalHugeFont.style.opacity = 1;
    },500)

    bridalImage[1].style.opacity ='1';
    bridalImage[0].style.opacity ='0';
    bridalImage[2].style.opacity ='0';
    bridalImage[3].style.opacity ='0';
    console.log(bridalImageModulo%4 + " i am 1");
  }
  if(bridalImageModulo%4 === 2){
    bridalHugeFont.style.opacity = 0;
    setTimeout(function(){
      bridalHugeFont.innerHTML = 'PEDICURE';
      bridalHugeFont.style.opacity = 1;
    },500)

    bridalImage[2].style.opacity ='1';
    bridalImage[0].style.opacity ='0';
    bridalImage[1].style.opacity ='0';
    bridalImage[3].style.opacity ='0';
    console.log(bridalImageModulo%4 + " i am 2");
  }
  if(bridalImageModulo%4 === 0){
    bridalHugeFont.style.opacity = 0;
    setTimeout(function(){
      bridalHugeFont.innerHTML = 'BRIDAL';
      bridalHugeFont.style.opacity = 1;
    },500)

    bridalImage[3].style.opacity ='1';
    bridalImage[0].style.opacity ='0';
    bridalImage[1].style.opacity ='0';
    bridalImage[2].style.opacity ='0';
    console.log(bridalImageModulo%4 + " i am 3");
  }
},3500);

// wht we sell 3pic hover anim
// wht we sell 3pic hover anim
// wht we sell 3pic hover anim
var whatWeDoOne = document.getElementsByClassName('whatWeDoOne')[0];
var whatWeDoTextBox = document.getElementsByClassName('whatWeDoTextBox');

whatWeDoOne.addEventListener('mouseenter',function(){
  whatWeDoTextBox[0].style.top = '0%';
})
whatWeDoOne.addEventListener('mouseleave',function(){
  whatWeDoTextBox[0].style.top = '90%';
})
//carousel one
//carousel one
//carousel one
var carouselOne = document.getElementById('carouselOne');
var carOneLeftCarArrowBox = document.getElementById('carOneLeftCarArrowBox');
var carOneRightCarArrowBox = document.getElementById('carOneRightCarArrowBox');
carOneLeftCarArrowBox.addEventListener('click',function(){
  if(window.innerWidth>window.innerHeight){
    leftArrow();
  }
  if(window.innerWidth<window.innerHeight){
    leftArrowCarOneMobile();
  }
  console.log('do i work?');
});

carOneRightCarArrowBox.addEventListener('click',function(){
  if(window.innerWidth>window.innerHeight){
    rightArrow();
  }
  if(window.innerWidth<window.innerHeight){
    rightArrowCarOneMobile()
  }
  console.log('do i work?');
});
/*car function for desktop*/
var modulo = 1002;
function leftArrow(){
  modulo--;
  carMove();
}
function rightArrow(){
  modulo++;
  carMove();
}
function carMove(){
  if(modulo%3 === 0){
    carouselOne.style.left = '0%'
  }
  if(modulo%3 === 1){
    carouselOne.style.left = '-20%'
  }
  if(modulo%3 === 2){
    carouselOne.style.left = '-40%'
  }
}
/*car function for desktop end*/
/*car one fun for mobile*/
var mobileCarOneDiv = document.getElementsByClassName('mobileCarOneDiv');
var dotsCarOne = document.getElementsByClassName('dotsCarOne');
var carOneMobileModulo = 1000;

function leftArrowCarOneMobile(){
  carOneMobileModulo--;
  for (var i = 0; i < mobileCarOneDiv.length-2; i++) {
    mobileCarOneDiv[i].style.opacity ='0';
    dotsCarOne[i].style.backgroundColor = 'white';
    dotsCarOne[i].style.width = '3.5vw';
    dotsCarOne[i].style.height = '3.5vw';
}
  setTimeout(function(){
    for (var i = 0; i < mobileCarOneDiv.length-2; i++) {
      mobileCarOneDiv[i].style.display ='none';
    }
    mobileCarOneDiv[carOneMobileModulo%5].style.display ='block';
    mobileCarOneDiv[carOneMobileModulo%5].style.opacity ='0';
      setTimeout(function(){
        mobileCarOneDiv[carOneMobileModulo%5].style.opacity ='1';
      },100);
  },200);

  dotsCarOne[carOneMobileModulo%5].style.backgroundColor = 'rgb(240,212,199)';
  dotsCarOne[carOneMobileModulo%5].style.width = '4.5vw';
  dotsCarOne[carOneMobileModulo%5].style.height = '4.5vw';
}

function rightArrowCarOneMobile(){
  carOneMobileModulo++;
  for (var i = 0; i < mobileCarOneDiv.length-2; i++) {
    mobileCarOneDiv[i].style.opacity ='0';
    dotsCarOne[i].style.backgroundColor = 'white';
    dotsCarOne[i].style.width = '3.5vw';
    dotsCarOne[i].style.height = '3.5vw';
}
  setTimeout(function(){
    for (var i = 0; i < mobileCarOneDiv.length-2; i++) {
      mobileCarOneDiv[i].style.display ='none';
    }
    mobileCarOneDiv[carOneMobileModulo%5].style.display ='block';
    mobileCarOneDiv[carOneMobileModulo%5].style.opacity ='0';
      setTimeout(function(){
        mobileCarOneDiv[carOneMobileModulo%5].style.opacity ='1';
      },100);
  },200);

  dotsCarOne[carOneMobileModulo%5].style.backgroundColor = 'rgb(240,212,199)';
  dotsCarOne[carOneMobileModulo%5].style.width = '4.5vw';
  dotsCarOne[carOneMobileModulo%5].style.height = '4.5vw';
}
/*car one fun for mobile end*/
// carousel two
// carousel two
// carousel two
var carouselTwo = document.getElementById('carouselTwo');
var carTwoLeftCarArrowBox = document.getElementById('carTwoLeftCarArrowBox');
var carTwoRightCarArrowBox = document.getElementById('carTwoRightCarArrowBox');
carTwoLeftCarArrowBox.addEventListener('click',function(){
  if(window.innerWidth>window.innerHeight){
    leftArrowTwo();
  }
  if(window.innerWidth<window.innerHeight){
    leftArrowCarTwoMobile();
  }

  console.log('what car am i');
});

carTwoRightCarArrowBox.addEventListener('click',function(){
  if(window.innerWidth>window.innerHeight){
    rightArrowTwo();
  }
  if(window.innerWidth<window.innerHeight){
    rightArrowCarTwoMobile();
  }

  console.log('do i work?');
});
/*car two desktop*/
var moduloTwo = 1002;
function leftArrowTwo(){
  moduloTwo--;
  carMoveTwo();
}
function rightArrowTwo(){
  moduloTwo++;
  carMoveTwo();
}
function carMoveTwo(){
  if(moduloTwo%3 === 0){
    carouselTwo.style.left = '0%'
  }
  if(moduloTwo%3 === 1){
    carouselTwo.style.left = '-20%'
  }
  if(moduloTwo%3 === 2){
    carouselTwo.style.left = '-40%'
  }
}
/*car two desktop*/
/*car two fun for mobile*/
var mobileCarTwoDiv = document.getElementsByClassName('mobileCarTwoDiv');
var dotsCarTwo = document.getElementsByClassName('dotsCarTwo');
var carTwoMobileModulo = 1000;

function leftArrowCarTwoMobile(){
  carTwoMobileModulo--;
  for (var i = 0; i < mobileCarTwoDiv.length-2; i++) {
    mobileCarTwoDiv[i].style.opacity ='0';
    dotsCarTwo[i].style.backgroundColor = 'white';
    dotsCarTwo[i].style.width = '3.5vw';
    dotsCarTwo[i].style.height = '3.5vw';
  }
  setTimeout(function(){
    for (var i = 0; i < mobileCarTwoDiv.length-2; i++) {
      mobileCarTwoDiv[i].style.display ='none';
    }
    mobileCarTwoDiv[carTwoMobileModulo%5].style.display ='block';
    mobileCarTwoDiv[carTwoMobileModulo%5].style.opacity ='0';

      setTimeout(function(){
        mobileCarTwoDiv[carTwoMobileModulo%5].style.opacity ='1';
      },100);
  },200);
  // mobileCarTwoDiv[carTwoMobileModulo%5].style.display ='block';
  dotsCarTwo[carTwoMobileModulo%5].style.backgroundColor = 'rgb(240,212,199)';
  dotsCarTwo[carTwoMobileModulo%5].style.width = '4.5vw';
  dotsCarTwo[carTwoMobileModulo%5].style.height = '4.5vw';
}

function rightArrowCarTwoMobile(){
  carTwoMobileModulo++;
  for (var i = 0; i < mobileCarTwoDiv.length-2; i++) {
    mobileCarTwoDiv[i].style.opacity ='0';
    dotsCarTwo[i].style.backgroundColor = 'white';
    dotsCarTwo[i].style.width = '3.5vw';
    dotsCarTwo[i].style.height = '3.5vw';
  }
  setTimeout(function(){
    for (var i = 0; i < mobileCarTwoDiv.length-2; i++) {
      mobileCarTwoDiv[i].style.display ='none';
    }
    mobileCarTwoDiv[carTwoMobileModulo%5].style.display ='block';
    mobileCarTwoDiv[carTwoMobileModulo%5].style.opacity ='0';

      setTimeout(function(){
        mobileCarTwoDiv[carTwoMobileModulo%5].style.opacity ='1';
      },100);
  },200);
  // mobileCarTwoDiv[carTwoMobileModulo%5].style.display ='block';
  dotsCarTwo[carTwoMobileModulo%5].style.backgroundColor = 'rgb(240,212,199)';
  dotsCarTwo[carTwoMobileModulo%5].style.width = '4.5vw';
  dotsCarTwo[carTwoMobileModulo%5].style.height = '4.5vw';
}


/*car two fun for mobile end*/
// carousel three
// carousel three
// carousel three
var carouselThree = document.getElementById('carouselThree');
var carThreeLeftArrow = document.getElementById('carThreeLeftArrow');
var carThreeRightArrow = document.getElementById('carThreeRightArrow');
carThreeLeftArrow.addEventListener('click',function(){
  leftArrowThree();
  console.log('do i work?');
});
carThreeRightArrow.addEventListener('click',function(){
  rightArrowThree();
  console.log('do i work?');
});
var moduloThree = 1002;
function leftArrowThree(){
  moduloThree--;
  carMoveThree();
}
function rightArrowThree(){
  moduloThree++;
  carMoveThree();
}
function carMoveThree(){
  if(moduloThree%2 === 0){
    carouselThree.style.left = '0%'
  }
  if(moduloThree%2 === 1){
    carouselThree.style.left = '-50%'
  }
}
// MOBILE CAROUSEL from grid box
var mobileLeftArrow = document.getElementsByClassName('mobileLeftArrow')[0];
var mobileRightArrow = document.getElementsByClassName('mobileRightArrow')[0];
var gridPicturesJS = document.getElementsByClassName('gridPicturesJS');
var dots = document.getElementsByClassName('dots');
var mobileCarModulo = 71;

mobileLeftArrow.addEventListener('click',function(){
  mobileCarModulo--;
  for (var i = 0; i < gridPicturesJS.length ; i++) {
    gridPicturesJS[i].style.opacity = '0';
    dots[i].style.backgroundColor = 'white';
    dots[i].style.width = '3.5vw';
    dots[i].style.height = '3.5vw';
  }

  setTimeout(function(){
    for (var i = 0; i < gridPicturesJS.length-2; i++) {
      gridPicturesJS[i].style.display ='none';
    }
    gridPicturesJS[mobileCarModulo%5].style.display ='block';
    gridPicturesJS[mobileCarModulo%5].style.opacity ='0';

      setTimeout(function(){
        gridPicturesJS[mobileCarModulo%5].style.opacity ='1';
      },100);
  },200);

  gridPicturesJS[mobileCarModulo%6].style.display = 'block';
  dots[mobileCarModulo%6].style.backgroundColor = 'rgb(240,212,199)';
  dots[mobileCarModulo%6].style.width = '4.5vw';
  dots[mobileCarModulo%6].style.height = '4.5vw';
  console.log(mobileCarModulo%7);
})

mobileRightArrow.addEventListener('click',function(){
  mobileCarModulo++;
  for (var i = 0; i < gridPicturesJS.length ; i++) {
    gridPicturesJS[i].style.opacity = '0';
    dots[i].style.backgroundColor = 'white';
    dots[i].style.width = '3.5vw';
    dots[i].style.height = '3.5vw';
  }

  setTimeout(function(){
    for (var i = 0; i < gridPicturesJS.length-2; i++) {
      gridPicturesJS[i].style.display ='none';
    }
    gridPicturesJS[mobileCarModulo%5].style.display ='block';
    gridPicturesJS[mobileCarModulo%5].style.opacity ='0';

      setTimeout(function(){
        gridPicturesJS[mobileCarModulo%5].style.opacity ='1';
      },100);
  },200);

  gridPicturesJS[mobileCarModulo%6].style.display = 'block';
  dots[mobileCarModulo%5].style.backgroundColor = 'rgb(240,212,199)';
  dots[mobileCarModulo%5].style.width = '4.5vw';
  dots[mobileCarModulo%5].style.height = '4.5vw';
  console.log(mobileCarModulo%7);
})
