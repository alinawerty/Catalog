const gameForm = document.getElementById("gameForm");
const formMessage = document.getElementById("formMessage");
const preview = document.getElementById("preview");
const previewContent = document.getElementById("previewContent");

gameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const platform = document.getElementById("platform").value;
    const genre = document.getElementById("genre").value;
    const status = document.getElementById("status").value;
    const ratingValue = document.getElementById("rating").value;
    const review = document.getElementById("review").value.trim();

    if (title.length < 2) {
        formMessage.textContent = "Введите название игры (минимум 2 символа).";
        preview.hidden = true;
        return;
    }

    if (!platform || !genre || !status) {
        formMessage.textContent = "Выберите платформу, жанр и статус.";
        preview.hidden = true;
        return;
    }

    const rating = ratingValue === "" ? "" : Number(ratingValue);
    if (rating !== "" && (rating < 1 || rating > 10 || !Number.isInteger(rating))) {
        formMessage.textContent = "Оценка должна быть целым числом от 1 до 10.";
        preview.hidden = true;
        return;
    }

    const newGame = {
        id: games.length + 1,
        title: title,
        platform: platform,
        genre: genre,
        status: status,
        rating: rating,
        review: review
    };

    formMessage.textContent = "Данные проверены. Ниже показан предпросмотр.";
    previewContent.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = newGame.title;

    const platformText = document.createElement("p");
    platformText.textContent = "Платформа: " + newGame.platform;

    const genreText = document.createElement("p");
    genreText.textContent = "Жанр: " + newGame.genre;

    const statusText = document.createElement("p");
    statusText.textContent = "Статус: " + newGame.status;

    const ratingText = document.createElement("p");
    ratingText.textContent = "Оценка: " + (newGame.rating === "" ? "не указана" : newGame.rating + " из 10");

    const reviewText = document.createElement("p");
    reviewText.textContent = "Отзыв: " + (newGame.review || "не добавлен");

    previewContent.appendChild(heading);
    previewContent.appendChild(platformText);
    previewContent.appendChild(genreText);
    previewContent.appendChild(statusText);
    previewContent.appendChild(ratingText);
    previewContent.appendChild(reviewText);

    preview.hidden = false;
});
