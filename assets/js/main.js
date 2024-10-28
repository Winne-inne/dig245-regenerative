
/* javascript */

let fur = ["black", "orange", "pink"]
let nap = ["fish", "dessert", "blueberry"]
let rest = ["win", "fir", "boo"]

function randomArrayIndex(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function rand_cat(){
  let bod = document.querySelector(".body");
  let bed = document.querySelector(".bed");
  let loc = document.querySelector(".place");
  let rand_bod = randomArrayIndex(fur);
  let rand_bed = randomArrayIndex(nap);
  let rand_loc = randomArrayIndex(rest);
  fur_pick(rand_bod);
  bed_pick(rand_bed);
  loc_pick(rand_loc);
}

function fur_pick(color) {
  let bod = document.querySelector(".body");
  if (color == "black") {
    bod.innerHTML = "<img src= assets/img/black_cat.PNG>";

  }
  else if (color == "orange") {
    bod.innerHTML = "<img src= assets/img/orange_cat.PNG>";

  }
  else if (color == "pink") {
    bod.innerHTML = "<img src= assets/img/pink_cat.PNG>";

  }

};

function bed_pick(name) {
  let bed = document.querySelector(".bed");
  if(name == "fish") {
    bed.innerHTML = "<img src= assets/img/fish_bed.PNG>";
  }
  else if(name == "dessert") {
    bed.innerHTML = "<img src= assets/img/dessert_bed.PNG>";
  }
  else if(name == "blueberry") {
    bed.innerHTML = "<img src= assets/img/blueberry_bed.PNG>";
  }
};

function loc_pick(plac) {
  let loc = document.querySelector(".place");
  if(plac == "win") {
    loc.innerHTML = "<img src= assets/img/window.PNG>";
  }
  else if(plac == "fir") {
    loc.innerHTML = "<img src= assets/img/fireplace.PNG>";
  }
  else if(plac == "boo") {
    loc.innerHTML = "<img src= assets/img/bookshelf.PNG>";
  }
};



/*** event listeners */

document.getElementById("black_fur").addEventListener("click", function () {
  fur_pick("black")
});
document.getElementById("orange_fur").addEventListener("click", function () {
  fur_pick("orange")
});
document.getElementById("pink_fur").addEventListener("click", function () {
  fur_pick("pink")
});
document.getElementById("fish_bed").addEventListener("click", function () {
  bed_pick("fish")
});
document.getElementById("dessert_bed").addEventListener("click", function () {
  bed_pick("dessert")
});
document.getElementById("blueberry_bed").addEventListener("click", function () {
  bed_pick("blueberry")
});
document.getElementById("window").addEventListener("click", function () {
  loc_pick("win")
});
document.getElementById("fire").addEventListener("click", function () {
  loc_pick("fir")
});
document.getElementById("books").addEventListener("click", function () {
  loc_pick("boo")
});
document.getElementById("rand").addEventListener("click", function () {
  rand_cat()
});

//timer code

let startingMins = 10;
let time = startingMins * 60;

const countdownEl = document.getElementById("countdown");



function updateCountdown() {
  const minutes = Math.floor(time/ 60);
  let seconds = time % 60;
  
  seconds = seconds < 10 ?'0' + seconds : seconds;
  
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;

  if (time <= 0){
    document.getElementById("leftPanel").style.display = "block";
    document.getElementById("black_fur").style.display = "block";
    document.getElementById("orange_fur").style.display = "block";
    document.getElementById("pink_fur").style.display = "block";

    document.getElementById("rightPanel").style.display = "block";
    document.getElementById("fish_bed").style.display = "block";
    document.getElementById("dessert_bed").style.display = "block";
    document.getElementById("blueberry_bed").style.display = "block";
    document.getElementById("bottomPanel").style.display = "block";
    document.getElementById("window").style.display = "block";
    document.getElementById("fire").style.display = "block";
    document.getElementById("books").style.display = "block";

    document.getElementById("rand").style.display = "block";

    document.getElementById("timer").style.display = "block";
    document.getElementById("timerSubmit").style.display = "block";
  
  }
}

document.getElementById("timerSubmit").onclick = function(){
 
  time = document.getElementById("timer").value;
  document.getElementById("countdown").textContent = '${time}';
  setInterval(updateCountdown, 1000);

  document.getElementById("leftPanel").style.display = "none";
  document.getElementById("black_fur").style.display = "none";
  document.getElementById("orange_fur").style.display = "none";
  document.getElementById("pink_fur").style.display = "none";

  document.getElementById("rightPanel").style.display = "none";
  document.getElementById("fish_bed").style.display = "none";
  document.getElementById("dessert_bed").style.display = "none";
  document.getElementById("blueberry_bed").style.display = "none";

  document.getElementById("bottomPanel").style.display = "none";
  document.getElementById("window").style.display = "none";
  document.getElementById("fire").style.display = "none";
  document.getElementById("books").style.display = "none";

  document.getElementById("rand").style.display = "none";

  document.getElementById("timer").style.display = "none";
  document.getElementById("timerSubmit").style.display = "none";
  
}




