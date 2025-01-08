const categories = document.getElementById('categories');
const toggleButton = document.getElementById('toggleButton');
let isStickyActive = false; // Sticky funksiyasining dastlabki holati
let isManualToggle = false; // Tugma orqali faollashtirilgan flag

// Sticky funksiyani yoqish yoki o'chirish
function activateSticky(state) {
    isStickyActive = state; // Sticky funksiyasi holatini yangilash
    if (isStickyActive) {
        categories.classList.add('sticky'); // Sticky klassini qo'shish
        toggleButton.textContent = 'Kategoriya'; // Tugma matnini o'zgartirish
    } else {
        categories.classList.remove('sticky'); // Sticky klassini olib tashlash
        toggleButton.textContent = 'Kategoriya oʻchiq'; // Tugma matnini tiklash
    }
}

// Scroll holatini kuzatish
window.addEventListener('scroll', () => {
    const rect = categories.getBoundingClientRect();

    // Kategoriya ekranda ko'rinishda bo'lsa yoki yetgan bo'lsa
    if (rect.top <= 0 && rect.bottom >= 0) {
        if (!isManualToggle) {
            activateSticky(true); // Sticky funksiyani avtomatik yoqish
        }
    } else {
        if (!isManualToggle) {
            activateSticky(false); // Sticky funksiyani avtomatik o'chirish
        }
    }
});

// Tugma bosilganda sticky funksiyasini boshqarish
toggleButton.addEventListener('click', () => {
    isManualToggle = !isManualToggle; // Tugma orqali faollashtirilgan flagni almashtirish
    activateSticky(isManualToggle); // Sticky holatini boshqarish
});