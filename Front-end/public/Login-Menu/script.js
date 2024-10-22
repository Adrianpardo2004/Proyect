// Función para mostrar el toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Inicializar Partículas
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#0000ff" // Cambiado a azul
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8, // Tamaño más grande
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Escuchar el evento de envío del formulario de registro
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const name = event.target.elements[0].value; // Nombre
    const email = event.target.elements[1].value; // Email
    const password = event.target.elements[2].value; // Contraseña

    // Guardar en localStorage
    localStorage.setItem('userData', JSON.stringify({ name, email, password }));

    console.log('Datos de registro guardados:', { name, email, password }); // Mostrar en la consola
    showToast('Sign up successful!'); // Mostrar el toast de éxito
});

// Escuchar el evento de clic en el botón de "Log in"
document.getElementById('login-toggle').addEventListener('click', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Ocultar el formulario de registro
    signupForm.classList.remove('active');
    signupForm.classList.add('hidden');

    // Mostrar el formulario de inicio de sesión
    setTimeout(() => {
        loginForm.classList.add('active');
        loginForm.classList.remove('hidden');
    }, 500); // Tiempo de la animación
});

// Escuchar el evento de envío del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const email = event.target.elements[0].value; // Email
    const password = event.target.elements[1].value; // Contraseña

    // Recuperar datos del localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Verificar si los datos coinciden
    if (userData && userData.email === email && userData.password === password) {
        console.log('Inicio de sesión exitoso');
        showToast('Login successful!'); // Mostrar el toast de éxito
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        setTimeout(() => {
            window.location.href = '../DASHBOARD/dashboard.html'; // Cambia la ruta según sea necesario
        }, 3000); // Esperar 3 segundos antes de redirigir
    } else {
        console.log('Email o contraseña incorrectos');
        showToast('Email or password is incorrect.'); // Mostrar el toast de error
        // Aquí puedes mostrar un mensaje de error
    }
});

// Escuchar el evento de clic en el botón de "Sign up"
document.getElementById('signup-toggle').addEventListener('click', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Ocultar el formulario de inicio de sesión
    loginForm.classList.remove('active');
    loginForm.classList.add('hidden');

    // Mostrar el formulario de registro
    setTimeout(() => {
        signupForm.classList.add('active');
        signupForm.classList.remove('hidden');
    }, 500); // Tiempo de la animación
});
