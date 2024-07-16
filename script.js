document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    if (name) {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);

            // Configurações de texto
            context.font = '40px Arial';
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.fillText(name, canvas.width / 2, canvas.height - 50);

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');
            link.download = `image_with_${name}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        image.src = 'certificado_padrao.jpg';
    } else {
        alert('Please enter your name.');
    }
});
