
function loadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) {
      return;
    }

    image.src = src;
    image.onload = () => {
      image.classList.remove('loading');
    };
  

    image.removeAttribute('data-src');
  }
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  

  document.querySelectorAll('img[data-src]').forEach(img => {
    img.classList.add('loading');
    observer.observe(img);
  });
  

  document.getElementById('loadImagesBtn').addEventListener('click', () => {
    console.log('Button clicked');
    document.querySelectorAll('img[data-src]').forEach(img => {
      loadImage(img);

      observer.unobserve(img);
    });
  });
 