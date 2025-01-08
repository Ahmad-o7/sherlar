const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    toggleSticky(); // Tugma bosilganda funksiyani chaqirish
    if (toggleButton.textContent === 'Kategoriya') {
        toggleButton.textContent = 'Kategoriyani O‘chir'; // Tugma matnini yangilash
    } else {
        toggleButton.textContent = 'Kategoriya'; // Tugma matnini tiklash
    }
});