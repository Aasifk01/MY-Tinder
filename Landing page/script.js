// Cursor animation
function cursorAnimation(){

  var cursor = document.querySelector("#cursor");
  
  window.addEventListener("mousemove", function (dets) {
    
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
      duration: 2,
      ease: "bunch.out",
    })
  })
  
}
cursorAnimation();
// NavBar
function OpenNAv(){
var tl = gsap.timeline();
var menu = document.querySelector("#nav i");
var cross = document.querySelector("#Side-Panel i");

tl.to("#Side-Panel", {
  duration: 0.5, 
  right: 0,
  ease: "bamble.out",
});

tl.from("#Side-Panel h4", {
  x: 150,
  duration: 0.5,
  opacity: 0,
  ease: "back.out(1,0.5)",
  stagger: 0.28,
});

tl.from("#Side-Panel i", {
  opacity: 0,
});
tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
cross.addEventListener("click", function () {
  tl.reverse();
});

}
OpenNAv();
function heroSection(){
  
  gsap.from("#video video", {
    opacity: 0,
    x: -100,
    duration: 1,
    scale: 3,
    ease: "elastic.out(1,0.5)",
    delay: 0.15,
  })
  gsap.from("#nav h2",{
  opacity: 0,
  y: -90,
  duration: 1,
  ease: "bounce.out(2,0.15)",
  delay: 0.15,
},"nav")

gsap.from("#nav i", {
  opacity: 0,
  y: -90,
  duration: 1,
  ease: "bounce.out(2,0.15)",
  delay: 0.15,
  
},"nav")

} 
heroSection();

function AboutAnimate(){

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#container",
    scroller: "body",
    duration: 0.15,
    start: "top 30%",
    end: "bottom 90%",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});
tl5.from("#container .elem", {
  opacity: 0,
  x:-100,
  duration: 1,  
  stagger: 0.5,
  // ease:back.out(1,0.5)

})
  tl5.from("#botm-btn button", {
    opacity: 0,
    y:-500,
    duration: 1,
    ease: "bounce.out(1,0.5)",
    delay: 1,
  })
}

AboutAnimate();
var btn = document.querySelector("#botm-btn button");
btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',

  })
})
