const getBreweries = async () => {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    const response = await fetch(url);
    return response.json();

    try{
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log("Issue fetching brewery data");
    }
}

const showBreweries = async () => {
    const breweries = await getBreweries();
    const breweriesSection = document.getElementById("breweries");

    breweries.forEach((pub)=>{
        const section = document.createElement("section");
        breweriesSection.append(section);
        section.classList.append("brewery");

        const h3 = document.createElement("h3");
        section.append(h3);
        const a = document.createElement("a");
        h3.append(a);
        a.innerHTML = pub.name;
        a.href = pub.website_url;
    });
};

showBreweries();