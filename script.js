fetch("https://jsonplaceholder.typicode.com/photos")
  .then(response => response.json())
  .then(data => {
    const images = data.slice(0, 12);
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = images.map(image => `
      <div class="image">
        <img src="${image.url}" alt="${image.title}">
      </div>
    `).join("");
  })