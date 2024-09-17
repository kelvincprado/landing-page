// MENU
document.querySelector('.menu-opener').addEventListener('click', () => {
    if (document.querySelector('header nav').classList.contains('opened')) {
        document.querySelector('header nav').classList.remove('opened');
        document.querySelector('.close-icon').style.display = 'none';
        document.querySelector('.hamburguer-icon').style.display = 'flex';
    } else {
        document.querySelector('header nav').classList.add('opened');
        document.querySelector('.hamburguer-icon').style.display = 'none';
        document.querySelector('.close-icon').style.display = 'flex';
    }
});

// TESTIMONIALS
let testimonials = [
    { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: 'cbs.svg' },
    { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam."', origin: 'forbes.svg' },
    { quote: '"DogDev usa ingredientes simples e limbos em seus pratos."', origin: 'fox.svg' },
    { quote: '"Vejo você [João] como um verdadeiro herói."', origin: 'sharktank.svg' }
];
let testimonialQuote = document.querySelector('.testimonials .quote');
let testimonialIcons = document.querySelector('.testimonials .icons');

for (let tindex in testimonials) {
    let img = document.createElement('img');
    img.setAttribute('src', 'assets/images/' + testimonials[parseInt(tindex)].origin);
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        fillTestimonial(parseInt(tindex));
    });
    testimonialIcons.appendChild(img);
}

let currentTestimonial = 0;
let testimonialTimer;

const fillTestimonial = (index) => {
    clearTimeout(testimonialTimer);
    currentTestimonial = index;
    testimonialQuote.innerHTML = testimonials[currentTestimonial].quote;
    let imgs = testimonialIcons.querySelectorAll('img');
    
    for(let img of imgs) {      // há diferença entre o 'of' e 'in', nesse caso o of pega cada elemento de imgs, ou seja, as tags img contidas em testimonialIcons
        img.style.opacity = 0.2;
    }

    imgs[currentTestimonial].style.opacity = 1;
    testimonialTimer = setTimeout(nextTestimonial, 3000);
}

const nextTestimonial = () => {
    if (testimonials[currentTestimonial + 1]) {
        fillTestimonial(currentTestimonial + 1);
    } else {
        fillTestimonial(0);
    }
}

nextTestimonial();


// FAQ
let currentFaq = 0;
let faqItems = document.querySelectorAll('.faq .accordion .item');

faqItems.forEach((element, index) => {
    element.querySelector('.title').addEventListener('click', () => setFaq(index));
});

const setFaq = (index) => {
    currentFaq = index;

    if(faqItems[currentFaq].classList.contains('opened')) {
        faqItems[currentFaq].classList.remove('opened');
        return;
    }

    for(let items of faqItems) {
        items.classList.remove('opened');
    }

    faqItems[currentFaq].classList.add('opened');
}