document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav a');
    const content = document.getElementById('content');

    // Función para cargar contenido
    const loadPage = (page) => {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar la página: ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html; // Cargar HTML en el contenedor
                // Aquí puedes incluir scripts adicionales si es necesario
                const script = document.createElement('script');
                script.src = page.replace('.html', '.js'); // Cargar el JS correspondiente
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    };

    // Cargar la sección inicial
    loadPage('DASHBOARD/dashboard.html'); // O 'dashboard.html' dependiendo de tu estructura

    // Escuchar eventos de clic en los enlaces
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const page = link.getAttribute('data-section'); // Obtener el atributo data-section
            loadPage(page); // Cargar la página correspondiente
        });
    });
});
