//Your JavaScript goes in here
var flag = 1
var steps = document.querySelector("#step")
var drop = document.querySelector("#drp")
var pipet1 = document.querySelector("#ppt1")
var pipet2 = document.querySelector("#ppt2")
var pipet3 = document.querySelector("#ppt3")
var pipet4 = document.querySelector("#ppt4")
var pipet5 = document.querySelector("#ppt5")
var pipet6 = document.querySelector("#ppt6")
var pipet7 = document.querySelector("#ppt7")
var pipet8 = document.querySelector("#ppt8")
var pipet9 = document.querySelector("#ppt9")

var orgflask1 = document.querySelector("#org-flask1")
var orgflask2 = document.querySelector("#org-flask2")
var orgflask3 = document.querySelector("#org-flask3")

var aqusflask1 = document.querySelector("#aqus-flask1")
var aqusflask2 = document.querySelector("#aqus-flask2")
var aqusflask3 = document.querySelector("#aqus-flask3")

var emtflask1 = document.querySelector("#emt-flask1")
var emtflask2 = document.querySelector("#emt-flask2")
var emtflask3 = document.querySelector("#emt-flask3")
var emtflask4 = document.querySelector("#emt-flask4")
var emtflask5 = document.querySelector("#emt-flask5")
var emtflask6 = document.querySelector("#emt-flask6")

var knob = document.querySelector("#knob")
var sepfunnol = document.querySelector("#sep-funnol")
var btn = document.querySelector("#btn1")
var Dwater = document.querySelector("#dwater")


 function speaks() {
     const utterance = new SpeechSynthesisUtterance(steps.innerHTML);
     speechSynthesis.speak(utterance);
}

setTimeout(() => {
    speaks();
}, 2000);

pipet1.style.opacity = "100"


pipet1.addEventListener("click", function () {
    if (flag == 1) {
        steps.innerHTML = " Again click on pipet to seperate 5ml Organiclayer from the seperting funnol ";
        pipet1.style.transform = " rotate(90deg)"
        setTimeout(() => {
            pipet1.style.transform = " translate(0%,-4000%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet1.style.transform = " translate(105%,-4000%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet1.style.transform = "translate(105%,-3100%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet1.style.transform = "translate(105%,-4000%) rotate(90deg)"
        }, 5000);


        setTimeout(() => {
            pipet1.style.transform = "translate(355%,-4000%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet1.style.transform = "translate(355%,-900%) rotate(90deg)"
        }, 7000);


        setTimeout(() => {
            emtflask4.style.opacity = "0"
            orgflask1.style.opacity = "100"
            pipet1.style.visibility = "hidden"
            speaks();
        }, 8000);

        setTimeout(() => {
            pipet2.style.opacity= "100"
        }, 9000);

    }


    flag += 1;
})



pipet2.addEventListener("click", function () {
    if (flag == 2) {
        steps.innerHTML = "Again click on pipet to seperate 5ml Organiclayer from the seperting funnol";
        pipet2.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet2.style.transform = " translate(0%,-4000%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet2.style.transform = " translate(105%,-4000%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet2.style.transform = "translate(105%,-3100%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet2.style.transform = "translate(105%,-4000%) rotate(90deg)"
        }, 5000);


        setTimeout(() => {
            pipet2.style.transform = "translate(414%,-4000%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet2.style.transform = "translate(414%,-900%) rotate(90deg)"
        }, 7000);


        setTimeout(() => {
            emtflask5.style.opacity = "0"
            orgflask2.style.opacity = "100"
            pipet2.style.opacity = "0"
            pipet3.style.opacity = "100"
            speaks();
        }, 9000);

    }


    flag += 1;
})

pipet3.addEventListener("click", function () {
    if (flag == 3) {
        steps.innerHTML = "click on conical flask";
        pipet3.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet3.style.transform = " translate(0%,-4000%) rotate(90deg)"
        }, 1000);

        setTimeout(() => {
            pipet3.style.transform = " translate(105%,-4000%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet3.style.transform = "translate(105%,-3100%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet3.style.transform = "translate(105%,-4000%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet3.style.transform = "translate(470%,-4000%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet3.style.transform = "translate(470%,-900%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            emtflask6.style.opacity = "0"
            orgflask3.style.opacity = "100"
            pipet3.style.opacity = "0"
            speaks();
        }, 9000);
    }
    flag += 1;
})



emtflask1.addEventListener("click", function () {
    if (flag = 1) {
        steps.innerHTML = "click on knob of seperating funnol to take out 5ml of aquese layer of solution";
        emtflask1.style.transform = "translate(-180%,0%)"
        speaks();
    }
    flag += 1;
})


knob.addEventListener("click", function () {
    if (flag = 2) {
        drop.style.opacity = "100"
        // steps.innerHTML = "click on conical flask";
        drop.style.transform = "translate(0%,300%) ";
        aqusflask1.style.opacity = "100"

        setTimeout(() => {
            drop.style.opacity = "0"
        }, 300);


        setTimeout(() => {
            drop.style.transform = "translate(0%,0%)"
            emtflask1.style.opacity = "0"
        }, 800);

        setTimeout(() => {
            aqusflask1.style.transform = "translate(180%,0%)"
        }, 1200);

    }

    flag += 1
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ flask 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

emtflask2.addEventListener("click", function () {
    if (flag = 3) {
        steps.innerHTML = "click on conical flask then click knob of seperating funnol to take out 5ml of aquese layer of solution";
       
        emtflask2.style.transform = "translate(-317%,0%)"
     
        knob.addEventListener("click", function(){
            setTimeout(() => {
                drop.style.transform = "translate(0%,0%)"
                aqusflask2.style.opacity = "100"
                emtflask2.style.opacity = "0"
            }, 600);
    
            setTimeout(() => {
                aqusflask2.style.transform = "translate(317%,0%)"
            }, 2000);
        })

        speaks();
    }
    flag += 1;

})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ flask 3 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


emtflask3.addEventListener("click", function () {
    if (flag = 3) {
        steps.innerHTML = "click on knob of seperating funnol to take out 5ml of aquese layer of solution then click on NEXT button";
        emtflask3.style.transform = "translate(-460%,0%)"
     
        knob.addEventListener("click", function(){
            setTimeout(() => {
                drop.style.transform = "translate(0%,0%)"
                aqusflask3.style.opacity = "100"
                emtflask3.style.opacity = "0"
                btn.style.visibility = "visible"
            }, 600);
    
            setTimeout(() => {
                aqusflask3.style.transform = "translate(450%,0%)"
                
            }, 2000);
        })

        speaks();
        flag += 1;
    }
 
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


var  cnt = 1  

btn.addEventListener("click", function () {
   if(cnt == 1){
    steps.innerHTML = "click on pipet to add 5ml of water in each flask";
    sepfunnol.style.opacity = "0"
    pipet4.style.opacity = "100"
    Dwater.style.opacity = "100"
   }
  
})


// *************************************************** Add water in the seprated solution **********************************

pipet4.addEventListener("click", function(){
    if(cnt == 2){
        pipet4.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet4.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet4.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet4.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet4.style.transform = "translate(105%,-1700%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet4.style.transform = "translate(180%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet4.style.transform = "translate(180%,-600%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet4.style.opacity = "0"
            pipet5.style.opacity = "100"
        }, 8000);
       
    }
    cnt += 1
})


pipet5.addEventListener("click", function(){
    if(cnt == 3){
        pipet5.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet5.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet5.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet5.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet5.style.transform = "translate(105%,-1700%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet5.style.transform = "translate(240%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet5.style.transform = "translate(240%,-600%) rotate(90deg)"
            pipet5.style.opacity = "0"
            pipet6.style.opacity = "100"
        }, 7000);
       
    }
    cnt += 1
})




pipet6.addEventListener("click", function(){
    if(cnt == 4){
        pipet6.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet6.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet6.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet6.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet6.style.transform = "translate(105%,-1700%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet6.style.transform = "translate(295%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet6.style.transform = "translate(295%,-600%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet6.style.opacity = "0"
            pipet7.style.opacity = "100"
        }, 8000);
       
    }
    cnt += 1
})

pipet7.addEventListener("click", function(){
    if(cnt == 5){
        pipet7.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet7.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet7.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet7.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet7.style.transform = "translate(105%,-1700%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet7.style.transform = "translate(355%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet7.style.transform = "translate(355%,-600%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet7.style.opacity = "0"
            pipet8.style.opacity = "100"
        }, 8000);
       
    }
    cnt += 1
})

pipet8.addEventListener("click", function(){
    if(cnt == 6){
        pipet8.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet8.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet8.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet8.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet8.style.transform = "translate(105%,-1700%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet8.style.transform = "translate(410%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet8.style.transform = "translate(410%,-600%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet8.style.opacity = "0"
            pipet9.style.opacity = "100"
        }, 8000);
       
    }
    cnt += 1
})


pipet9.addEventListener("click", function(){
    if(cnt == 7){
        pipet9.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet9.style.transform = " translate(0%,-1700%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet9.style.transform = " translate(105%,-1700%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet9.style.transform = "translate(105%,-500%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet9.style.transform = "translate(105%,-1700%) rotate(90deg)"
            
        }, 5000);

        setTimeout(() => {
            pipet9.style.transform = "translate(470%,-1700%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet9.style.transform = "translate(470%,-600%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet9.style.opacity = "0"
            btn.style.visibility = "hidden"
           
        }, 8000);
       
    }
    cnt += 1
    go.style.visibility = "visible"
})