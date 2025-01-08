// script.js
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const poems = document.querySelectorAll('.poem-card');

    poems.forEach(poem => {
        const title = poem.querySelector('h3').textContent.toLowerCase();
        const content = poem.querySelector('p').textContent.toLowerCase();
        const category = poem.dataset.category;

        if (title.includes(query) || content.includes(query) || category.includes(query)) {
            poem.style.display = 'block';
        } else {
            poem.style.display = 'none';
        }
    });
});


