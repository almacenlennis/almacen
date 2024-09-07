document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const data = {
      nombre: nombre,
      correo: correo,
      mensaje: mensaje
    };
    
    // Reemplaza esta URL con la URL de tu Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJu3NyN73E8gzUev2F1BK4YGZ3X6w2kgd1pwBY_2gty0-FbiHxxVczp_ldcDcn5C_L/exec';
  
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      // mode: 'no-cors'
    })
    .then(response => response.text())
    .then(data => {
      alert(data); // Mensaje de éxito
      obtenerDatos();
    })
    .catch(error => console.error('Error al enviar los datos:', error));
  });
  

  function obtenerDatos() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJu3NyN73E8gzUev2F1BK4YGZ3X6w2kgd1pwBY_2gty0-FbiHxxVczp_ldcDcn5C_L/exec'; // Mismo URL del script
  
    fetch(scriptURL, {
      // mode: 'no-cors',
    })
      .then(response => response.json())
      .then(data => {
        const lista = document.getElementById('savedData');
        lista.innerHTML = ''; // Limpiar lista antes de agregar nuevos datos
        
        data.forEach(row => {
          const listItem = document.createElement('li');
          listItem.textContent = `Nombre: ${row[0]}, Correo: ${row[1]}, Mensaje: ${row[2]}`;
          lista.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }
  
  // Cargar los datos al inicio
  obtenerDatos();
  
