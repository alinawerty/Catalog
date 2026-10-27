const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");
const statusFilter = document.getElementById("statusFilter");
const resultCount = document.getElementById("resultCount");

function showGames(list) {
    gameList.innerHTML = "";

    if (list.length === 0) {
        gameList.textContent = "Ничего не найдено.";
        resultCount.textContent = "Найдено игр: 0";
        return;
    }

    resultCount.textContent = "Найдено игр: " + list.length;

    list.forEach(function(game) {
        const card = document.createElement("article");
        card.className = "game-card";

        const title = document.createElement("h3");
        title.textContent = game.title;

        const genre = document.createElement("p");
        genre.textContent = "Жанр: " + game.genre;

        const platform = document.createElement("p");
        platform.textContent = "Платформа: " + game.platform;

        const status = document.createElement("p");
        status.textContent = "Статус: " + game.status;

        const link = document.createElement("a");
        link.href = "item.html?id=" + game.id;
        link.textContent = "Подробнее";

        card.appendChild(title);
        card.appendChild(genre);
        card.appendChild(platform);
        card.appendChild(status);
        card.appendChild(link);
        gameList.appendChild(card);
    });
}

function filterGames() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const selectedStatus = statusFilter.value;

    const filteredGames = games.filter(function(game) {
        const titleMatches = game.title.toLowerCase().includes(searchText);
        const genreMatches = selectedGenre === "all" || game.genre === selectedGenre;
        const statusMatches = selectedStatus === "all" || game.status === selectedStatus;

        return titleMatches && genreMatches && statusMatches;
    });

    showGames(filteredGames);
}

searchInput.addEventListener("input", filterGames);
genreFilter.addEventListener("change", filterGames);
statusFilter.addEventListener("change", filterGames);

showGames(games);
