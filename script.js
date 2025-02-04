const elements = document.querySelectorAll('.name');

elements.forEach(element => {
  element.style.boxSizing = 'border-box'; // Важливо для коректного розрахунку ширини

  element.addEventListener('input', () => {
    let width = element.offsetWidth; // Отримуємо поточну ширину елемента

    // Перевіряємо, чи ширина відповідає вмісту
    if (element.scrollWidth > width) {
      width = element.scrollWidth; // Розширюємо, якщо вміст більший за поточну ширину
    } else {
      // Звужуємо, але не менше мінімальної ширини
      const minWidth = 100; // Замініть на бажану мінімальну ширину
      width = minWidth;
    }

    element.style.width = width + 'px';
  });
});