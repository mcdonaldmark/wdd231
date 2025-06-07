const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(n) {

    testimonials.forEach(testimonial => testimonial.style.display = 'none');

    testimonials[n].style.display = 'block';
}

function nextTestimonial() {
    index++;
    if (index >= testimonials.length) {
        index = 0;
    }
    showTestimonial(index);
}

showTestimonial(index);

setInterval(nextTestimonial, 6000);