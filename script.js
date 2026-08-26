// =============================================================
// CONFIGURACIÓN - CAMBIA ESTOS DATOS AQUÍ
// =============================================================
const CONFIG = {
    fechaBoda: new Date('2027-01-23T19:00:00'),
    novios: 'Alexander y Astrid',
    musica: 'assets/music/cancion.mp3',
    fotos: [
        'assets/img/foto1.jpg',
        'assets/img/foto2.jpg',
        'assets/img/foto3.jpg',
        'assets/img/foto4.jpg'
    ]
};

// =============================================================
// 1. CUENTA REGRESIVA CON ANIMACIÓN
// =============================================================
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = CONFIG.fechaBoda.getTime() - ahora;

    if (distancia <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Animar números cuando cambian
    animarNumero('days', dias);
    animarNumero('hours', horas);
    animarNumero('minutes', minutos);
    animarNumero('seconds', segundos);
}

function animarNumero(id, valor) {
    const elemento = document.getElementById(id);
    const valorActual = parseInt(elemento.textContent);
    if (valorActual !== valor) {
        elemento.textContent = String(valor).padStart(2, '0');
        // Efecto de escala al cambiar
        elemento.style.transform = 'scale(1.3)';
        elemento.style.color = '#e8d5a3';
        setTimeout(() => {
            elemento.style.transform = 'scale(1)';
            elemento.style.color = '#b8963e';
        }, 300);
    }
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();

// =============================================================
// =============================================================
// PÉTALOS FLOTANTES - VERSIÓN REALISTA PREMIUM
// =============================================================
function crearPetales() {
    const container = document.getElementById('petals-container');
    
    if (!container) {
        console.error('❌ No se encontró #petals-container');
        return;
    }
    
    // Limpiar pétalos existentes
    container.innerHTML = '';
    
    console.log('🌸 Creando pétalos realistas...');
    
    const cantidad = 35; // Más pétalos para un efecto más natural
    
    // Colores que combinan con la temática botánica
    const colores = [
        { bg: 'rgba(201, 160, 155, 0.85)', shadow: 'rgba(201, 160, 155, 0.3)' },  // Rosa viejo
        { bg: 'rgba(232, 200, 197, 0.80)', shadow: 'rgba(232, 200, 197, 0.3)' },  // Rosa pálido
        { bg: 'rgba(245, 237, 228, 0.75)', shadow: 'rgba(245, 237, 228, 0.2)' },  // Beige
        { bg: 'rgba(212, 175, 55, 0.60)', shadow: 'rgba(212, 175, 55, 0.3)' },    // Dorado
        { bg: 'rgba(250, 240, 238, 0.80)', shadow: 'rgba(250, 240, 238, 0.2)' },  // Blanco rosado
        { bg: 'rgba(232, 180, 168, 0.75)', shadow: 'rgba(232, 180, 168, 0.3)' },  // Salmón
        { bg: 'rgba(215, 190, 185, 0.70)', shadow: 'rgba(215, 190, 185, 0.2)' },  // Rosa grisáceo
        { bg: 'rgba(240, 220, 210, 0.80)', shadow: 'rgba(240, 220, 210, 0.2)' }   // Nude
    ];

    for (let i = 0; i < cantidad; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // ===== POSICIÓN =====
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = '-30px';
        
        // ===== TAMAÑO VARIADO (más natural) =====
        const size = 12 + Math.random() * 22;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // ===== COLOR =====
        const color = colores[Math.floor(Math.random() * colores.length)];
        petal.style.background = color.bg;
        petal.style.boxShadow = `0 0 20px ${color.shadow}`;
        
        // ===== FORMA REALISTA DE PÉTALO =====
        const forma = Math.random();
        if (forma < 0.25) {
            // Pétalo redondeado
            petal.style.borderRadius = '50% 0 50% 50%';
        } else if (forma < 0.50) {
            // Pétalo alargado
            petal.style.borderRadius = '0 50% 50% 50%';
            petal.style.width = (size * 0.7) + 'px';
            petal.style.height = (size * 1.3) + 'px';
        } else if (forma < 0.75) {
            // Pétalo con forma de gota
            petal.style.borderRadius = '50% 0 50% 50%';
            petal.style.width = (size * 0.8) + 'px';
            petal.style.height = (size * 1.2) + 'px';
        } else {
            // Pétalo irregular
            petal.style.borderRadius = '50% 50% 0 50%';
            petal.style.width = (size * 1.1) + 'px';
            petal.style.height = (size * 0.9) + 'px';
        }
        
        // ===== ROTACIÓN INICIAL =====
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // ===== OPACIDAD =====
        petal.style.opacity = 0.4 + Math.random() * 0.5;
        
        // ===== ANIMACIÓN =====
        // Duración de caída (10-20 segundos - más lento para ser realista)
        petal.style.animationDuration = (12 + Math.random() * 12) + 's';
        
        // Retraso (0-12 segundos)
        petal.style.animationDelay = (Math.random() * 12) + 's';
        
        // ===== EFECTO DE BRILLO (reflejo de luz) =====
        if (Math.random() > 0.6) {
            petal.style.background = `linear-gradient(135deg, ${color.bg}, rgba(255,255,255,0.3))`;
        }
        
        // ===== PEQUEÑA MANCHA (más realista) =====
        if (Math.random() > 0.7) {
            petal.style.border = '1px solid rgba(255,255,255,0.2)';
        }
        
        container.appendChild(petal);
    }
    
    console.log(`✅ ${cantidad} pétalos realistas creados`);
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(crearPetales, 500);
});

// =============================================================
// 4. ANIMACIONES DE ENTRADA ESCALONADAS
// =============================================================
function animarEntradaEscalonada() {
    const elementos = document.querySelectorAll(
        '.hero-content, .detalles-card, .countdown-grid, .galeria-item, .rsvp-card'
    );

    elementos.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.95)';
        el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
        }, 300 + (index * 200));
    });
}

// =============================================================
// 5. ANIMACIONES CON INTERSECTION OBSERVER (MEJORADO)
// =============================================================
function animarAlScroll() {
    const elementos = document.querySelectorAll(
        '.detalles-card, .countdown-grid, .galeria-item, .rsvp-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elementos.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px) scale(0.9)';
        observer.observe(el);
    });
}

// =============================================================
// 6. EFECTO DE BRILLO EN TÍTULOS (SHIMMER)
// =============================================================
function aplicarShimmer() {
    const titulos = document.querySelectorAll('.hero-names, .detalles-header h2, .countdown-header h2, .galeria-header h2, .rsvp-card h2');
    
    titulos.forEach(titulo => {
        titulo.style.background = 'linear-gradient(135deg, #2d4a3b 0%, #b8963e 25%, #e8d5a3 50%, #b8963e 75%, #2d4a3b 100%)';
        titulo.style.backgroundSize = '300% 100%';
        titulo.style.webkitBackgroundClip = 'text';
        titulo.style.webkitTextFillColor = 'transparent';
        titulo.style.backgroundClip = 'text';
        titulo.style.animation = 'shimmer 4s ease-in-out infinite';
    });
}

// Agregar la animación shimmer al CSS
const styleShimmer = document.createElement('style');
styleShimmer.textContent = `
    @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(styleShimmer);

// =============================================================
// 7. PARALLAX EN EL HERO (EFECTO DE MOVIMIENTO)
// =============================================================
function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
}

// =============================================================
// =============================================================
// MÚSICA DESDE YOUTUBE - VERSIÓN CORREGIDA
// =============================================================

// 📌 CONFIGURACIÓN - CAMBIA EL ID AQUÍ
const YOUTUBE_VIDEO_ID = 'lPQK4Misu-A'; // <--- ID CORRECTO (con L minúscula)

let player = null;
let musicaActivada = false;
let playerReady = false;

// =============================================================
// FUNCIÓN QUE CARGA LA API DE YOUTUBE
// =============================================================
window.onYouTubeIframeAPIReady = function() {
    console.log('🎵 API de YouTube cargada');
    
    // Verificar que el contenedor existe
    const container = document.getElementById('youtube-player');
    if (!container) {
        console.error('❌ No se encontró #youtube-player');
        return;
    }
    
    // Crear el reproductor
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'loop': 1,
            'playlist': YOUTUBE_VIDEO_ID,
            'rel': 0,
            'showinfo': 0,
            'iv_load_policy': 3,
            'modestbranding': 1
        },
        events: {
            'onReady': function(event) {
                playerReady = true;
                console.log('✅ Reproductor de YouTube listo');
                console.log('🎵 Canción:', YOUTUBE_VIDEO_ID);
            },
            'onStateChange': function(event) {
                if (event.data === YT.PlayerState.ENDED) {
                    player.playVideo();
                }
            }
        }
    });
};

// =============================================================
// CONTROL DEL BOTÓN DE MÚSICA
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicControl');
    
    if (!musicBtn) {
        console.error('❌ No se encontró el botón #musicControl');
        return;
    }
    
    musicBtn.addEventListener('click', function(e) {
        if (!playerReady) {
            alert('⏳ La música está cargando, espera un momento...');
            return;
        }
        
        if (musicaActivada) {
            // Pausar
            player.pauseVideo();
            this.classList.remove('playing');
            this.querySelector('i').className = 'fas fa-music';
            this.querySelector('.music-tooltip').textContent = 'Reproducir música';
        } else {
            // Reproducir
            player.playVideo();
            this.classList.add('playing');
            this.querySelector('i').className = 'fas fa-music fa-beat';
            this.querySelector('.music-tooltip').textContent = 'Pausar música';
        }
        musicaActivada = !musicaActivada;
    });
    
    console.log('🎵 Control de música inicializado');
});
// Inicializar la API de YouTube (se llama automáticamente)
// La función onYouTubeIframeAPIReady se ejecuta cuando la API carga

// =============================================================
// 9. GALERÍA CON LIGHTBOX (CON ANIMACIÓN)
// =============================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-nav.prev');
const nextBtn = document.querySelector('.lightbox-nav.next');
let currentIndex = 0;
const galleryItems = document.querySelectorAll('.galeria-item');
const images = [];

galleryItems.forEach((item, index) => {
    const imgSrc = item.querySelector('img').src;
    images.push(imgSrc);

    item.addEventListener('click', function() {
        currentIndex = index;
        openLightbox(images[currentIndex]);
    });
});

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    lightboxImg.style.transform = 'scale(0.5)';
    lightboxImg.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        lightboxImg.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        lightboxImg.style.transform = 'scale(1)';
        lightboxImg.style.opacity = '1';
    }, 50);
}

function closeLightbox() {
    lightboxImg.style.transform = 'scale(0.5)';
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }, 300);
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    
    lightboxImg.style.transform = 'scale(0.5)';
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = images[currentIndex];
        setTimeout(() => {
            lightboxImg.style.transform = 'scale(1)';
            lightboxImg.style.opacity = '1';
        }, 100);
    }, 200);
}

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => changeImage(-1));
nextBtn.addEventListener('click', () => changeImage(1));

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

lightbox.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

// =============================================================
// 10. EFECTO RIPPLE EN BOTONES
// =============================================================
function initRipple() {
    document.querySelectorAll('.btn-maps, .btn-rsvp, .music-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// =============================================================
// 11. SCROLL SUAVE
// =============================================================
document.querySelector('.hero-scroll')?.addEventListener('click', function() {
    document.getElementById('detalles').scrollIntoView({ behavior: 'smooth' });
});

// =============================================================
// 12. INICIALIZAR TODO
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Ejecutar en orden
    setTimeout(animarEntradaEscalonada, 100);
    setTimeout(animacionEscritura, 800);
    setTimeout(aplicarShimmer, 1200);
    initParallax();
    animarAlScroll();
    initRipple();
    initMusica();

    console.log('🌸 Invitación de boda cargada con éxito');
    console.log(`💍 ${CONFIG.novios} - ${CONFIG.fechaBoda.toLocaleDateString('es-ES')}`);
});

// // DIAGNÓSTICO: Verificar contenedor de pétalos
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('petals-container');
//     if (container) {
//         console.log('✅ Contenedor de pétalos encontrado');
//         // Crear un pétalo de prueba visible
//         const test = document.createElement('div');
//         test.style.cssText = `
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             width: 50px;
//             height: 50px;
//             background: red;
//             border-radius: 50%;
//             z-index: 999;
//             transform: translate(-50%, -50%);
//         `;
//         container.appendChild(test);
//         console.log('🔴 Pétalo de prueba rojo agregado - ¿lo ves?');
//     } else {
//         console.error('❌ No se encontró #petals-container en el HTML');
//     }
// });