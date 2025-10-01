//assign all perameters to the object

class Dog{ 
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        //header 
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title; 
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x25BC;";
        h3.append(arrow);

        //body 
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        const divcol1 = document.createElement("div");
        columnContainer.append(divcol1) 
        divcol1.append(this.picture(this.pic));

        const p = document.createElement("p");
        p.innerHTML = this.breed + "<br> " + "<strong>Age:</strong>" +this.age + " years old <br>" + "<strong>Size:</strong>"+ this.size;
        section.append(p);

        const divcol2 = document.createElement("div");
        columnContainer.append(divcol2) 
        

        const divcol3 = document.createElement("div");
        columnContainer.append(divcol3)

        arrow.onclick = (e) => {
            e.preventDefault();
            divcol2.classList.toggle ("transparent");
        }
    
        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }
}

const dogs = [];
dogs.push(new Dog ("Coco", "Yorkie" , "Black", 1, "small",  "yorkie.jpg"));
dogs.push(new Dog ("Max", "Golden Retriever" , "Yellow", 6 , "large",  "golden-retriever.jpg"));
dogs.push(new Dog ("Bella", "Pit bull" , "White", 3, "medium", "pitt-bull.jpg"));

//on page load 
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});