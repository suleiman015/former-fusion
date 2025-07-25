// Smooth Scrolling for blog cards
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Only trigger if the click wasn't on a link or other interactive element
    if (!e.target.closest('a') && !e.target.closest('button')) {
      const readMore = this.querySelector('.read-more');
      if (readMore) {
        readMore.click();
      }
    }
  });
});

// Parallax effect for blog header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.blog-header');
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Lazy loading with IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.blog-card').forEach(card => {
  observer.observe(card);
});
