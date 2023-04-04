//borger icon
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>
    {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

//scroll section active
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// navLinks.forEach(links =>
//     {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//     });
// window.onscroll = ()=>
//     {
//         sections.forEach(sec =>
//             {
//                 let top = window.scrollY;
//                 let offset = sec.offsetTop -150;
//                 let heigt = sec.offsetHeight;
//                 let id = sec.getAttribute('id');

//                 if( top>= offset && top < offset + heigt)
//                     {
//                         navLinks.forEach(links =>
//                             {
//                                 links.classList.remove('active');
//                                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//                             });
//                     };
//             });
//         //scroll section sticky navbar
//         let header = document.querySelector('header');
//         header.classList.toggle('sticky', window.scrollY >100);
//         //remove toggle icon and navbar when click navbar link (scroll)
//         menuIcon.classList.remove('bx-x');
//         navbar.classList.remove('active');
//     };

//scroll reveal
// ScrollReveal(
//     { 
//         // reset: true,
//         distance: '80px',
//         duration: 2000,
//         delay: 200,
//     });
// ScrollReveal().reveal('.homeContent, .heading', { origin:'top' });
// ScrollReveal().reveal('.homeImg, .servicesContainer, .portfolioBox, .contact form', { origin:'bottom' });
// ScrollReveal().reveal('.homeContent h1, .aboutImg', { origin:'left' });
// ScrollReveal().reveal('.homeContent p, .aboutContent', { origin:'right' });

//typed js
let typed = new Typed('.multiple-text', {
        strings: ['Front-end Web Developer', 'Back-end Web Developer', 'Fullstack Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
console.log(typed);