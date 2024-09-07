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
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwVLjywLwugGUr4X75Lr7q1n_F6xKRcl0ChMN26zc1S2yGa_l172AVeiAEPo9-jBv6v/exec';
  
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      alert(data); // Mensaje de éxito
      obtenerDatos();
    })
    .catch(error => console.error('Error al enviar los datos:', error));
  });
  
  function obtenerDatos() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwVLjywLwugGUr4X75Lr7q1n_F6xKRcl0ChMN26zc1S2yGa_l172AVeiAEPo9-jBv6v/exec'; // Mismo URL del script
  
    fetch(scriptURL)
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
  
