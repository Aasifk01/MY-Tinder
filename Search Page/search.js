
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
      menu.style.display = "none";
      tl.play();
    });
    cross.addEventListener("click", function () {
      setTimeout(function () {
        menu.style.display = "block";
      },1710)
      tl.reverse();
    });
    
    }
    OpenNAv();

    // List of cites

    const cities = [

        "Mumbai","Dehradun","Delhi","Indore","Chandigarh","Jaipur","Chennai","Kolkata","Ahmedabad","Banglore","Pune","Rajkot","Surat","Ambala",
        "Vadodara","Hyderabad","Kanpur","Lucknow","Jaunpur","Patna","Noida","Nagpur","Nashik","Faridabad","Vizag","Agra","Kota","Meerut",
        "Panipat","Mandi","shimla","Kullu","Varanasi","Gwalior","Jalgaon","Vijayawada","Srinagar","Bhopal","Guwahati","Kochi","Trivandrum","jammu","Kashmir","jamshedpur","Ranchi","Dhanbad","Karnataka","Mysuru","Kerala","kochi","ladakh","betul","Dewas","Dhar","Guna","Hoshangabad","jabalpur","khandwa","Khargone","Maheshwar","Rajgarh","Ratlam","Rewa","sagar","satna","sehore","ujjain","vidisha","shivpuri","mandsaur","balaghat","burhanpur","Bhind","mhow",'Ahmadnagar'
          ]
  var inputElement = document.getElementById("Search-bar");
  var datalist = document.getElementById("options");
 
  inputElement.addEventListener("input", function () {
    var query = this.value.toLowerCase();
  datalist.innerHTML = "";  // Clear previous suggestions
  // Display suggestions only when the input has at least 1 character
  if (query.length > 0) {
    var filteredCities = cities.filter(city => city.toLowerCase().includes(query));
    filteredCities.forEach(city => {
      var listItem = document.createElement("li");
      listItem.textContent = city;
      datalist.appendChild(listItem);
    });
  }

});

var page = document.querySelector("#search-box i" )
var main = document.body
page.addEventListener("click", function(){
    main.style.filter = "blur(15px)"
        main.style.filter = "blur(15px)"
        setTimeout(function(){
          
          window.location.href = "../Selection\ page/Selection.html";
          main.style.filter = "blur(0px)"
        },500)
          
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
const updateMarqueeWidth = () => {
  const totalWidth = Array.from(marqueeContent.children).reduce((width, img) => width + img.offsetWidth, 0);
  marqueeContent.style.width = `${totalWidth}px`;
};

// Update the width on load and when the window resizes
window.addEventListener('load', updateMarqueeWidth);
window.addEventListener('resize', updateMarqueeWidth);

// Add the animation class
marqueeContent.classList.add('marquee-animation');