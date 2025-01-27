
const element = document.getElementById("typewriter");
    const text = "Web Developer!";
    let index = 0;

    // Function to type characters
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed for typing
      } else {
        setTimeout(backspace, 1000); // Wait before backspacing
      }
    }

    // Function to backspace characters
    function backspace() {
      if (index > 0) {
        element.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(backspace, 100); // Adjust speed for backspacing
      } else {
        setTimeout(type, 1000); // Restart the typing effect
      }
    }

    // Start the typing effect
    type();




function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});