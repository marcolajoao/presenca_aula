document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    if (name) {
        const link = document.createElement('a');
        link.href = 'images/myimage.jpg'; // Caminho da sua imagem no repositório
        link.download = `image_for_${name}.jpg`; // Nome do arquivo de download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Please enter your name.');
    }
});
