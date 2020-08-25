for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  // new Audio("sounds/tom-1.mp3").play();
var drumbtnInnerHtml=this.innerHTML;
makesound(drumbtnInnerHtml);
buttonAnimation(drumbtnInnerHtml);

});
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){
  switch (key) {
    case "k":
      new Audio("sounds/tom-1.mp3").play()
    break;
    case "s":
      new Audio("sounds/tom-2.mp3").play()
    break;
    case "u":
      new Audio("sounds/tom-3.mp3").play()
    break;
    case "h":
      new Audio("sounds/tom-4.mp3").play()
    break;
    case "n":
      new Audio("sounds/snare.mp3").play()
    break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play()
    break;
    case "m":
      new Audio("sounds/crash.mp3").play()
    break;
    default: console.log(drumbtnInnerHtml);

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },300)
}
