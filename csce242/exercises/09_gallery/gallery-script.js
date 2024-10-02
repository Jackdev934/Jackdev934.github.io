//every 1 second go through and move the class of highlighted threw //
setInterval(()=>{
    let currentSection = document.querySelector(".items section.highlighted");
    

    //highlight first item 
    if(currentSection==null){
        document.querySelector(".items section").classList.add("highlighted");
        return;

    }

    let nextSection = currentSection.nextElementSibling;

    //hit end
    if(nextSection ==null){
        nextSection = document.querySelector(".item section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 500);

/*Prefered Solution
let count = 1;

setInterval(()=>{
    //remove highlighted from every section
    document.querySelectorAll(".items section").forEach((section)=>{
        section.classList.remove("highlighted");
        });

        //add highlighted to the section with current count
        document.querySelectorAll(`items section:nth-child(${count})`).classList.add("highlighted");

        count++;

        //end of list of sections reached
        if(count == document.querySelectorAll(".item section").length){
            count = 1;
        }

    },500);
*/