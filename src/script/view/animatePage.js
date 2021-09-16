import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const animatePage = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('get-meals', {
    scrollTrigger: 'get-meals',
    opacity: 0,
    y: '-100vw',
    duration: 1.5,
    ease: 'expo',
  });
};

document.addEventListener('DOMContentLoaded', animatePage);
