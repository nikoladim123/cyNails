//window onscroll
window.onscroll = function(){
  stickyMenuFunc();
};

//sticky menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
var stickySocialMedia = document.getElementsByClassName('stickySocialMedia')[0];
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
