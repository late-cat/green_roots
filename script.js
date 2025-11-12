const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}})},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const navToggle=document.querySelector('.nav-toggle');
const navbar=document.querySelector('.navbar');
if(navToggle){navToggle.addEventListener('click',()=>{navbar.classList.toggle('open')})}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navbar.classList.remove('open')}));
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const video=document.getElementById('heroVideo');
if(reduceMotion&&video){video.removeAttribute('autoplay');video.pause()}