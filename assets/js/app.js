//window onscroll
window.onscroll = function(){
  stickyMenuFunc();
};

window.onload = function(){
  crayonAnim();
}

// crayon animation
// crayon animation
// crayon animation
var crayon = document.getElementsByClassName('crayon')[0];
var crayonShadow = document.getElementsByClassName('crayonShadow')[0];
var eyeBrush = document.getElementsByClassName('eyeBrush')[0];
var crayonShadow = document.getElementsByClassName('crayonShadow')[0];
var smoke = document.getElementsByClassName('smoke')[0];
function crayonAnim(){
  crayon.style.bottom = '-0.14vw';
  crayonShadow.style.bottom = '-17.59vw';
  crayonShadow.style.opacity = '1';
  smoke.style.opacity = '1';
  smoke.style.left = '-18.5vw';
  smoke.style.width = '51vw';
  smoke.style.height = '65vw';
  smoke.style.bottom = "-13.5vw";
};

//sticky menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
var stickyBackgroundLayer = document.getElementsByClassName('stickyBackgroundLayer')[0];

var stickySwitch = 0;
function stickyMenuFunc(){
  if(this.oldScroll > this.scrollY  && stickySwitch===0){
    if(window.innerWidth > window.innerHeight){

    }
    if(window.innerWidth > window.innerHeight){
        stickyMenu.style.height = '10.05vw';
        stickyBackgroundLayer.style.height = '10.05vw';
    }else{
      stickyMenu.style.height = '25.27vw';
      stickyBackgroundLayer.style.height = '25.27vw';
    }
  }
  else {
    if(window.scrollY > window.innerWidth / 100 * 8.88){
      stickyMenu.style.height = '0vw';
      stickyBackgroundLayer.style.height = '0vw';
    }
  }
  this.oldScroll = this.scrollY;
}

// megaMenuHoverBox
// megaMenuHoverBox
// megaMenuHoverBox
var megaMenuHoverBox = document.getElementsByClassName('megaMenuHoverBox')[0];
var megaMenu = document.getElementsByClassName('megaMenu')[0];
megaMenuHoverBox.addEventListener('mouseenter',function(){
  if(window.innerWidth > window.innerHeight){
    megaMenu.style.height = '30.76vw';
    megaMenu.style.bottom = '-30.7vw';
    stickyMenu.style.height = '40.55vw';
    stickyMenu.style.borderBottom = 'none'
  }else if(window.innerWidth < window.innerHeight){
    megaMenu.style.height = '55w';
    megaMenu.style.bottom = '-30.7vw';
    stickyMenu.style.height = '55vw';
    stickyMenu.style.borderBottom = 'none'
  }

});
megaMenuHoverBox.addEventListener('mouseleave',function(){
  if(window.innerWidth > window.innerHeight){
    stickyMenu.style.height = '10.05vw';
    megaMenu.style.height = '30.76vw';
    megaMenu.style.bottom = '-30.76';
    stickyMenu.style.borderBottom = '1px solid white'
  }else if(window.innerWidth < window.innerHeight){
    stickyMenu.style.height = '25.27vw';
    megaMenu.style.height = '30.7vw';
    megaMenu.style.bottom = '-30.7vw';
    stickyMenu.style.borderBottom = '1px solid white'
  }

});

// button on Click
var shopNow = document.getElementsByClassName('shopNow')[0];
shopNow.addEventListener('click',function(){
  if(window.innerWidth > window.innerHeight){
      stickyMenu.style.height = '10.05vw';
      stickyBackgroundLayer.style.height = '10.05vw';
      megaMenu.style.height = '30.76vw';
      megaMenu.style.bottom = '-30.7vw';
      stickyMenu.style.height = '40.55vw';
      stickyMenu.style.borderBottom = 'none'
  }else{
    stickyMenu.style.height = '17vw';
    stickyBackgroundLayer.style.height = '17vw';
  }
})

// subscribeArrow subscribe
// subscribeArrow subscribe
// subscribeArrow subscribe
var subscribeArrow = document.getElementsByClassName('subscribeArrow')[0];
var blackOverlay = document.getElementsByClassName('blackOverlay')[0];
var closeBlackLayer = document.getElementsByClassName('closeBlackLayer')[0];
var littleArrowLayer = document.getElementsByClassName('littleArrowLayer')[0];
subscribeArrow.addEventListener('click',function(){
  blackOverlay.style.display = 'block';
  setTimeout(function(){
    blackOverlay.style.opacity = '1';
  },10);
});

closeBlackLayer.addEventListener('click',function(){
  blackOverlay.style.opacity = '0';
  setTimeout(function(){
    blackOverlay.style.display = 'none';
  },500);
})

littleArrowLayer.addEventListener('click',function(){
  blackOverlay.style.opacity = '0';
  setTimeout(function(){
    blackOverlay.style.display = 'none';
  },500);
})

window.addEventListener('keydown', logKey);
function logKey(e) {
  if(e.code === 'Escape'){
    console.log('horay');
    blackOverlay.style.opacity = '0';
    setTimeout(function(){
      blackOverlay.style.display = 'none';
    },500);
  }
}

// car bridal
// car bridal
// car bridal

// var bridalImage = document.getElementsByClassName('bridal');
// var bridalImageModulo = 0;
// var bridalHugeFont = document.getElementsByClassName('bridalHugeFont')[0];
// setInterval(function(){
//   bridalImageModulo++;
//   if(bridalImageModulo%4 === 3){
//     bridalHugeFont.style.opacity = 0;
//     setTimeout(function(){
//       bridalHugeFont.innerHTML = 'SKINCARE';
//       bridalHugeFont.style.opacity = 1;
//     },500)
//
//     bridalImage[0].style.opacity = '1'
//     bridalImage[1].style.opacity ='0';
//     bridalImage[2].style.opacity ='0';
//     bridalImage[3].style.opacity ='0';
//     console.log(bridalImageModulo%4 + " i am 0");
//   }
//   if(bridalImageModulo%4 === 1){
//     bridalHugeFont.style.opacity = 0;
//     setTimeout(function(){
//       bridalHugeFont.innerHTML = 'MANICURE';
//       bridalHugeFont.style.opacity = 1;
//     },500)
//
//     bridalImage[1].style.opacity ='1';
//     bridalImage[0].style.opacity ='0';
//     bridalImage[2].style.opacity ='0';
//     bridalImage[3].style.opacity ='0';
//     console.log(bridalImageModulo%4 + " i am 1");
//   }
//   if(bridalImageModulo%4 === 2){
//     bridalHugeFont.style.opacity = 0;
//     setTimeout(function(){
//       bridalHugeFont.innerHTML = 'PEDICURE';
//       bridalHugeFont.style.opacity = 1;
//     },500)
//
//     bridalImage[2].style.opacity ='1';
//     bridalImage[0].style.opacity ='0';
//     bridalImage[1].style.opacity ='0';
//     bridalImage[3].style.opacity ='0';
//     console.log(bridalImageModulo%4 + " i am 2");
//   }
//   if(bridalImageModulo%4 === 0){
//     bridalHugeFont.style.opacity = 0;
//     setTimeout(function(){
//       bridalHugeFont.innerHTML = 'BRIDAL';
//       bridalHugeFont.style.opacity = 1;
//     },500)
//
//     bridalImage[3].style.opacity ='1';
//     bridalImage[0].style.opacity ='0';
//     bridalImage[1].style.opacity ='0';
//     bridalImage[2].style.opacity ='0';
//     console.log(bridalImageModulo%4 + " i am 3");
//   }
// },3500);

// wht we sell 5pic hover anim
// wht we sell 5pic hover anim
// wht we sell 5pic hover anim
var whatWeDoOne = document.getElementsByClassName('whatWeDoJS');
var whatWeDoTextBox = document.getElementsByClassName('whatWeDoTextBox');
var fontFam = document.getElementsByClassName('fontFam');


whatWeDoOne[0].addEventListener('mouseenter',function(){
  whatWeDoTextBox[0].style.top = '0%';
  whatWeDoTextBox[0].style.background = "linear-gradient(to top, rgb(248,80,50,1) 0%, rgba(255,255,255,0) 100%)";
  whatWeDoTextBox[0].style.paddingTop = '7vw';
  fontFam[0].style.fontFamily = 'WorkSans-Bold';
})

whatWeDoOne[0].addEventListener('mouseleave',function(){
  whatWeDoTextBox[0].style.top = '90%';
  whatWeDoTextBox[0].style.paddingTop = '0vw';
  fontFam[0].style.fontFamily = 'WorkSans-Regular';
  setTimeout(function(){
    whatWeDoTextBox[0].style.background = "rgb(248,80,50,0.8)";
  },700);
})
//whatwedo 1
whatWeDoOne[1].addEventListener('mouseenter',function(){
  whatWeDoTextBox[1].style.top = '0%';
  whatWeDoTextBox[1].style.background = "linear-gradient(to top, rgb(248,80,50,1) 0%, rgba(255,255,255,0) 100%)";
  whatWeDoTextBox[1].style.paddingTop = '7vw';
  fontFam[1].style.fontFamily = 'WorkSans-Bold';
})

whatWeDoOne[1].addEventListener('mouseleave',function(){
  whatWeDoTextBox[1].style.top = '90%';
  whatWeDoTextBox[1].style.paddingTop = '0vw';
  fontFam[1].style.fontFamily = 'WorkSans-Regular';
  setTimeout(function(){
    whatWeDoTextBox[1].style.background = "rgb(248,80,50,0.8)";
  },700);
})
//whatwedo 2
whatWeDoOne[2].addEventListener('mouseenter',function(){
  whatWeDoTextBox[2].style.top = '0%';
  whatWeDoTextBox[2].style.background = "linear-gradient(to top, rgb(248,80,50,1) 0%, rgba(255,255,255,0) 100%)";
  whatWeDoTextBox[2].style.paddingTop = '7vw';
  fontFam[2].style.fontFamily = 'WorkSans-Bold';
})

whatWeDoOne[2].addEventListener('mouseleave',function(){
  whatWeDoTextBox[2].style.top = '90%';
  whatWeDoTextBox[2].style.paddingTop = '0vw';
  fontFam[2].style.fontFamily = 'WorkSans-Regular';
  setTimeout(function(){
    whatWeDoTextBox[2].style.background = "rgb(248,80,50,0.8)";
  },700);
})
//whatwedo 3
whatWeDoOne[3].addEventListener('mouseenter',function(){
  whatWeDoTextBox[3].style.top = '0%';
  whatWeDoTextBox[3].style.background = "linear-gradient(to top, rgb(248,80,50,1) 0%, rgba(255,255,255,0) 100%)";
  whatWeDoTextBox[3].style.paddingTop = '7vw';
  fontFam[3].style.fontFamily = 'WorkSans-Bold';
})

whatWeDoOne[3].addEventListener('mouseleave',function(){
  whatWeDoTextBox[3].style.top = '90%';
  whatWeDoTextBox[3].style.paddingTop = '0vw';
  fontFam[3].style.fontFamily = 'WorkSans-Regular';
  setTimeout(function(){
    whatWeDoTextBox[3].style.background = "rgb(248,80,50,0.8)";
  },700);
})
//whatwedo 4
whatWeDoOne[4].addEventListener('mouseenter',function(){
  whatWeDoTextBox[4].style.top = '0%';
  whatWeDoTextBox[4].style.background = "linear-gradient(to top, rgb(248,80,50,1) 0%, rgba(255,255,255,0) 100%)";
  whatWeDoTextBox[4].style.paddingTop = '7vw';
  fontFam[4].style.fontFamily = 'WorkSans-Bold';
})

whatWeDoOne[4].addEventListener('mouseleave',function(){
  whatWeDoTextBox[4].style.top = '90%';
  whatWeDoTextBox[4].style.paddingTop = '0vw';
  fontFam[4].style.fontFamily = 'WorkSans-Regular';
  setTimeout(function(){
    whatWeDoTextBox[4].style.background = "rgb(248,80,50,0.8)";
  },700);
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

// bigBox logic
// bigBox logic
// bigBox logic
var newArrivals = document.getElementsByClassName('newArrivals')[0];
var bestSellers = document.getElementsByClassName('bestSellers')[0];
var trendingLooksSection = document.getElementsByClassName('trendingLooksSection')[0];

var selectOne = document.getElementsByClassName('selectOne')[0];
var selectTwo = document.getElementsByClassName('selectTwo')[0];
var selectThree = document.getElementsByClassName('selectThree')[0];

selectOne.addEventListener('click',function(){
  selectOne.style.fontWeight = '900';
  selectTwo.style.fontWeight = '400';
  selectThree.style.fontWeight = '400';

  newArrivals.style.opacity = '1';
  bestSellers.style.opacity = '0';
  trendingLooksSection.style.opacity = '0';

  newArrivals.style.zIndex = '3';
  bestSellers.style.zIndex = '0';
  trendingLooksSection.style.zIndex = '0';
});

selectTwo.addEventListener('click',function(){
  selectOne.style.fontWeight = '400';
  selectTwo.style.fontWeight = '900';
  selectThree.style.fontWeight = '400';

  newArrivals.style.opacity = '0';
  bestSellers.style.opacity = '1';
  trendingLooksSection.style.opacity = '0';

  newArrivals.style.zIndex = '0';
  bestSellers.style.zIndex = '3';
  trendingLooksSection.style.zIndex = '0';
});

selectThree.addEventListener('click',function(){
  selectOne.style.fontWeight = '400';
  selectTwo.style.fontWeight = '400';
  selectThree.style.fontWeight = '900';

  newArrivals.style.opacity = '0';
  bestSellers.style.opacity = '0';
  trendingLooksSection.style.opacity = '1';

  newArrivals.style.zIndex = '0';
  bestSellers.style.zIndex = '0';
  trendingLooksSection.style.zIndex = '3';
});
