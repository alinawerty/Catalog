const details = document.getElementById("gameDetails");
const params = new URLSearchParams(window.location.search);
const gameId = Number(params.get("id"));
const game = games.find(function(item) {
    return item.id === gameId;
});

if (!game) {
    details.innerHTML = "";
    const message = document.createElement("p");
    message.textContent = "Игра не найдена. Возможно, такой записи нет в каталоге.";
    details.appendChild(message);
} else {
    details.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = game.title;

    const platform = document.createElement("p");
    platform.textContent = "Платформа: " + game.platform;

    const genre = document.createElement("p");
    genre.textContent = "Жанр: " + game.genre;

    const status = document.createElement("p");
    status.textContent = "Статус: " + game.status;

    const rating = document.createElement("p");
    rating.textContent = "Оценка: " + (game.rating ? game.rating + " из 10" : "пока нет");

    const review = document.createElement("p");
    review.textContent = "Отзыв: " + (game.review || "Отзыв пока не добавлен.");

    details.appendChild(title);
    details.appendChild(platform);
    details.appendChild(genre);
    details.appendChild(status);
    details.appendChild(rating);
    details.appendChild(review);
}
