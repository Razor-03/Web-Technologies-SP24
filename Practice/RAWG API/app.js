const apiKey = "API_KEY";

const getGame = async () => {
    const res = await axios.get(`https://api.rawg.io/api/games/5?key=${apiKey}`);
    console.log(res.data);
    return res.data;
}

const addGame = async () => {
    const gameInfo = await getGame();
    const ul = document.querySelector("#gameList");
    const li = document.createElement("li");
    li.append(gameInfo.name);
    li.append(gameInfo.description);
    ul.append(li);
}