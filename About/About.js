

gsap.from("#App-discription h1" ,{
    opacity:0,
    x:-1000,
    duration:1,
    
})
gsap.from("#App-discription p" ,{
    opacity:0,
    y:-200,
    duration:2,
    stagger: 1,
    ease: "elastic.out(3,1)"
})
gsap.from("#lines li",{
    x:-500,
    duration:2,
    delay:0.5,
    ease:"elastic.out(3,1)",
    stagger:0.25
})

let Images = [
    {  id:1 ,img:"https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {  id:2 ,img:"https://images.unsplash.com/photo-1517962847327-e8032e806fcc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {  id:3 ,img:"https://images.unsplash.com/photo-1604881990409-b9f246db39da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:4 ,img:"https://images.unsplash.com/photo-1543899161-d044e847c40f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:5 , img:"https://images.unsplash.com/photo-1481217006842-a4c3e2e3d722?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:6 , img:"https://images.unsplash.com/photo-1469989011449-f7b46079781c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
var image = document.querySelector("#Images")

Images.forEach(element => {
    image.innerHTML += `<img src="${element.img}">` 
    
});
// image.style.display ="none"
var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#Images",
        scroller:"body",
        start:"top center",
        end:"top 10%",
        scrub:3,
        // pin:true,
    }
})
tl6.from("#Images img",{
    x:-500,
    opacity:0,
    duration:6,
    delay:1,
    ease:"elastic.out(1,1.5)",
    stagger:1,
})

