    // Hacer una solicitud a la API utilizando fetch
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      // Actualizar dinámicamente las imágenes
      data.forEach((image, index) => {
        const imageUrl = image.url;
        document.querySelector(`.box-${index + 1} img`).src = imageUrl;
      });
    })
    .catch(error => {
      console.error('Error al obtener imágenes desde la API', error);
    });
