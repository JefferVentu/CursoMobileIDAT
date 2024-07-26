const callApi = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0');

        if (response.status >= 200 && response<300){
            const data = await response.json();
            console.log(data);
        }
    }
    catch (error){
        console.log(error);
    }
}   

callApi();