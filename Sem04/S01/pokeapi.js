const callApi = () => {
    try{
        const response = fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        console.log(response);
    } catch (error){
        console.log(error);
    }

}   

callApi();