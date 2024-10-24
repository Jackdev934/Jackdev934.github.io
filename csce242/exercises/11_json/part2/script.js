const getBrewery = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBrewery = async() => {
    const brewery = await getBrewery();

    brewery.forEach(()=>{
        const section = document.createElement("section");
        breweries.append(section);

        //create the heading 
        const a = document.createElement("a");
        a.href= brewery.website_url;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        //brewery type 
    });    
};
