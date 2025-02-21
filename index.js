 document.querySelector('.cross').style.display = 'none';
 document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'
    },300);
   }
 })

 const phrases = [
    "MCA Graduate.",
    "Full Stack Developer.",
    "Sofware Engineer .",
    "Enthusiastic.",
  ];
  const typewriter = document.querySelector(".typewriter");

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const displayedText = isDeleting
      ? currentPhrase.slice(0, charIndex--)
      : currentPhrase.slice(0, charIndex++);

    typewriter.textContent = displayedText;

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500); // Pause before typing the next phrase
    } else {
      setTimeout(typeEffect, isDeleting ? 100 : 150); // Typing and deleting speed
    }
  }

  typeEffect();