
/* javascript */

let fur =["black", "orange", "pink"]
let tail =["gray", "cream", "pink"]
let rest =["window", "fire", "books"]

function fur_pick(color){
  let bod= document.querySelector(".body");
  if(color == "black"){
    console.log("black works");
    bod.innerHTML = "<img src= assets/img/black_cat.PNG>"
    
  }
  else if (color == "orange"){
    console.log("orange works");
    bod.innerHTML = "<img src= assets/img/orange_cat.PNG>";
    
  }
  
};


/*** event listeners */

document.getElementById("black_fur").addEventListener("click", fur_pick("black"));
document.getElementById("orange_fur").addEventListener("click", fur_pick("orange"));

  
