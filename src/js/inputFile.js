const inputFile = () => {
    const inputField = document.querySelector('.input-file__field');

    inputField?.addEventListener('change', () => {
        const file = inputField.files[0];
        file
            ? inputField.closest('.input-file').querySelector('.input-file__text').innerHTML = file.name
            : inputField.closest('.input-file').querySelector('.input-file__text').innerHTML = 'Формати файлів: doc, docx, rtf, txt, odt, pdf (1 Mб максимум)';
    });
}

export default inputFile;

