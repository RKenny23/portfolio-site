let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// const toggleButton = document.getElementsByClassName('nav-toggler')[0];
// const navbarLinks = document.getElementsByClassName('nav-links')[0];

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active');
// });

// const images = document.querySelectorAll('img');

// images.forEach((image) => {
//   image.addEventListener('click', () => {
// image.style.transform(scale(1.5));
// console.log('clicked');
// image.style.width = '450px';
// image.style.height = 'auto';
// image.style.position = 'relative';
// image.style.display = 'flex';
// image.style.whiteSpace = 'nowrap';
// image.style.top = '0';
// image.style.zIndex = '999';
// image.style.left = '50%';
// image.style.marginLeft = '-50vw';
// image.style.marginRight = '-50vw';
// image.style.maxWidth = '100vw';
// image.style.position = 'absolute';
// image.style.right = '50%';
// image.style.width = '100vw';
//   });
// });

// images.forEach((image) => {
//   image.addEventListener('click', () => {
//     image.style.width = '450px';
//     image.style.height = 'auto';
//   });
// });
