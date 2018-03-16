window.onload = function () {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("sound");
    var grid = document.getElementById("dirt-box");


    for (i = 0; i < dirt.length; i++) {
        dirt[i].addEventListener("click", function () {
            if(dirt.innerHTML="mole"){
dirt.innerHTML="";
sound.play();
            }else{
            
                console.log("Nothing here, boi");
               
            }


        })


    };



    

    function setMole() {
        var mole = document.createElement("div");
mole.id="mole";
       
var randomnum = Math.floor(Math.random(0, dirt.length))
        

        if(moles[randomnumber].innerHTML = "") {
            dirt.innerHTML = "mole";
        } else {
            console.log("Too many moles");
        }

    }



setInterval(setMole(), 3000);


}