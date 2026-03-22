// ตัวอย่าง: ฟังก์ชันแสดงข้อความต้อนรับเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    console.log("Daranakee Website is ready!");
    
    // คุณสามารถเพิ่มลูกเล่น JS อื่นๆ ตรงนี้ได้ เช่น 
    // การทำ Smooth Scroll หรือการดักจับ Event ต่างๆ
});
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // เลื่อนลง -> ซ่อนแถบเมนู
        navbar.style.top = "-100px"; 
    } else {
        // เลื่อนขึ้น -> แสดงแถบเมนู
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const threshold = 50; // ระยะห่างจากขอบบน (pixel) ที่จะให้เมนูโผล่มาตอนเอาเมาส์ไปจ่อ

// 1. ตรวจจับการเลื่อนหน้าจอ (Scroll)
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // เลื่อนลง -> ซ่อนเมนู
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
    } else {
        // เลื่อนขึ้น -> โชว์เมนู
        navbar.classList.add('navbar-visible');
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = scrollTop;
});

// 2. ตรวจจับตำแหน่งเมาส์ (Mouse Move)
document.addEventListener('mousemove', function(e) {
    // ถ้าตำแหน่งเมาส์ (y) อยู่ใกล้ขอบบนน้อยกว่าค่า threshold
    if (e.clientY < threshold) {
        navbar.classList.add('navbar-visible');
        navbar.classList.remove('navbar-hidden');
    }
});
const tab = document.getElementById('nav-trigger-tab');
const navbar = document.querySelector('.navbar');

// ฟังก์ชันเปิดเมนู
function showNavbar() {
    navbar.classList.add('show-nav');
    tab.classList.add('hide-tab');
}

// ฟังก์ชันปิดเมนู (เมื่อเมาส์ออกจากเมนู)
function hideNavbar() {
    navbar.classList.remove('show-nav');
    tab.classList.remove('hide-tab');
}

// เมื่อเอาเมาส์ไปจี้ที่แท็บ หรือ คลิก
tab.addEventListener('mouseenter', showNavbar);
tab.addEventListener('click', showNavbar);

// เมื่อเอาเมาส์ออกจากโซน Navbar ให้ซ่อนกลับไปที่เดิม
navbar.addEventListener('mouseleave', hideNavbar);

// แถม: ถ้าเลื่อนลงเยอะๆ ให้ปิดอัตโนมัติ
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) hideNavbar();
});