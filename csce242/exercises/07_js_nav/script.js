/* When the hamburger is clicked toggle between showing and hiding the nav items */
// document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick =() =>{
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to links destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //Don't go to the links destination
    console.log("you clicked a link");
};

/*change color of ball*/

document.getElementById("txt-color").onchange = (e) => {
    document.getElementById("ball").style.setProperty("background-color",e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
};

/* Move ball down when button clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementsById("ball").style.setProperty("top",pos +"px");
}

/*show color message */
document.getElementById("btn-show-color").onclick = () =>{
    const color = doument.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if (color == "blue"){
        mood = "moody";
    }
    else{
        mood = "undefined";
    }

    messageP.innerHTML =`You chose ${color} so you are ${mood}`; /* Use back ticks for these */

    }

    /*Donations*/
    /*get the number 
    -if it is not a number or it is a negative, 
    show an error in the error otherwise first show the percent out 
    of 10000 towards goal Next show a visual */
    document.getElementById("btn-donate").onclick =() =>{
        const donation = document.getElementById("txt-donations");
        const error = document.getElementById("error-donation");
        error.innerHTML = "";
        
        if((donation) || donation < 0){
            error.innerHTML = "Invalid"
            return;
        }

        const percentGoal = donation/goal * 100;
        console.log(percentGoal + "%" );
        document.querySelector(":root").style.setProperty("--funds", percentGoal + "%" );

    }