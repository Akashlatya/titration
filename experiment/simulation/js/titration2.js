// -----------------------------------------------------------------------  variables---------------------------------------------------------------------               

var f = 0;
var steps = document.querySelector("#step")
var pflask1 = document.querySelector("#pink1")
var pflask2 = document.querySelector("#pink2")
var pflask3 = document.querySelector("#pink3")
var pflask4 = document.querySelector("#pink4")
var pflask5 = document.querySelector("#pink5")
var pflask6 = document.querySelector("#pink6")

var orgl1 = document.querySelector("#orgflsk1")
var aql2 = document.querySelector("#flask2")
var orgl3 = document.querySelector("#orgflsk3")
var aql4 = document.querySelector("#flask4")
var orgl5 = document.querySelector("#orgflsk5")
var aql6 = document.querySelector("#flask6")
var nxt = document.querySelector("#go")
var drp1 = document.querySelector("#drop")


alert("Perform Titration slowly and take your time")


function speaks() {
  const utterance = new SpeechSynthesisUtterance(steps.innerHTML);
  speechSynthesis.speak(utterance);
}

setTimeout(() => {
 speaks();
}, 2000);



// ******************************************************* titration1 *******************************

function titration1() {
  if (f == 0) {
    steps.innerHTML = "click on burate's knob to release NAOH";
    console.log(f);
    orgl1.style.transform = "translate(300%,0%) ";
    speaks();
  }
  f = +1;
}

function titrate() {
  if (f == 1) {
    steps.innerHTML = "click on organic layer filled conical flask  and titrate";
    drp1.style.visibility = "visible"
    drp1.style.transform = "translate(0%,600%) ";
    nxt.style.visibility ="hidden";
    speaks();
    setTimeout(() => {
      drp1.style.visibility = "hidden"
    }, 200);

    setTimeout(() => {
      drp1.style.transform = "translate(0%,0%)"
    }, 1000);

    setTimeout(() => {
      pflask1.style.opacity = "20%"
      pflask1.style.opacity = "60%"
      pflask1.style.opacity = "100%"
      orgl1.style.visibility = "hidden";

    }, 4000);

  }

}
function pink1() {
  pflask1.style.transform = "translate(-300%,0%)";

  f = +1
}

// ********************************************** titration2 *************************************************

function titration2() {
  if (f == 1) {
    console.log(f)
    steps.innerHTML = "click on burate's knob to release NAOH";
    aql2.style.transform = "translate(427%,0%) ";
    speaks();
    setTimeout(() => {
      pflask2.style.opacity = "20%"
      pflask2.style.opacity = "60%"
      pflask2.style.opacity = "100%"
      aql2.style.visibility = "hidden";
    }, 6000);

  }
  
}

function pink2() {
  pflask2.style.transform = "translate(-427%,0%)";


  f = +1
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ titration3 #########################################

function titration3() {
  if (f == 1) {
    steps.innerHTML = "click on burate's knob to release NAOH";
    orgl3.style.transform = "translate(550%,0%) ";
    speaks();
    setTimeout(() => {
      pflask3.style.opacity = "20%"
      pflask3.style.opacity = "60%"
      pflask3.style.opacity = "100%"
      orgl3.style.visibility = "hidden";
    }, 6000);

  }
  
}

function pink3() {
  pflask3.style.transform = "translate(-550%,0%)";


  f = +1
}


// ********************************************** titration4 *************************************************

function titration4() {
  if (f == 1) {
    console.log(f)
    steps.innerHTML = "click on burate's knob to release NAOH";
    aql4.style.transform = "translate(677%,0%) ";
    speaks();
    setTimeout(() => {
      pflask4.style.opacity = "20%"
      pflask4.style.opacity = "60%"
      pflask4.style.opacity = "100%"
      aql4.style.visibility = "hidden";
    }, 6000);

  }
  
}

function pink4() {
  pflask4.style.transform = "translate(-677%,0%)";
  f = +1
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Titration4 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function titration5() {
  if (f == 1) {
    steps.innerHTML = "click on burate's knob to release NAOH";
    orgl5.style.transform = "translate(800%,0%) ";
    speaks();
    setTimeout(() => {
      pflask5.style.opacity = "20%"
      pflask5.style.opacity = "60%"
      pflask5.style.opacity = "100%"
      orgl5.style.visibility = "hidden";
    }, 6000);

  }
  
}

function pink5() {
  pflask5.style.transform = "translate(-800%,0%)";
  f = +1
}


// ********************************************** titration6 *************************************************

function titration6() {
  if (f == 1) {
    console.log(f)
    steps.innerHTML = "click on burate's knob to release NAOH";
    aql6.style.transform = "translate(930%,0%) ";
    speaks();
    setTimeout(() => {
      pflask6.style.opacity = "20%"
      pflask6.style.opacity = "60%"
      pflask6.style.opacity = "100%"
      aql6.style.visibility = "hidden";
    }, 6000);

  }

}

function pink6() {
  pflask6.style.transform = "translate(-930%,0%)";
  nxt.style.visibility ="visible";
  speaks();
  f = +1
}
