// Cargar los datos desde el archivo JSON
fetch('/Data/data_2023.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Preparar los datos para la gráfica
        const labels = data.meses; // Meses
        const salesData = data.totales; // Totales de ventas

        // Crear la gráfica circular
        const ctx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Ventas Mensuales',
                    data: salesData,
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
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));

    // Función de Log Out
    document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige a la página de inicio
    });