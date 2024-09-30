let currentSlide = 0;

const brands = ["Sigma", "Alpha", "Beta"];
const years = [2010, 2020, 2023];
const locations = ["Bologna", "Bologna", "Milano"];
const descriptions = [
    "Hydraulic Turbine",
    "Gelato Machine",
    "Terracotta Mold",
    "Melted Brick"
];

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.children.length;

    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Retorna ao primeiro slide se exceder
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Vai para o último slide se menor que zero
    }

    const offset = -currentSlide * 100; // Cálculo de offset
    carouselImages.style.transform = `translateX(${offset}%)`; // Aplica a transformação
    updateInfoTable(); // Atualiza a tabela de informações
    updateDots(); // Atualiza os pontos
}

function nextSlide() {
    currentSlide++; // Avança para o próximo slide
    updateCarousel();
}

function prevSlide() {
    currentSlide--; // Retorna ao slide anterior
    updateCarousel();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    const line = document.querySelector('.line');

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active'); // Adiciona a classe 'active' para o ponto correspondente
            dot.classList.remove('inactive'); // Remove a classe 'inactive' se estiver ativa
            line.style.backgroundColor = 'black'; // Muda a linha para a cor ativa
        } else {
            dot.classList.remove('active'); // Remove a classe 'active' para os pontos não correspondentes
            dot.classList.add('inactive'); // Adiciona a classe 'inactive'
        }
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex; // Atualiza o índice do slide atual
    updateCarousel(); // Atualiza o carrossel
    updateInfoTable(); // Atualiza a tabela de informações
    updateDots(); // Atualiza os pontos
}

function updateInfoTable() {
    // Atualiza a tabela de informações
    document.getElementById('brandInfo').innerText = brands[currentSlide];
    document.getElementById('yearInfo').innerText = years[currentSlide];
    document.getElementById('locationInfo').innerText = locations[currentSlide];

    // Atualiza a descrição da imagem
    const descriptionElement = document.getElementById('imageDescription');
    descriptionElement.innerText = descriptions[currentSlide];
}

function toggleInfoTable() {
    const infoTable = document.getElementById('infoTable');
    if (infoTable.style.display === 'none') {
        infoTable.style.display = 'block'; // Mostra a tabela
        updateInfoTable(); // Atualiza a tabela ao mostrar
    } else {
        infoTable.style.display = 'none'; // Oculta a tabela
    }
}