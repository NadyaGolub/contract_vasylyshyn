window.onload = function() {
  const downloadButton = document.getElementById("download");
  downloadButton.addEventListener("click", () => {
    const invoice = document.getElementById("invoice"); // Отримуємо елемент з ID "invoice"

    html2pdf().from(invoice).set({ // Використовуємо змінну invoice
      margin: [10, 10, 10, 10],
      filename: 'contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2.5,
        allowTaint: true,
        useCORS: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'css' }
    }).save();
  });
};