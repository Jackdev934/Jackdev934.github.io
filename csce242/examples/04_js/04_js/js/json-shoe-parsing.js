const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
       return response.json();
    }
    catch (error) {
        console.log("sorry");

    }
};

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.forEach(()=>{

        const shoeList = document.getElementById("shoe-list");
        shoeList.innerHTML = "";

        const sketchers = ["name", "brand", "price" ,"material", "description", "rating", "reviews"];
        const asics = ["name", "brand", "price" ,"material", "description", "rating", "reviews"];
        const lasportiva = ["name", "brand", "price" ,"material", "description", "rating", "reviews"];
        const neutralizers = ["name", "brand", "price" ,"material", "description", "rating", "reviews"];

        sketchers.forEach((toy, i)=>{
            const li = document.createElement("li");
            li.innerHTML = toy;
            shoeList.append(li);
     });

     asics.forEach((toy, i)=>{
            const li = document.createElement("li");
            li.innerHTML = toy;
            shoeList.append(li);
     });

        lasportiva.forEach((toy, i)=>{
            const li = document.createElement("li");
            li.innerHTML = toy;
            shoeList.append(li);
     });

        neutralizers.forEach((toy, i)=>{
            const li = document.createElement("li");
            li.innerHTML = toy;
            shoeList.append(li);
     });
    
        console.log(shoe.name);
    });

};

showShoes();