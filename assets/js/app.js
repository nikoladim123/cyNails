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

//carousel one
//carousel one
//carousel one
var carouselOne = document.getElementById('carouselOne');
var carOneLeftCarArrowBox = document.getElementById('carOneLeftCarArrowBox');
var carOneRightCarArrowBox = document.getElementById('carOneRightCarArrowBox');
carOneLeftCarArrowBox.addEventListener('click',function(){
  leftArrow();
  console.log('do i work?');
});
carOneRightCarArrowBox.addEventListener('click',function(){
  rightArrow();
  console.log('do i work?');
});
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
// carousel two
// carousel two
// carousel two
var carouselTwo = document.getElementById('carouselTwo');
var carTwoLeftCarArrowBox = document.getElementById('carTwoLeftCarArrowBox');
var carTwoRightCarArrowBox = document.getElementById('carTwoRightCarArrowBox');
carTwoLeftCarArrowBox.addEventListener('click',function(){
  leftArrowTwo();
  console.log('do i work?');
});
carTwoRightCarArrowBox.addEventListener('click',function(){
  rightArrowTwo();
  console.log('do i work?');
});
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
