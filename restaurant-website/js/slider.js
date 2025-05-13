document.addEventListener('DOMContentLoaded', function() {
    // Select all slides, buttons, and dots
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show loading animation while images load
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loading);
    
    // Hide loading animation when all images are loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loading.classList.add('hidden');
        }, 1000);
    });
    
    // Initialize the slider
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate corresponding dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-rotate slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-rotation when hovering over slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Show first slide initially
    showSlide(currentSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});