document.addEventListener('DOMContentLoaded', function () {

    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    }
    setInterval(showNextTestimonial, 5000);

    
    let animado = document.querySelectorAll('.animation')
    function scroll(){
        const scrollTop = document.documentElement.scrollTop
        for(let i = 0; i < animado.length; i++){
            let alturaAnimado = animado[i].offsetTop
            if(alturaAnimado - 800 < scrollTop){
                animado[i].style.transform = 'translateX(0)'
                animado[i].style.transition = '1s'

            }
        }

    }
    window.addEventListener('scroll', scroll)

});