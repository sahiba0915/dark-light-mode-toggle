const img = document.getElementById("hero");
const welcomeMsg= document.getElementById("welcomeMsg");

img.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        img.src = "sun.png";
        welcomeMsg.innerHTML = "Welcome to Dark Mode";
    }else {
        img.src = "moon.png";
        welcomeMsg.innerHTML = "Welcome to Light Mode";
        
    }
}