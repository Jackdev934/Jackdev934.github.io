const getCocktail = async () =>{
    try {
    return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch(error){
        console.log(error);
    }
};

const showCocktail = async() =>{
    const drinks = await getCocktail();

    showCocktail.forEach((drinks) =>{
        document.getElementById("cocktails").append(getCocktailSection(cocktail));
    });
};

const getCocktailSection = (drinks) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = drinks.strDrink;
    section.append(h3);





    return section;
};

showCocktail();