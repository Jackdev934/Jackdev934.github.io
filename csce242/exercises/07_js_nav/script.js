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


