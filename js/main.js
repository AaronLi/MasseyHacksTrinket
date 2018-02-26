var d = new Date();
var sections = [].slice.call(document.getElementsByClassName("fullPage"));
var buttonAnimationBackgrounds = [].slice.call(document.getElementsByClassName("buttonExtend"));
var buttonLinks = [].slice.call(document.getElementsByClassName("navbarLink"));
sections.splice(0,1); // first element is title page
var currentSection = ( document.documentElement.scrollTop/window.innerHeight);
document.onscroll = function(){
  var scrollPos = document.documentElement.scrollTop-window.innerHeight/2.0;
  var focusedWindow = Math.floor(scrollPos/window.innerHeight);
  currentSection = Math.min(Math.max(( document.documentElement.scrollTop/window.innerHeight),0),buttonLinks.length);
  for(var i=0;i<sections.length;i++){
    if(i===focusedWindow){
      buttonAnimationBackgrounds[i].style.animationDelay = "0s";
      buttonAnimationBackgrounds[i].style.animationName = "focus";
      buttonAnimationBackgrounds[i].style.animationPlayState = "running";
    }
    else{
      var otherLink = buttonAnimationBackgrounds[i]
      otherLink.style.animationName = "unfocus";
    }
  }
}
var lastCalled = d.getTime();
document.onkeydown = function(event){
  d = new Date();
  var keyDown = event.keyCode||event.which;
  if(d.getTime()-lastCalled>550){
    if(keyDown === 38){
      currentSection = Math.ceil(currentSection);
      currentSection = Math.max(0,--currentSection);
      buttonLinks[currentSection].click();
      lastCalled = d.getTime();
    }
    else if(keyDown === 40){
      currentSection = Math.floor(currentSection);
      currentSection = Math.min(buttonLinks.length-1,++currentSection);
      buttonLinks[currentSection].click();
      lastCalled = d.getTime();
    }
  }
}
