var sections = [].slice.call(document.getElementsByClassName("fullPage"));
var sectionLinks = [].slice.call(document.getElementsByClassName("buttonExtend"));
sections.splice(0,1); // first element is title page
document.onscroll = function(){
  var scrollPos = document.documentElement.scrollTop-window.innerHeight/2.0;
  var focusedWindow = Math.floor(scrollPos/window.innerHeight);
  for(var i=0;i<sections.length;i++){
    if(i===focusedWindow){
      sectionLinks[i].style.animationDelay = "0s";
      sectionLinks[i].style.animationName = "focus";
      sectionLinks[i].style.animationPlayState = "running";
    }
    else{
      var otherLink = sectionLinks[i]
      otherLink.style.animationName = "unfocus";
    }
  }
}
