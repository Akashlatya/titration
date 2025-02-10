//Your JavaScript goes in here
var f = 1;
var steps = document.querySelector("#step");
var bkr1 = document.querySelector("#img-acetic");
var bkr2 = document.querySelector("#img-butanol");
var drp1 = document.querySelector("#drop1");
var drp2 = document.querySelector("#drop2");
var drp3 = document.querySelector("#drop3");
var drp4 = document.querySelector("#drop4");
var gcylender = document.querySelector("#img-gcylndr");
var gsol = document.querySelector("#sol-gcylndr");
var solmx = document.querySelector("#img-sol_Nstan");
// var finalsol = document.querySelector("#finalsol")
var cork = document.querySelector("#img-cork");
var solpart1 = document.querySelector("#solpart1");
var solpart2 = document.querySelector("#img-sol_Nstan");
var emt = document.querySelector("#img-emty");
var lhand = document.querySelector("#lhand");
var fsepsol = document.querySelector("#final_sep_sol");
var emty = document.querySelector("#img-fstnd");
// var gcylendersol = document.querySelector("#img-gcylndr-sol")




function speaks() {
  const utterance = new SpeechSynthesisUtterance(steps.innerHTML);
  speechSynthesis.speak(utterance);
}

setTimeout(() => {
 speaks();
}, 2000);



// @@@@@@@@@@@@@@@@@@@@@@ beaker into cylender @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

bkr1.addEventListener("click", function () {
  if (f == 1) {
    steps.innerHTML = "click on graduated cylinder";
    bkr1.style.transform = "translate(-80%,-90%) rotate(-60deg)";
    speaks();
    setTimeout(() => {
      drp1.style.transform = "translate(0%,500%)";
      drp1.style.opacity = "0";
    }, 700);

    setTimeout(() => {
      drp1.style.visibility = "visible";
      gsol.style.opacity = "100";
    }, 900);

    setTimeout(() => {
      bkr1.style.transform = "translate(0%,0%) rotate(0deg)";
    }, 1500);
  }

  f += 1;
});

bkr2.addEventListener("click", function () {
  if (f == 3) {
    steps.innerHTML = "click on graduated cylinder";
    bkr2.style.transform = "translate(-220%,-90%) rotate(-60deg)";
    speaks();
    setTimeout(() => {
      drp2.style.transform = "translate(0%,500%)";
      drp2.style.opacity = "0";
    }, 700);

    setTimeout(() => {
      drp2.style.visibility = "visible";
      gsol.style.opacity = "100";
    }, 900);

    setTimeout(() => {
      bkr2.style.transform = "translate(0%,0%) rotate(0deg)";
    }, 1500);
  }

  f = 3;
});

// ############################ cylender into seperating funnel ###########################

gcylender.addEventListener("click", function () {
  if (f == 2) {
    steps.innerHTML =
      "  Double click on butanol beaker to take 15ml 0f N-butanol into graduated cylinder";
    gcylender.style.transform = "translate(-240%,-155%) rotate(-60deg)";
    gsol.style.transform = "translate(-300%,-605%) rotate(-60deg)";
    speaks();
    setTimeout(() => {
      drp3.style.transform = "translate(0%,500%)";
      drp3.style.opacity = "0";
    }, 700);

    setTimeout(() => {
      drp3.style.visibility = "visible";
      gsol.style.opacity = "0";
      solpart1.style.visibility = "visible";
    }, 900);

    setTimeout(() => {
      gcylender.style.transform = "translate(0%,0%) rotate(0deg)";
      gsol.style.transform = "translate(0%,0%) rotate(0deg)";
    }, 1500);
  }

  f += 1;
});

gcylender.addEventListener("click", function () {
  if (f == 4) {
    steps.innerHTML = "click on cork to close seprating funnal";
    gcylender.style.transform = "translate(-240%,-155%) rotate(-60deg)";
    gsol.style.transform = "translate(-300%,-605%) rotate(-60deg)";
    speaks();
    setTimeout(() => {
      drp4.style.transform = "translate(0%,500%)";
      drp4.style.opacity = "0";
    }, 700);

    setTimeout(() => {
      solpart2.style.opacity = "100";
      solpart1.style.visibility = "hidden";
      drp4.style.visibility = "visible";
      gsol.style.opacity = "0";
    }, 900);

    setTimeout(() => {
      gcylender.style.transform = "translate(0%,0%) rotate(0deg)";
      gsol.style.transform = "translate(0%,0%) rotate(0deg)";
    }, 1500);
  }

  f += 1;
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ mix solution $$$$$$$$$$$$$$$$$$$

solmx.addEventListener("click", function () {
  if (f == 6) {
    emt.style.opacity = "0";
    cork.style.opacity = "0";
    steps.innerHTML =
      "wait 4 to 5 minuts to seprate the aqueous and organic layear ";
    setTimeout(() => {
      solmx.style.transform = "rotate(20deg)";
      lhand.style.transform = "translate(0%,80%)";
      speaks();
    }, 400);

    setTimeout(() => {
      solmx.style.transform = "rotate(0deg)";
    }, 800);

    setTimeout(() => {
      solmx.style.transform = "rotate(-20deg)";
      lhand.style.transform = "translate(0%,55%)";
    }, 1200);

    setTimeout(() => {
      solmx.style.transform = "rotate(0deg)";
    }, 1600);

    setTimeout(() => {
      solmx.style.transform = "rotate(20deg)";
      lhand.style.transform = "translate(0%,80%)";
    }, 2000);

    setTimeout(() => {
      solmx.style.transform = "rotate(0deg)";
    }, 2400);

    setTimeout(() => {
      solmx.style.transform = "rotate(-20deg)";
      lhand.style.transform = "translate(0%,55%)";
    }, 2800);

    setTimeout(() => {
      solmx.style.transform = "rotate(0deg)";
    }, 3200);

    setTimeout(() => {
      solmx.style.transform = "rotate(20deg)";
      lhand.style.transform = "translate(0%,80%)";
    }, 3600);

    setTimeout(() => {
      steps.innerHTML = " Click on NEXT button ";
      solmx.style.transform = "rotate(0deg)";
      lhand.style.opacity = "0";
      cork.style.opacity = "100";
      speaks();
    }, 4000);

    setTimeout(() => {
      alert("after 5 minuts later ");

    }, 7000);

    setTimeout(() => {
      fsepsol.style.opacity = "100";
      solmx.style.opacity = "0";
      solpart2.style.opacity = "0";
      cork.style.opacity = "0";
      emty.style.opacity = "0";
    }, 8000);
  }
  f += 1;
  go.style.visibility = "visible";
});

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

cork.addEventListener("click", function () {
  if (f == 5) {
    steps.innerHTML = "click on Seprating funnal and sake properly";
    cork.style.transform = "translate(0%,-1500%)";
    speaks();
    setTimeout(() => {
      cork.style.transform = "translate(290%,-1500%)";
    }, 1000);

    setTimeout(() => {
      cork.style.transform = "translate(302%,-1250%)";
      lhand.style.opacity = "100";
      lhand.style.transform = "translate(0%,50%)";
    }, 1500);
  }
  f += 1;
});
