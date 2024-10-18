document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav a');
    const content = document.getElementById('content');

    // Función para cargar contenido dinámicamente
    const loadPage = (page) => {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar la página: ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html; // Cargar el HTML en el contenedor
                // Cargar el archivo JS correspondiente a la página, si es necesario
                const script = document.createElement('script');
                script.src = page.replace('.html', '.js'); // Cargar el JS correspondiente
                document.body.appendChild(script);
                
                // Verificar si es necesario cargar Chart.js en alguna página
                if (page.includes('dashboard')) {
                    loadDashboardCharts();
                }
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    };

    // Cargar la página inicial (Dashboard)
    loadPage('DASHBOARD/dashboard.html');

    // Escuchar eventos de clic en los enlaces de navegación
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir la recarga de página
            const page = link.getAttribute('data-section'); // Obtener la ruta desde data-section
            loadPage(page); // Cargar la página correspondiente
        });
    });
});

// Función para cargar y configurar los gráficos en el dashboard
const loadDashboardCharts = () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Ventas Mensuales',
                data: [100, 200, 300, 400, 500, 600],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Composición de Ventas Mensuales'
                }
            }
        }
    });
};
