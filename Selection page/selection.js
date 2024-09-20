
var propose = document.querySelector("#prop")
var  image = document.querySelector("#image")
var  Response = document.querySelector('#response');
var TextR = document.querySelector('#Rstatus');
var loader = document.querySelector(".wrapper")
//Proposed button
TextR.style.display = "none"
propose.addEventListener("click", function request(){
    TextR.style.display = "none"
    loader.style.display = "block"
    image.style.filter = "blur(10px)"
    if(randomNO() ==1){
        setTimeout(function(){
            loader.style.display = "none"
            image.style.filter = "blur(4px)"
            TextR.style.display = "block"
            TextR.innerHTML = "Rejected"
            
        },2000)
    }else{
        setTimeout(function(){
            loader.style.display = "none"
            image.style.filter = "blur(4px)"
            // Response.style.display = "block"
            TextR.style.display = "block"
            TextR.innerHTML = "Accepted"
            
            
        },2000)
    }
})

function randomNO(){
    var num = Math.floor(Math.random()*2)
   console.log(num)
   return num
}


//skipped Button
const Crushs = [
    { name : "Dur-e-Fishan" , image : "https://i.pinimg.com/736x/b9/60/af/b960af614cf3f869e9c3aca7cef5c70c.jpg" ,Status: "Crush"},
    {
        name: "Hiba Bukhari" , image :"https://e1.pxfuel.com/desktop-wallpaper/455/624/desktop-wallpaper-hiba-qadir-bukhari-%D8%AD%D8%A8%D8%A7-%D8%A8%D8%AE%D8%A7%D8%B1%DB%8C-s-biography-hiba-bukhari.jpg" , Status: "Crush"
    },
    {
        name: "Samntha" , image :"https://i.pinimg.com/736x/bf/44/de/bf44de2335a5ca3e5a181228546aa599.jpg" , Status: "Crush"
    },
    {
        name: "Amrita Rao" , image :"https://images.indianexpress.com/2023/06/amrita-1200.jpg" , Status: "Crush"
    },
    {
        name: "Aisha Takia" , image :"https://images.news18.com/ibnlive/uploads/2024/02/fotojet-2024-02-18t195959.364-2024-02-9943222b2f84ad2871c2fe40d67a2760.jpg?impolicy=website&width=640&height=480" , Status: "Crush"
    },
    {
        name: "kiara Advani" , image :"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kiara_Advani_snapped_at_the_screening_of_Shershaah_%28cropped%29.jpg/800px-Kiara_Advani_snapped_at_the_screening_of_Shershaah_%28cropped%29.jpg" , Status: "Crush"
    },
    
    {
        name: "Pooja Hegde" , image :"https://upload.wikimedia.org/wikipedia/commons/1/19/Pooja_Hegde_at_Beast_Telugu_press_meet.jpg" , Status: "Crush"
    },
    
    
];
let currentIndex = 0;
var  Skip = document.querySelector("#skip").addEventListener("click",()=>{
    image.style.filter = "blur(3px)"
    TextR.style.display = "none"
    loader.style.display = "block"
    setTimeout(()=>{
        TextR.style.display = "none"
        currentIndex = (currentIndex + 1)%Crushs.length
        image.style.filter = "blur(0px)"
        loader.style.display = "none"
        image.src=Crushs[currentIndex].image;
        var name = document.querySelector("#Name").textContent=Crushs[currentIndex].name;

    },3000)    
    
})


   gsap.from("#card", {
    opacity: 0,
    y: 200,
    delay: 0.8,
    duration: 5,
    ease: "elastic.out(1,0.3)",

})
