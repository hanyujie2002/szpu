import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
  AOS.init({
    once: false,
  });
});
